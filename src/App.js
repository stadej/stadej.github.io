import './App.css';
import React from 'react';
import styled from 'styled-components'

const HomepageContainer = styled.div`
  background-color: #235347;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const ContentContainer = styled.div`
  background-color: #DAF1DE;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`

function App() {
  return (
    <div className="App">
      <HomepageContainer>
        <ContentContainer>
          <h2>Jamie Stade</h2>
          <h4>Software Developer</h4>
        </ContentContainer>
      </HomepageContainer>
    </div>
  );
}

export default App;
