import { useEffect, useState } from "react";

const Button = (property) => (
  <button onClick={property.handleClick}>{property.text}</button>
);
const Title = (property) => <h1>{property.text}</h1>;
const Anecdote = (property) => {
  return (
    <div>
      <p>{property.anecdote}</p>
      <p>has {property.votes} votes</p>
    </div>
  );
};

const MaxVotedAnecdote = ({ anecdotes, votes }) => {
  const max = Math.max(...votes);
  const maxVotedAnecdote = votes.indexOf(max);

  if (max === 0) {
    return (
      <div>
        <p style={{ fontSize: "20px", fontfamily: "Times New Roman" }}>
          Not votes yet
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <p>{anecdotes[maxVotedAnecdote]}</p>
        <p>Has {max} votes</p>
      </div>
    );
  }
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVoted] = useState(Array(anecdotes.length).fill(0));

  const copyVotes = [...votes];

  const handleVoted = () => {
    copyVotes[selected] += 1;
    setVoted(copyVotes);
  };

  return (
    <div>
      <Title text="Anecdote of the day" />
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
      <div>
        <Button handleClick={handleVoted} text="vote" />
        <Button
          handleClick={() =>
            setSelected(Math.floor(Math.random() * anecdotes.length))
          }
          text="next anecdote"
        />
      </div>
      <Title text="Anecdote with most votes" />
      <MaxVotedAnecdote anecdotes={anecdotes} votes={votes} />
    </div>
  );
};

export default App;
