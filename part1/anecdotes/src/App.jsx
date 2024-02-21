/* 1.12 part 1.0
import { useState } from 'react'
const Button = property => (<button onClick={property.handleClick}>{property.text}</button>)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const nextAnecdote = () => { setSelected(Math.floor(Math.random() * anecdotes.length)) }

  return (
    <div>
      {anecdotes[selected]}
        <div>
        <Button handleClick={nextAnecdote} text="next anecdote" />
      </div>
    </div>
  )
}
*/
/*1.13 Step 2.0
import { useState } from 'react'
const Button = property => (<button onClick={property.handleClick}>{property.text}</button>)
const Vote = property => (<p>has {property.votes} votes</p>)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVoted] = useState(Array(anecdotes.length).fill(0))
  const votedAnecdote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVoted(copy)
  }
  const nextAnecdote = () => { setSelected(Math.floor(Math.random() * anecdotes.length)) }

  return (
    <div>
      {anecdotes[selected]}
      <Vote votes={votes[selected]} />
      <div>
        <Button handleClick={votedAnecdote} text="vote" />
        <Button handleClick={nextAnecdote} text="next anecdote" />
      </div>
    </div>
  )
}
*/
import { useState } from 'react'

const Button = property => (<button onClick={property.handleClick}>{property.text}</button>)
const Title = property => (<h1>{property.text}</h1>)
const Anecdote = property => {
  return (
    <div>
      <p>{property.anecdote}</p>
      <p>has {property.votes} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVoted] = useState(Array(anecdotes.length).fill(0))
  const copy = [...votes]
  const votedAnecdote = () => {
    copy[selected] += 1
    setVoted(copy)
  }
  const nextAnecdote = () => { setSelected(Math.floor(Math.random() * anecdotes.length)) }
  const Max_VotedAnecdotes = ({ anecdotes, votes }) => {
    const max = Math.max(...votes)
    const maxVotedAnecdote = copy.indexOf(max)

    if (max === 0) {
      return (
        <div>
          <p style={{ fontSize: "20px" , fontfamily: "Times New Roman"}}>Not votes yet</p>
        </div>
      )
    }
    else {
      return (
        <div>
          <p>{anecdotes[maxVotedAnecdote]}</p>
          <p>Has {max} votes</p>
        </div>
      )
    }
  }

  return (
    <div>
      <Title text="Anecdote of the day" />
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
      <div>
        <Button handleClick={votedAnecdote} text="vote" />
        <Button handleClick={nextAnecdote} text="next anecdote" />
      </div>
      <Title text="Anecdote with most votes" />
      <Max_VotedAnecdotes anecdotes={anecdotes} votes={copy} />
    </div>
  )
}

export default App