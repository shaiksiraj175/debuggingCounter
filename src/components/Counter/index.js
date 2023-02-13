import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 0}

  onDecrement = () => {
    this.setState(prevState => ({count: prevState.count - 1}))
  }

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="app-container">
        <h1 className="count">Count {count}</h1>
        <button className="button" type="button" onClick={this.onIncrement}>
          Increase
        </button>
        <button className="button" type="button" onClick={this.onDecrement}>
          Decrease
        </button>
      </div>
    )
  }
}

export default Counter
