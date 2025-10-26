'use client'

import Image from "next/image";
import { useState } from "react";

let randomSentences = [
  {
    "sentence": "The quick brown fox jumps over the lazy dog."
  },
  {
    "sentence": "My Mum tries to be cool by saying that she likes all the same things that I do."
  },
  {
    "sentence": "A purple pig and a green donkey flew a kite in the middle of the night and ended up sunburnt."
  },
  {
    "sentence": "Last Friday I saw a spotted striped blue worm shake hands with a legless lizard."
  },
  {
    "sentence": "A song can make or ruin a person’s day if they let it get to them."
  },
  {
    "sentence": "Sometimes it is better to just walk away from things and go back to them later when you’re in a better frame of mind."
  },
  {
    "sentence": "Writing a list of random sentences is harder than I initially thought it would be."
  }
]; 

export default function Home() {
  const [messages, setMessages] = useState<string[]>([]);

  const [inputMessage, setInputMessage] = useState<string>('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      const randomIndex = Math.floor(Math.random() * randomSentences.length);
      const newResponse = randomSentences[randomIndex].sentence;

      setMessages([...messages, inputMessage, newResponse]);
      setInputMessage('');
    }
  };

  return (
    <div>
    <div>
      {messages.map((msg, index) => (
        <p key={index}>{msg}</p>
      ))}
    </div>
    <form onSubmit={handleSendMessage}>
      <input
        type="text"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
            
        
      />
      <button type="submit">Send</button>
    </form>
    
    
  </div>
  );
}
