import React from "react";
import styled from 'styled-components';
const Steps = ({number, icon, text}) => {
  return (
    <StepsContainer>
      <Imgs icon={icon} number={number}/>
      <Description>{text}</Description>
    </StepsContainer>
  );
};




const StepsContainer = styled.div`
  display: flex;
  width: 220px;
  flex-direction: column;
  align-items: center;
  @media (min-width: 960px) {
    margin: 30px;
}
@media (min-width: 1380px) {
    margin: 0 50px;

}

`;

const Imgs = styled.div`
  height: 150px;
    width: 150px;
    border: #bfa67a 2px solid;
    border-radius: 50%;
    background-position: center center;
    background-size: 60%;
    margin: 30px;
    background-repeat: no-repeat;
    background-image: url(${props => props.icon});
    position: relative;
    
    &:after{
          content: "${props => props.number}";
          display: flex;
          font-weight: 700;
          justify-content: center;
          align-items: center;
          position: absolute;
          width: 30px;
          height: 30px;
          background-color: #bfa67a;
          top: 0;
          left: -20px;
          border-radius: 50%;
    
    }
`

const Description = styled.div`
    margin-top: 10px;
    text-align: center;
    justify-content: flex-start;
    color: white;
    padding-left: 10px;
    text-transform: uppercase;
    font-weight: 600;
    display: flex;
`

export default Steps;
