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

const FormattedText = styled.p`
  margin-bottom: 0px;
`

const BoldText = styled.p`
  font-weight: bold;
  margin-bottom: 0px;
`

function App() {
  const [tab, setTab] = useState('About Me');

  const getText = () => {
    switch (tab){
      case('About Me'):
        return(
          <TextArea>
            <FormattedText>
              Hello! I'm Jamie Stade, a software developer and recent graduate with a 
              Bachelor of Science in Software Engineering from the University of Calgary. 
              My software development experience consists of several hackathons and personal projects, 
              as well as professional projects for the Canadian Sheep Federation and 
              Canadian Hereford Association, in which I've gained very valuable skills 
              in both front-end and back-end development.
            </FormattedText>
            <FormattedText>
              I've also worked as a math instructor at Mathnasium, as well as a programming 
              instructor for the student-run club Schulich Ignite, where I enjoy teaching 
              and mentoring students in the subjects I'm passionate about. I'm always 
              looking for opportunities to meet new people and learn new skills.
            </FormattedText>
          </TextArea>
        );

      case('Skills'):
        return(
          <TextArea>
            <BoldText>Technical Skills:</BoldText>
            <FormattedText>
              Programming Languages: <br/>C, C++, Python, Java, C#, Javascript, PHP, HTML, CSS
            </FormattedText>
            <FormattedText>
              Web/App Development: <br/>Node.js, React, Python Django, Flask, KivyMD
            </FormattedText>
            <FormattedText>
              Database Management: <br/>SQL Server, SQLite, MongoDB
            </FormattedText>
            <FormattedText>
              Data Analytics and Machine Learning: <br/>PyTorch, Apache Hadoop, Apache Spark, Scikit-learn
            </FormattedText>
            <FormattedText>
              Automated Testing: <br/>JUnit, Jest, Selenium IDE
            </FormattedText>
            <FormattedText>
              Cloud Computing: <br/>AWS, Microsoft Azure
            </FormattedText>
            <FormattedText>
              Version Control: <br/>Git, Github
            </FormattedText>
            <FormattedText>
              Adding to this list :)
            </FormattedText>
          </TextArea>
        );

      case('Contact Me'):
        return(
          <TextArea>
            <FormattedText>
              Phone: (403) 472-1939
            </FormattedText>
            <FormattedText>
              Email: <a href="mailto:jamie1stade@gmail.com">jamie1stade@gmail.com</a>
            </FormattedText>
            <FormattedText>
              LinkedIn: <a href="https://www.linkedin.com/in/jamie-stade-6a252122a">www.linkedin.com/in/jamie-stade-6a252122a</a>
            </FormattedText>
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
