import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import CountItem from '../CountItem'
import './index.css'

class CharacterCounter extends Component {
  state = {countList: [], searchInput: ''}

  renderCountcard = () => {
    const {countList} = this.state
    return (
      <div className="character-counter-bg">
        <div className="character-heading-container">
          <h1 className="character-heading">
            Count the characters like a <br />
            Boss...
          </h1>
        </div>
        {countList.length === 0 ? (
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
            alt="no user inputs"
            className="no-user-inputs"
          />
        ) : (
          <ul className="name-input-container">
            {countList.map(eachItem => (
              <CountItem eachItem={eachItem} key={eachItem.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }

  gettingInput = e => {
    this.setState({
      searchInput: e.target.value,
    })
  }

  countingWords = event => {
    event.preventDefault()
    const {searchInput} = this.state
    const inputDetails = {
      id: uuidV4(),
      name: searchInput,
      count: searchInput.length,
    }
    this.setState(prevState => ({
      searchInput: '',
      countList: [...prevState.countList, inputDetails],
    }))
  }

  renderInputCard = () => {
    const {searchInput} = this.state
    return (
      <div className="input-container">
        <h1 className="input-heading">Character Counter</h1>
        <form onSubmit={this.countingWords}>
          <input
            className="text-input"
            placeholder="Enter the Characters here"
            onChange={this.gettingInput}
            value={searchInput}
          />
          <button className="input-button" type="submit">
            Add
          </button>
        </form>
      </div>
    )
  }

  render() {
    return (
      <div className="character-counter-container">
        {this.renderCountcard()}
        {this.renderInputCard()}
      </div>
    )
  }
}

export default CharacterCounter
