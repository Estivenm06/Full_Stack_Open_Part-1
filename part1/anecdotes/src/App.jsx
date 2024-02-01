/*Exercise 1.1*/
/*
const App = (props) => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = (props) => {
    return (
      <div>
        <h1>{props.course}</h1>
      </div>
    )
  }

  const Content = (props) => {
    return (
      <div>
        <ul>
          <li>
            {props.part1}, {props.exercises1}
          </li>
          <li>
            {props.part2}, {props.exercises2}
          </li>
          <li>
            {props.part3}, {props.exercises3}
          </li>
        </ul>
      </div>
    )
  }

  const Total = props => {
    return (
      <div>
        <p>Total of exercises is = {props.exercises1 + props.exercises2 + props.exercises3} </p>
      </div>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}
*/


const App = () => {

  const course = "Half Stack application development";

  const Header = property => {
    return (
      <div>
        <h1>{property.course}</h1>
      </div>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total />
    </div>
  )
}

  const Part = props => {
    return (
      <div>
        <p> {props.part}, {props.exercises}</p>
      </div>
    )
  }

  const Content = () => {
    const objects = array.map(
      function (list) {
        return (
          <div>
            <Part part={list.part} exercises={list.exercises} />
          </div>
        )
      }
    )
    return objects;
  }

const array = [
  {
    id: 1,
    part: "Fundamentals of React",
    exercises: 10
  },
  {
    id: 2,
    part: "Using props to pass data",
    exercises: 7,
  },
  {
    id: 3,
    part: "State of a component",
    exercises: 14,
  }
]

const Total = () => {
  var number = 0;
  for (var i = 0; i < array.length; i++) {
    number = number + array[i].exercises
  }
  return (
    <div>
      <p>Total of exercises = {number}</p>
    </div>
  )
}

export default App