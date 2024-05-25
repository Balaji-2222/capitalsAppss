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
  render() {
    return (
      <div className="bgContainer">
        <div className="smallContainer">
          <h1>Capital City</h1>
          <select>
            {countryAndCapitalsList.map(eachItem => (
              <option>eachItem.capitalDisplayText</option>
            ))}
          </select>
        </div>
      </div>
    )
  }
}

export default Capitals
