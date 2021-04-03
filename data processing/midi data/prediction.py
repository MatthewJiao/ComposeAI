import pickle
#for tensorflow
from keras.models import Sequential
from keras.layers import Dense
from keras.layers import Dropout
from keras.layers import LSTM
from keras.layers import Activation
from keras.utils import np_utils
from keras.callbacks import ModelCheckpoint
from keras.layers import BatchNormalization as BatchNorm
import numpy as np 
 
with open('data/data_storage', 'rb') as filepath:
    s_arr = pickle.load(filepath)

maping = sorted(set(item for item in s_arr))


note_int = dict((note, number) for number, note in enumerate(maping))
int_note = dict((number, note) for number, note in enumerate(maping))

sequence_length = 50
input_arr = []
for i in range(0, len(s_arr) - sequence_length, 1):
    sequence_in = s_arr[i:i + sequence_length]

    input_arr.append([note_int[char] for char in sequence_in])

input = np.reshape(input_arr, (len(input_arr), sequence_length, 1))

model = Sequential()
model.add(LSTM(
    256,
    input_shape=(input.shape[1], input.shape[2]),
    recurrent_dropout=0.3,
    return_sequences=True
))

model.add(LSTM(256, return_sequences=True, recurrent_dropout=0.3,))
model.add(LSTM(256))
model.add(BatchNorm())
model.add(Dropout(0.25))

model.add(Dense(len(maping)))
model.add(Activation('softmax'))
model.compile(loss='categorical_crossentropy', optimizer='rmsprop')

model.load_weights('./04-3.8574-bigger.hdf5')





start = np.random.randint(0, len(input)-1)
pattern = input[start]


prediction_output = []

for note_index in range(99):
    prediction_input = np.reshape(pattern, (1, len(pattern), 1))
    #print(prediction_input.shape)
    prediction = model.predict(prediction_input, verbose=0)

    index = np.argmax(prediction)
    result = int_note[index]
    prediction_output.append(result)

    #pattern.append(index)
    pattern = np.append(pattern, index)
    pattern = pattern[1:len(pattern)]




print(prediction_output)