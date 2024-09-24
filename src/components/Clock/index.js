import {Component} from 'react'
import './index.css'

class Clock extends Component {
  state = {
    date: new Date(),
    timer: 0,
  }

  componentDidMount() {
    this.state.timer = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    const {timer} = this.state
    clearInterval(timer)
  }

  tick = () => {
    this.setState({
      date: new Date(),
    })
  }

  render() {
    const {date} = this.state
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
