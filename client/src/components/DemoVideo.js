import React from "react";
import styled from "styled-components";



const DemoVideo = () => {
  const embedId = 'U7gZxsSiCzs'
  return (
    <Container>
      <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
    </Container>
  );
};


const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1e2033;
  

  

`;



export default DemoVideo;