/* eslint-disable react/prop-types */
import { useState } from 'react'

const StatisticsLine = props => (<div style={{ fontSize: "20px" }}>{props.text} {props.value}</div>)

const Statistics = (props) => {
  const sum = props.good + props.neutral + props.bad
  let average = parseFloat((props.good * 1 + props.neutral * 0 + props.bad * (-1)) / sum)
  let positive = parseFloat((props.good / sum) * 100)
  if (sum === 0) {
    return (
      <div>
        <Header text="Statistics" />
        <Comments text="No feedback given" />
      </div>
    )
  }
  return (
    <div>
      <table>
        <th>
        <Header text="Statistics" />
        </th>
        <tr>
          <StatisticsLine text="Good"/>
          <td><StatisticsLine value={props.good}/></td>
        </tr>
        <tr>
        <StatisticsLine text="Neutral" />
          <td><StatisticsLine value={props.neutral}/></td>
        </tr>
        <tr>
          <StatisticsLine text="Bad" />
          <td><StatisticsLine value={props.bad}/></td>
        </tr>
        <tr>
          <StatisticsLine text="Total" />
          <td><StatisticsLine value={sum}/></td>
        </tr>
        <tr>
          <StatisticsLine text="Average" />
          <td><StatisticsLine value={average}/></td>
        </tr>
        <tr>
          <StatisticsLine text="Positive" />
          <td><StatisticsLine value={positive}/></td>
        </tr>
      </table>
    </div>

  )
}
const Button = props => (<button onClick={props.handleClick}>{props.text}</button>)
const Header = props => (<h1>{props.text}</h1>)
const Comments = props => (<p>{props.text}</p>)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handlegoodClick = () => setGood(good + 1)
  const handleneutralClick = () => setNeutral(neutral + 1)
  const handlebadClick = () => setBad(bad + 1)

  return (
    <div>
      <Header text="Give feedback" />
      <Button handleClick={handlegoodClick} text="Good" />
      <Button handleClick={handleneutralClick} text="Neutral" />
      <Button handleClick={handlebadClick} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App