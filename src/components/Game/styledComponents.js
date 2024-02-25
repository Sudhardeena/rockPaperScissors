import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  border-style: solid;
  border-width: 2px;
  border-color: #ffffff;
  padding: 10px 20px;
  border-radius: 10px;
`
export const GamePage = styled.div`
  height: 100vh;
  width: 910px;
  margin: auto;
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 30px 10px;
  font-family: Roboto;
`
export const Heading = styled.h1`
  font-size: 20px;
  color: #ffffff;
`
export const ScoreContainer = styled.div`
  background-color: #ffffff;
  color: #223a5f;
  width: 100px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70px;
`
export const Score = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin: 0;
  margin-bottom: 5px;
  font-family: Roboto;
`
export const ChoiceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: c;
  max-width: 350px;
`
export const ChoiceBtn = styled.button`
  background-color: transparent;
  border: none;
`
export const ChoiceImg = styled.img`
  width: 150px;
`
export const RulesImg = styled.img`
  width: 80%;
`
export const RulesImgDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const TriggerBtn = styled.button`
  align-self: flex-end;
`
export const RulesBtn = styled.button`
  align-self: flex-end;
  background-color: #ffffff;
  border: none;
  color: #223a5f;
  padding: 5px 10px;
  border-radius: 5px;
  width: 70px;
  font-family: roboto;
  font-weight: bold;
`
export const PlayAgainBtn = styled(RulesBtn)`
  width: 100px;
  align-self: center;
`
export const ResultDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
`
export const PlayerChoicesDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
`
export const PlayerChoiceDiv = styled.div`
  text-align: center;
`
