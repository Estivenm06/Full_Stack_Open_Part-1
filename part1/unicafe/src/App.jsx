import { useState } from 'react'

/* 1.6 Step 1.0
const App = () => {
  // saves each button clicks in its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Button = props => (<button onClick={props.handleClick}>{props.text}</button>)

  const handlegoodClick =  => setGood(good + 1)
  

  const handleneutralClick =  => setNeutral(neutral + 1)
  

  const handlebadClick =  => setBad(bad + 1)
  

  const Display = props => (<p style={{ fontWeight: "bold" }}>{props.text}: {props.value}</p>)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handlegoodClick} text="Nood" />
      <Button handleClick={handleneutralClick} text="Neutral" />
      <Button handleClick={handlebadClick} text="Bad" />
      <h3>Statistics</h3>
      <div>
        <Display text={"Good"} value={good} />
        <Display text={"Neutral"} value={neutral} />
        <Display text={"Bad"} value={bad} />
      </div>
    </div>
  )
}
*/
/* 1.7 step 2.0
const App = () => {
  // saves each button clicks in its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Button = props => (<button onClick={props.handleClick}>{props.text}</button>)

  const handlegoodClick = () => setGood(good + 1)


  const handleneutralClick = () => setNeutral(neutral + 1)


  const handlebadClick = () => setBad(bad + 1)

  const sum = (good + neutral + bad)
  const average = (good * 1 + neutral * 0 + bad * (-1)) / sum
  const positive = (parseFloat(good / sum) * 100)


  const Display = props => (<p style={{ fontWeight: "bold" }}>{props.text}: {props.value}</p>)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handlegoodClick} text="Nood" />
      <Button handleClick={handleneutralClick} text="Neutral" />
      <Button handleClick={handlebadClick} text="Bad" />
      <h3>Statistics</h3>
      <div>
        <Display text={"Good"} value={good} />
        <Display text={"Neutral"} value={neutral} />
        <Display text={"Bad"} value={bad} />
        <Display text={"Total"} value={sum} />
        <Display text={"Average"} value={average} />
        <Display text={"Positive"} value={positive} />

      </div>
    </div>
  )
}
*/
/* 1.8 step 3.0
const Statistics = (props) => {
  return (
    <div>
      <h3>Statistics</h3>
      <Display text={"Good"} value={props.good} />
      <Display text={"Neutral"} value={props.neutral} />
      <Display text={"Bad"} value={props.bad} />
      <Display text={"Total"} value={sum} />
      <Display text={"Average"} value={(props.good * 1 + props.neutral * 0 + props.bad * (-1))/sum} />
      <Display text={"Positive"} value={(props.good / sum) * 100} />
      
    </div>

  )
}

const Button = props => (<button onClick={props.handleClick}>{props.text}</button>)

const Display = props => (<p style={{ fontSize: "20px" }}>{props.text}: {props.value}</p>)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  // don't define components inside another component
  const handlegoodClick = () => setGood(good + 1)

  const handleneutralClick = () => setNeutral(neutral + 1)

  const handlebadClick = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handlegoodClick} text="Nood" />
      <Button handleClick={handleneutralClick} text="Neutral" />
      <Button handleClick={handlebadClick} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
*/



/* 1.9 step 4.0
const Statistics = (props) => {
  const sum = props.good + props.neutral + props.bad
  if (sum === 0) {
    return (
      <h3>Statistics</h3>
      <p>No feedback given</p>
    )
  }
  return (
    <div>
      <h3>Statistics</h3>
      <Display text={"Good"} value={props.good} />
      <Display text={"Neutral"} value={props.neutral} />
      <Display text={"Bad"} value={props.bad} />
      <Display text={"Total"} value={sum} />
      <Display text={"Average"} value={(props.good * 1 + props.neutral * 0 + props.bad * (-1))/sum} />
      <Display text={"Positive"} value={(props.good / sum) * 100} />
      
    </div>

  )
}

const Button = props => (<button onClick={props.handleClick}>{props.text}</button>)

const Display = props => (<p style={{ fontSize: "20px" }}>{props.text}: {props.value}</p>)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  // don't define components inside another component
  const handlegoodClick = () => setGood(good + 1)

  const handleneutralClick = () => setNeutral(neutral + 1)

  const handlebadClick = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handlegoodClick} text="Nood" />
      <Button handleClick={handleneutralClick} text="Neutral" />
      <Button handleClick={handlebadClick} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}
*/
/*1.10 step 5.0
const StatisticsLine = props => (<p style={{ fontSize: "20px" }}>{props.text}: {props.value}</p>)

const Statistics = (props) => {
  const sum = props.good + props.neutral + props.bad
  let average = ((props.good * 1 + props.neutral * 0 + props.bad * (-1))/sum)
  let positive = ((props.good / sum) * 100)
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
      <Header text="Statistics" />
      <StatisticsLine text="Good" value={props.good} />
      <StatisticsLine text="Neutral" value={props.neutral} />
      <StatisticsLine text="Bad" value={props.bad} />
      <StatisticsLine text="Total" value={sum} />
      <StatisticsLine text="Average" value={average} />
      <StatisticsLine text="Positive" value={positive} />

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
      <Button handleClick={handlegoodClick} text="Nood" />
      <Button handleClick={handleneutralClick} text="Neutral" />
      <Button handleClick={handlebadClick} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}
*/
/*1.11 step 6.0
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
      <Button handleClick={handlegoodClick} text="Nood" />
      <Button handleClick={handleneutralClick} text="Neutral" />
      <Button handleClick={handlebadClick} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}
*/
export default App