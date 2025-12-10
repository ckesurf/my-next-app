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

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
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
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              To get started, type in the text box.
            </h1>
            <div>
              {messages.map((msg, index) => (
                <p style={{ backgroundColor: "#2c2a2a", padding: "10px", margin: "10px" }} key={index}>{msg}</p>
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
        </main>
      </div>
    </div>
  );
}
