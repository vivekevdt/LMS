import { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
    {
      question: "What does a red traffic light mean?",
      options: ["Go", "Slow down", "Stop", "Speed up"],
      answer: "Stop",
    },

  ];
export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore((prev) => prev + 1);
    }

    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      navigate("/result", { state: { score, total: questions.length } });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-2xl p-6 border border-green-300">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm text-gray-600">
            Question {current + 1} of {questions.length}
          </span>

        </div>

        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          {questions[current].question}
        </h2>

        <div className="grid gap-3">
          {questions[current].options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(option)}
              className="w-full p-3 text-left bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-all duration-200"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
