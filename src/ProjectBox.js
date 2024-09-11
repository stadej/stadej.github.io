import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const ProjectContainer = styled.div`
	position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-color: #008158;
	display: flex;
	align-items: start;  
    flex-direction: column;
    justify-content: center;
    border: white solid 2px;
    border-radius: 20px;
    padding: 20px;
    gap: 10px;

    &:hover {
        transition: transform 0.1s;
        transform: scale(1.1, 1.1);
    }
`;

const ThumbnailImage = styled.img`
    width: 100%;
    border-radius: 10px;
`;

const ElementName = styled.div`
    width: inherit;
    font-size: 30px;
    font-weight: bold;
`;

const OtherText = styled.div`
    width: inherit;
    font-size: 15px;
    overflow-wrap: break-word;
`;

export default function ProjectBox({info}) {

    return(
        <ProjectContainer
            onClick={() => {window.open(info.link, '_blank').focus()}} 
        >
            <ThumbnailImage src={info.image}/>
            <ElementName>{info.title}</ElementName>
            <OtherText>{info.description}</OtherText>
            <OtherText>Tech Stack: {info.tech_stack}</OtherText>
        </ProjectContainer>
    );
};

ProjectBox.propTypes = {
    info: propTypes.any,
}