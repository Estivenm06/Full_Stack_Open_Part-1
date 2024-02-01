/*
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component ',
    exercises: 14
  }

  return (
    <div>
      <h1>
        {course}
      </h1>
      <p>
        {part1.name}, {part1.exercises}
      </p>
      <p>
        {part2.name}, {part2.exercises}
      </p>
      <p>
        {part3.name}, {part3.exercises}
      </p>
      Total of exercises : {part1.exercises + part2.exercises + part3.exercises}
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <h1>
        {course}
      </h1>
      <p>{parts[0].name}, {parts[0].exercises}</p>
      <p>{parts[1].name}, {parts[1].exercises}</p>
      <p>{parts[2].name}, {parts[2].exercises}</p>
      Total of exercises: {parts[0].exercises + parts[1].exercises + parts[2].exercises}
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  const Header = props => {
    return(
      <div>
        <h1>{props.course}</h1>
      </div>
    )
  };

  const Content = props => {
    return(
      <div>
        <p>{props.parts[0].name}, {props.parts[0].exercises}</p>
        <p>{props.parts[1].name}, {props.parts[1].exercises}</p>
        <p>{props.parts[2].name}, {props.parts[2].exercises}</p>
      </div>
    )
  }

  const Total = props => {
    var number = 0;
    for(var i = 0; i < props.parts.length; i++){
      number = number + props.parts[i].exercises
    };
    return(
      <div>
        <p>Total of exercises: {number}</p>
      </div>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )


}
*/

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  )
}

export default App
