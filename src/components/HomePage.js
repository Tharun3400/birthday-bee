import React, { useState } from "react";

function BirthdayWishingPage() {
  const [message, setMessage] = useState("");
  const [recipientName, setRecipientName] = useState("");

  const handleWishSubmit = (e) => {
    e.preventDefault();
    // You can implement the logic to send the birthday wish here
    // For simplicity, we just display the message in this example
    alert(`Wishing ${recipientName} a Happy Birthday!\n\nMessage: ${message}`);
    setMessage("");
    setRecipientName("");
  };

  return (
    <div>
      <h2>Birthday Wishing</h2>
      <form onSubmit={handleWishSubmit}>
        <div>
          <label>Recipient's Name:</label>
          <input
            type="text"
            value={recipientName}
            onChange={(e) => setRecipientName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Birthday Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send Birthday Wish</button>
      </form>
    </div>
  );
}

export default BirthdayWishingPage;
