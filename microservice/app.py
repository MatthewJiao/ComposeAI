from flask import Flask
from flask import jsonify
from flask_cors import CORS, cross_origin

import pickle
import numpy
from music21 import instrument, note, stream, chord
from keras.models import Sequential
from keras.layers import Dense
from keras.layers import Dropout
from keras.layers import LSTM
from keras.layers import BatchNormalization as BatchNorm
from keras.layers import Activation
from datetime import datetime




app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'







def timer(start_time=None):
    if not start_time:
        start_time = datetime.now()
        return start_time
    elif start_time:
        thour, temp_sec = divmod(
            (datetime.now() - start_time).total_seconds(), 3600)
        tmin, tsec = divmod(temp_sec, 60)
        print('\n Time taken: %i hours %i minutes and %s seconds.' %
              (thour, tmin, round(tsec, 2)))


def generate(features):
    """ Generate a piano midi file """
    # load the notes used to train the model
    print("load notes")
    start_time = timer(None)
    with open("data/" + str(features), 'rb') as filepath:
        notes = pickle.load(filepath)
    timer(start_time)

    # Get all pitch names
    pitchnames = sorted(set(item for item in notes))
    # Get all pitch names
    n_vocab = len(set(notes))

    print("create network")
    start_time = timer(None)
    network_input, normalized_input = prepare_sequences(
        notes, pitchnames, n_vocab)
    model = create_network(normalized_input, n_vocab, features)
    timer(start_time)

    print("generate notes")
    start_time = timer(None)
    prediction_output = generate_notes(
        model, network_input, pitchnames, n_vocab)
    timer(start_time)

    return prediction_output


def prepare_sequences(notes, pitchnames, n_vocab):
    """ Prepare the sequences used by the Neural Network """
    # map between notes and integers and back
    note_to_int = dict((note, number)
                       for number, note in enumerate(pitchnames))

    sequence_length = 100
    network_input = []
    output = []
    for i in range(0, len(notes) - sequence_length, 1):
        sequence_in = notes[i:i + sequence_length]
        sequence_out = notes[i + sequence_length]
        network_input.append([note_to_int[char] for char in sequence_in])
        output.append(note_to_int[sequence_out])

    n_patterns = len(network_input)

    # reshape the input into a format compatible with LSTM layers
    normalized_input = numpy.reshape(
        network_input, (n_patterns, sequence_length, 1))
    # normalize input
    normalized_input = normalized_input / float(n_vocab)

    return (network_input, normalized_input)


def create_network(network_input, n_vocab, features):
    """ create the structure of the neural network """
    model = Sequential()
    model.add(LSTM(
        512,
        input_shape=(network_input.shape[1], network_input.shape[2]),
        recurrent_dropout=0.3,
        return_sequences=True
    ))
    model.add(LSTM(512, return_sequences=True, recurrent_dropout=0.3,))
    model.add(LSTM(512))
    model.add(BatchNorm())
    model.add(Dropout(0.3))
    model.add(Dense(256))
    model.add(Activation('relu'))
    model.add(BatchNorm())
    model.add(Dropout(0.3))
    model.add(Dense(n_vocab))
    model.add(Activation('softmax'))
    model.compile(loss='categorical_crossentropy', optimizer='rmsprop')

    # Load the weights to each node
    model.load_weights("./models/" + str(features) + "-weights.hdf5")

    return model


def generate_notes(model, network_input, pitchnames, n_vocab):
    """ Generate notes from the neural network based on a sequence of notes """
    # pick a random sequence from the input as a starting point for the prediction
    start = numpy.random.randint(0, len(network_input)-1)

    int_to_note = dict((number, note)
                       for number, note in enumerate(pitchnames))

    pattern = network_input[start]
    prediction_output = []

    # generate 500 notes
    for note_index in range(100):
        prediction_input = numpy.reshape(pattern, (1, len(pattern), 1))
        prediction_input = prediction_input / float(n_vocab)

        print("note: ", note_index)
        start_time = timer(None)
        prediction = model.predict(prediction_input, verbose=0)
        timer(start_time)

        index = numpy.argmax(prediction)
        result = int_to_note[index]
        prediction_output.append(result)

        pattern.append(index)
        pattern = pattern[1:len(pattern)]

    return prediction_output


@app.route('/predict/<features>')
@cross_origin()
def index1(features):
    try:
        notes = generate(features)
        print(features)
        
        '''s3 = boto3.resource(
                                    's3',
                                    aws_access_key_id=ACCESS_KEY_ID,
                                    aws_secret_access_key=ACCESS_SECRET_KEY,
                                    config=Config(signature_version='s3v4')
                                )
                        
                                s3.Bucket(BUCKET_NAME).upload_file('test.png', data)
                                
                                print ("Done")'''

        return jsonify(notes)

    except:
        return "Error"


@app.route('/')
@cross_origin()
def start():
    return "hello"


if __name__ == "__main__":
    app.run(debug=True)
