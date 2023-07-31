import React, { useState } from "react";
import Poll from "./Poll";

function PollsPage() {
  // Sample poll data (You can fetch this from a database or API)
  const samplePoll = {
    question: "What is your favorite color?",
    options: [
      { id: 1, text: "Red", votes: 0 },
      { id: 2, text: "Blue", votes: 0 },
      { id: 3, text: "Green", votes: 0 },
    ],
  };

  const [poll, setPoll] = useState(samplePoll);

  const handleVote = (optionId) => {
    // Find the selected option by its ID
    const selectedOption = poll.options.find(
      (option) => option.id === optionId
    );
    if (selectedOption) {
      // Update the vote count for the selected option
      const updatedOptions = poll.options.map((option) =>
        option.id === optionId ? { ...option, votes: option.votes + 1 } : option
      );
      setPoll({ ...poll, options: updatedOptions });
    }
  };

  return (
    <div>
      <h2>{poll.question}</h2>
      <ul>
        {poll.options.map((option) => (
          <Poll key={option.id} option={option} handleVote={handleVote} />
        ))}
      </ul>
    </div>
  );
}

export default PollsPage;
