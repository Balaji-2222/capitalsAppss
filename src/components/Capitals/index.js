import {Component} from 'react'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {activeId: countryAndCapitalsList[0].capitalDisplayText}

  selectCountry = event => {
    this.setState({activeId: event.target.value})
  }

  render() {
    const {activeId} = this.state
    const text = countryAndCapitalsList.find(
      element => element.capitalDisplayText === activeId,
    )
    console.log(text)
    return (
      <div className="bgContainer">
        <div className="smallContainer">
          <h1>Countries And Capitals</h1>
          <select onChange={this.selectCountry}>
            {countryAndCapitalsList.map(eachItem => (
              <option value={eachItem.capitalDisplayText} key={eachItem.id}>
                {eachItem.capitalDisplayText}
              </option>
            ))}
            <p>is capital of which country</p>
          </select>
          <p>{text.country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
