import './App.css';
import {React, useState} from 'react';
import styled from 'styled-components';
import headshotsquare from './images/headshotsquare.jpg'

const HomepageContainer = styled.div`
  background-color: #235347;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5vh 5vw;
`;

const ContentContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 600px;
  box-sizing: border-box;
  background-color: #008158;
  border: white solid 2px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  color: white;
  padding: 2vh;
`;

const HeaderText = styled.div`
  width: inherit;
  font-size: 40px;
  font-weight: bold;
`;

const SubtitleText = styled.div`
  width: inherit;
  font-size: 20px;
  margin-bottom: 20px;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border: white solid 2px;
  border-radius: 100px;
`;

const TabButtonContainer = styled.div`
	position: relative;
  width: 100%;
	display: flex;
	align-items: center;  
  flex-direction: row;
  justify-content: space-between;
`;

const TabButton = styled.button`
  position: relative;
  width: 33.33%;
  background-color: dimgray;
  color: white;
  border: white solid 2px;
  border-radius: 10px 10px 0px 0px;
  padding: 5px;
  font-size: 20px;

  &:hover:enabled {
    background-color: white;
    color: dimgray;
    cursor: pointer;
  }

  &:disabled {
    background-color: #9DBCAB;
    cursor: default;
    border-bottom: #9DBCAB solid 2px;
  }
`;

const InfoContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  background-color: #9DBCAB;
  border: white solid 2px;
  border-top: none;
  border-radius: 0px 0px 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
  overflow: hidden;
`;

const TextArea = styled.div`
  width: 100%;
  box-sizing: border-box;
  font-size: 20px;
  text-align: left;
  overflow-wrap: break-word;
  display: flex;
	align-items: flex-start;  
  flex-direction: column;
  flex: 1 1 auto;
  scrollbar-gutter: stable;
  padding: 10px 20px;
  overflow-y: auto;
`

function App() {
  const [tab, setTab] = useState('About Me');

  const getText = () => {
    switch (tab){
      case('About Me'):
        return(
          <TextArea>
            <p>
              Hello! I'm Jamie Stade, a software developer and recent graduate 
              with a Bachelor of Science in Software Engineering from the 
              University of Calgary. My software development experience consists 
              of contract work with the Canadian Hereford Association, as well as 
              several hackathons and school projects in which I've gained very 
              valuable skills in both front-end and back-end development.
            </p>
            <p> 
              I'm also a math instructor at Mathnasium, as well as a former 
              programming instructor for the student-run club Schulich Ignite, 
              where I enjoy  teaching and mentoring students in the subjects I'm 
              passionate about. 
              I'm always looking for opportunities to meet new people and learn new skills.
            </p>
          </TextArea>
        );

      case('Skills'):
        return(
          <TextArea>
            <h1>Technical Skills:</h1>
            <p>
              Programming Languages: C, C++, Python, Java, C#, Javascript, PHP, HTML, CSS
            </p>
            <p>
              Web/App Development: Node.js, React, Python Django, Flask, KivyMD
            </p>
            <p>
              Database Management: SQL Server, SQLite, MongoDB
            </p>
            <p>
              Data Analytics and Machine Learning: PyTorch, Apache Hadoop, Apache Spark, Scikit-learn
            </p>
            <p>
              Automated Testing: JUnit, Jest, Selenium IDE
            </p>
            <p>
              Cloud Computing: AWS, Microsoft Azure
            </p>
            <p>
              Version Control: Git, Github
            </p>
          </TextArea>
        );

      case('Contact Me'):
        return(
          <TextArea>
          <p>
            Email: jamie1stade@gmail.com
          </p>
          <p>
            Phone: 403-472-1939
          </p>
          <p>
            LinkedIn: https://www.linkedin.com/in/jamie-stade-6a252122a
          </p>
          <p>
            Github: https://github.com/stadej
          </p>
        </TextArea>
        );
    }
  };

  return (
    <div className="App">
      <HomepageContainer>
        <ContentContainer>
          <ProfileImage src={headshotsquare}/>
          <HeaderText>Jamie Stade</HeaderText>
          <SubtitleText>Software Developer</SubtitleText>
          <TabButtonContainer>
            <TabButton
                onClick={() => {
                  setTab('About Me');
                }}
                disabled={tab === 'About Me'}
            >
              About Me
            </TabButton>
            <TabButton
                onClick={() => {
                  setTab('Skills');
                }}
                disabled={tab === 'Skills'}
            >
              Skills
            </TabButton>
            <TabButton
                onClick={() => {
                  setTab('Contact Me');
                }}
                disabled={tab === 'Contact Me'}
            >
              Contact Me
            </TabButton>
          </TabButtonContainer>
          <InfoContainer>
            {getText()}
          </InfoContainer>                
        </ContentContainer>
      </HomepageContainer>
    </div>
  );
}

export default App;
