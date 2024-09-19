import './App.css';
import {React, useState} from 'react';
import styled from 'styled-components';
import ProjectBox from './ProjectBox.js';
import headshotsquare from './images/headshotsquare.jpg';

import workoutmixbuilder from './images/workoutmixbuilder.png';
import hereford from './images/hereford.png';
import houseofcards from './images/houseofcards.png';
import YYCiosk from './images/YYCiosk.png';
import blaze from './images/blaze.png';

const HomepageContainer = styled.div`
  background-color: #235347;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 5vh 5vw;
  gap: 5vw;

  @media (max-width: 1000px){
    flex-direction: column;
  }
`;

const ContentContainer = styled.div`
  position: sticky;
  top: 5vh;
  left: 5vw;
  height: 90vh;
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

  @media (max-width: 1000px){
    position: relative;
    top: 0;
    left: 0;
    max-width: 100%;
  }
`;

const ProjectsHeaderContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  color: white;
  gap: 2vh;
`;

const ProjectsContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: inline-grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, auto));
  grid-auto-rows: 1fr;
  align-items: start;
  justify-content: space-between;
  color: white;
  gap: 2vh;
`;

const HeaderText = styled.div`
  width: inherit;
  font-size: 40px;
  font-weight: bold;
`;

const SubtitleText = styled.div`
  width: inherit;
  font-size: 30px;
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
`;

const FormattedText = styled.p`
  margin-bottom: 0px;
`;

const BoldText = styled.p`
  font-weight: bold;
  margin-bottom: 0px;
`;

const ProjectsInfo = [
  {
    title: 'Workout Mix Builder',
    image: workoutmixbuilder,
    description: 'Built a React web app from scratch that utilizes a music api to create personalized playlists with songs within a given bpm range',
    tech_stack: 'React, JavaScript, HTML/CSS, Spotify Web API',
    link: 'https://stadej.github.io/WorkoutMixBuilder/',
  },
  {
    title: 'SDP Draw',
    image: hereford,
    description: 'Developed a custom solution for automating a bull draw process',
    tech_stack: 'C++, Google Sheets, Google Forms',
    link: 'https://github.com/stadej/SDPDraw',
  },
  {
    title: 'YYC-iosk',
    image: YYCiosk,
    description: 'Worked with a team to design an interface for an interactive kiosk that people can use to locate points of interest around Calgary',
    tech_stack: 'React, JavaScript, HTML/TailwindCSS, MongoDB',
    link: 'https://yyciosk-hvhvapcvdjeqbqfm.canadacentral-01.azurewebsites.net/',
  },
  {
    title: 'House of Cards',
    image: houseofcards,
    description: 'Designed, tested, and deployed a card game forum website',
    tech_stack: 'PHP, HTML/CSS, MySQL',
    link: 'https://goldenagesolutions.ca/HouseOfCards/index.php',
  },
  {
    title: 'Schulich Ignite Blaze',
    image: blaze,
    description: 'Built a new learning management system for the student-run club Schulich Ignite',
    tech_stack: 'Python Django, SQLite',
    link: 'https://github.com/Descent098/blaze',
  },
];

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
              and mentoring students in subjects I'm passionate about. I'm always 
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
              Database Management: <br/>MySQL, SQL Server, SQLite, MongoDB
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
        <ProjectsHeaderContainer>
          <HeaderText>Projects I've Worked On:</HeaderText>
          <ProjectsContainer>
            {(ProjectsInfo.map((project, index) => 
              (<ProjectBox 
                  key={index} 
                  info={project}
                />)
            ))}
          </ProjectsContainer>
        </ProjectsHeaderContainer>
      </HomepageContainer>
    </div>
  );
}

export default App;
