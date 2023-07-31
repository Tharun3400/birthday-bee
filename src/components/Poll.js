import React from "react";

function Poll({ option, handleVote }) {
  return (
    <li>
      <button onClick={() => handleVote(option.id)}>{option.text}</button>
      <span>Votes: {option.votes}</span>
    </li>
  );
}

export default Poll;
