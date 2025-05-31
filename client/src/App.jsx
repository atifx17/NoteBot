import React, { useState, useEffect } from "react";
import { Home, StickyNote, Info } from "lucide-react";

export default function App() {
  const [input, setInput] = useState("");
  const [flashcards, setFlashcards] = useState([]);
  const [loading, setLoading] = useState(false);

const fetchFlashcard = async (query) => {
  setLoading(true);
  try {
    const res = await fetch("https://notebot-h1qu.onrender.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic: query }),
    });

    const data = await res.json();

    if (data.success && data.result) {
      const flashcard = {
        id: Date.now(),
        question: query,
        answer: data.result,
      };

      const updated = [...flashcards, flashcard];
      setFlashcards(updated);
      localStorage.setItem("flashcards", JSON.stringify(updated));
    } else {
      alert("No answer found or error from server.");
    }
  } catch (err) {
    console.error("API fetch error:", err);
    alert("Something went wrong while fetching data.");
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
  const saved = localStorage.getItem("flashcards");
  if (saved) setFlashcards(JSON.parse(saved));
}, []);




  const handleAdd = () => {
    if (input.trim()) {
      fetchFlashcard(input);
      setInput("");
    }
  };

const handleDelete = (id) => {
  const updated = flashcards.filter(card => card.id !== id);
  setFlashcards(updated);
  localStorage.setItem("flashcards", JSON.stringify(updated));
};


  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-2 text-xl font-bold">
          <StickyNote className="w-6 h-6" /> NoteBot
        </div>
        <div className="flex gap-4">
          <Home className="w-5 h-5 cursor-pointer" />
          <StickyNote className="w-5 h-5 cursor-pointer" />
          <Info className="w-5 h-5 cursor-pointer" />
        </div>
      </nav>

      {/* Main content */}
      <main className="p-6 max-w-3xl mx-auto w-full flex-grow">
        <h1 className="text-2xl font-bold mb-4">NoteBot Flashcards</h1>
        <div className="flex gap-2 mb-6">
          <input
            className="border p-2 flex-grow rounded"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter topic..."
          />
          <button
            onClick={handleAdd}
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            {loading ? "Loading..." : "Generate"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {flashcards.map((card) => (
            <div
              key={card.id}
              className="border rounded p-4 relative bg-white shadow"
            >
              <p className="font-semibold">{card.question}</p>
              <p className="text-gray-700 mt-2 whitespace-pre-line">{card.answer}</p>
              <button
                onClick={() => handleDelete(card.id)}
                className="absolute top-2 right-2 text-red-500"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center p-4 mt-auto">
        <p className="text-gray-600">&copy; 2025 NoteBot. All rights reserved.</p>
      </footer>
    </div>
  );
}