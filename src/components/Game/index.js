
import {Component} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {RiCloseLine} from 'react-icons/ri'
import {
  Header,
  GamePage,
  Heading,
  ScoreContainer,
  Score,
  ChoiceContainer,
  ChoiceBtn,
  ChoiceImg,
  RulesImgDiv,
  RulesImg,
  TriggerBtn,
  RulesBtn,
  PlayAgainBtn,
  ResultDiv,
  PlayerChoicesDiv,
  PlayerChoiceDiv,
} from './styledComponents'

class Game extends Component {
  state = {
    score: 0,
    showResults: false,
    yourChoiseId: 0,
    opponenetChoiceId: 0,
    result: '',
  }

  componentDidMount = () => {
    this.setOpennetChoise()
  }

  setOpennetChoise = () => {
    const radom = Math.floor(Math.random() * 3)
    // console.log(radom)
    this.setState({opponenetChoiceId: radom})
  }

  onCheckResult = event => {
    const {opponenetChoiceId} = this.state
    const {choicesList} = this.props
    const userChoice = event.target.id

    const selesctedyourChoiseId = choicesList.findIndex(
      each => each.id === userChoice,
    )
    this.setState({yourChoiseId: selesctedyourChoiseId})
    const opponenetChoice = choicesList[opponenetChoiceId].id

    if (userChoice === 'PAPER' && opponenetChoice === 'ROCK') {
      this.setState(prevState => ({
        result: 'YOU WON',
        score: prevState.score + 1,
        showResults: true,
      }))
    } else if (userChoice === 'SCISSORS' && opponenetChoice === 'ROCK') {
      this.setState(prevState => ({
        result: 'YOU LOSE',
        score: prevState.score - 1,
        showResults: true,
      }))
    } else if (userChoice === 'ROCK' && opponenetChoice === 'PAPER') {
      this.setState(prevState => ({
        result: 'YOU LOSE',
        score: prevState.score - 1,
        showResults: true,
      }))
    } else if (userChoice === 'SCISSORS' && opponenetChoice === 'PAPER') {
      this.setState(prevState => ({
        result: 'YOU WON',
        score: prevState.score + 1,
        showResults: true,
      }))
    } else if (userChoice === 'ROCK' && opponenetChoice === 'SCISSORS') {
      this.setState(prevState => ({
        result: 'YOU WON',
        score: prevState.score + 1,
        showResults: true,
      }))
    } else if (userChoice === 'PAPER' && opponenetChoice === 'SCISSORS') {
      this.setState(prevState => ({
        result: 'YOU LOSE',
        score: prevState.score - 1,
        showResults: true,
      }))
    } else if (userChoice === opponenetChoice) {
      this.setState(prevState => ({
        result: 'IT IS DRAW',
        score: prevState.score,
        showResults: true,
      }))
    }
  }

  onPlayAgain = () => {
    this.setState({showResults: false})
    this.setOpennetChoise()
  }

  render() {
    const {score, showResults, result, opponenetChoiceId, yourChoiseId} =
      this.state
    // console.log(opponenetChoiceId)
    const {choicesList} = this.props
    return (
      <GamePage>
        <Header>
          <Heading>
            Rock
            <br />
            Paper
            <br />
            Scissors
          </Heading>

          <ScoreContainer>
            <Score>Score</Score>
            <Score>{score}</Score>
          </ScoreContainer>
        </Header>
        {showResults === false ? (
          <ChoiceContainer>
            <ChoiceBtn
              type="button"
              data-testid="rockButton"
              onClick={this.onCheckResult}
            >
              <ChoiceImg
                id="ROCK"
                alt={choicesList[0].id}
                src={choicesList[0].imageUrl}
              />
            </ChoiceBtn>
            <ChoiceBtn
              type="button"
              data-testid="paperButton"
              onClick={this.onCheckResult}
            >
              <ChoiceImg
                id="SCISSORS"
                alt={choicesList[1].id}
                src={choicesList[1].imageUrl}
              />
            </ChoiceBtn>
            <ChoiceBtn
              type="button"
              data-testid="scissorsButton"
              onClick={this.onCheckResult}
            >
              <ChoiceImg
                id="PAPER"
                alt={choicesList[2].id}
                src={choicesList[2].imageUrl}
              />
            </ChoiceBtn>
          </ChoiceContainer>
        ) : (
          <ResultDiv>
            <PlayerChoicesDiv>
              <PlayerChoiceDiv>
                <p>YOU</p>
                <ChoiceImg
                  alt="your choice"
                  src={choicesList[yourChoiseId].imageUrl}
                />
              </PlayerChoiceDiv>
              <PlayerChoiceDiv>
                <p>OPPONENT</p>
                <ChoiceImg
                  alt="opponent choice"
                  src={choicesList[opponenetChoiceId].imageUrl}
                />
              </PlayerChoiceDiv>
            </PlayerChoicesDiv>
            <p>{result}</p>
            <PlayAgainBtn type="button" onClick={this.onPlayAgain}>
              PLAY AGAIN
            </PlayAgainBtn>
          </ResultDiv>
        )}
        <Popup modal trigger={<RulesBtn type="button">Rules</RulesBtn>}>
          {close => (
            <>
              <RulesImgDiv>
                <TriggerBtn
                  type="button"
                  onClick={() => close()}
                  aria-label="close"
                >
                  <RiCloseLine />
                </TriggerBtn>
                <RulesImg
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </RulesImgDiv>
            </>
          )}
        </Popup>
      </GamePage>
    )
  }
}
export default Game
