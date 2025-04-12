'use client';

import { useState } from 'react';

interface ExerciseItem {
  sentence: string;
  options: string[];
  correctAnswer: string;
}

export default function VerbConjugation() {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);

  const exercises: ExerciseItem[] = [
    { sentence: "Ik ___ student.", options: ["ben", "bent", "is", "zijn"], correctAnswer: "ben" },
    { sentence: "Jij ___ een leraar.", options: ["ben", "bent", "is", "zijn"], correctAnswer: "bent" },
    { sentence: "Hij ___ mijn vriend.", options: ["ben", "bent", "is", "zijn"], correctAnswer: "is" },
    { sentence: "Wij ___ Nederlanders.", options: ["ben", "bent", "is", "zijn"], correctAnswer: "zijn" },
    { sentence: "U ___ op vakantie.", options: ["ben", "bent", "is", "zijn"], correctAnswer: "bent" },
    { sentence: "Mijn ouders ___ thuis.", options: ["ben", "bent", "is", "zijn"], correctAnswer: "zijn" },
    { sentence: "Het ___ koud buiten.", options: ["ben", "bent", "is", "zijn"], correctAnswer: "is" },
    { sentence: "Jullie ___ gelukkig.", options: ["ben", "bent", "is", "zijn"], correctAnswer: "zijn" },
    { sentence: "De kinderen ___ in de speeltuin.", options: ["ben", "bent", "is", "zijn"], correctAnswer: "zijn" },
    { sentence: "De appel ___ lekker.", options: ["ben", "bent", "is", "zijn"], correctAnswer: "is" },
    { sentence: "Ik ___ moe na het werk.", options: ["ben", "bent", "is", "zijn"], correctAnswer: "ben" },
    { sentence: "Jij ___ klaar voor de toets.", options: ["ben", "bent", "is", "zijn"], correctAnswer: "bent" },
    { sentence: "Het huis ___ groot en mooi.", options: ["ben", "bent", "is", "zijn"], correctAnswer: "is" },
    { sentence: "Wij ___ in Amsterdam.", options: ["ben", "bent", "is", "zijn"], correctAnswer: "zijn" },
    { sentence: "U ___ heel aardig.", options: ["ben", "bent", "is", "zijn"], correctAnswer: "bent" },
    { sentence: "De film ___ spannend.", options: ["ben", "bent", "is", "zijn"], correctAnswer: "is" },
    { sentence: "Ik ___ bezig met mijn huiswerk.", options: ["ben", "bent", "is", "zijn"], correctAnswer: "ben" },
    { sentence: "Mijn vrienden ___ altijd vrolijk.", options: ["ben", "bent", "is", "zijn"], correctAnswer: "zijn" },
    { sentence: "Het boek ___ interessant.", options: ["ben", "bent", "is", "zijn"], correctAnswer: "is" },
    { sentence: "Jij ___ mijn collega.", options: ["ben", "bent", "is", "zijn"], correctAnswer: "bent" },
  ];

  const handleSelectAnswer = (index: number, answer: string) => {
    setAnswers(prev => ({ ...prev, [index]: answer }));
  };

  const checkAnswers = () => {
    setShowResults(true);
  };

  const resetExercise = () => {
    setAnswers({});
    setShowResults(false);
  };

  const getScore = () => {
    let correct = 0;
    exercises.forEach((exercise, index) => {
      if (answers[index] === exercise.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  // Helper function to render sentence with the blank part highlighted
  const renderSentence = (index: number, sentence: string) => {
    const parts = sentence.split('___');
    if (parts.length !== 2) return sentence;
    
    return (
      <>
        {parts[0]}
        <span className={`font-bold ${showResults ? (answers[index] === exercises[index].correctAnswer ? 'text-success' : 'text-error') : ''}`}>
          {showResults ? answers[index] || '___' : '___'}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">OEFENING 1: Vervoeging van het werkwoord (VERBUM) 'zijn'</h2>
      <p className="mb-4">Kies de juiste vorm:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {exercises.map((exercise, index) => (
          <div key={index} className="card bg-base-100 shadow-sm p-4 flex flex-row items-center gap-2">
            <div className="flex-grow">
              <p className={`text-sm ${showResults && answers[index] === exercise.correctAnswer ? 'text-success font-medium' : 
                              showResults && answers[index] !== exercise.correctAnswer ? 'text-error font-medium' : ''}`}>
                {renderSentence(index, exercise.sentence)}
              </p>
            </div>
            <div className="flex-shrink-0">
              <select 
                className="select select-bordered select-sm w-20"
                value={answers[index] || ''}
                onChange={(e) => handleSelectAnswer(index, e.target.value)}
                disabled={showResults}
              >
                <option value="" disabled>Kies</option>
                {exercise.options.map((option, optionIndex) => (
                  <option key={optionIndex} value={option}>{option}</option>
                ))}
              </select>
            </div>
            {showResults && (
              <div className="flex-shrink-0">
                {answers[index] === exercise.correctAnswer ? 
                  <span className="text-success">✓</span> : 
                  <span className="text-error">✗</span>}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 flex gap-4">
        {!showResults ? (
          <button className="btn btn-primary" onClick={checkAnswers} disabled={Object.keys(answers).length < exercises.length}>
            Controleer antwoorden
          </button>
        ) : (
          <>
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-title">Je score</div>
                <div className="stat-value">{getScore()} / {exercises.length}</div>
                <div className="stat-desc">{Math.round((getScore() / exercises.length) * 100)}%</div>
              </div>
            </div>
            <button className="btn btn-outline" onClick={resetExercise}>
              Opnieuw proberen
            </button>
          </>
        )}
      </div>
    </div>
  );
}
