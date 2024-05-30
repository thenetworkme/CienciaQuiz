import { useQuiz } from "../App";

function Options() {
  const { frases, dispatch, answer, index } = useQuiz();
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {frases.map((frase, fraseIndex) => (
        <button
          className={`btn btn-option ${fraseIndex === answer ? "answer" : ""} ${
            hasAnswered ? (fraseIndex === index ? "correct" : "wrong") : ""
          }`}
          key={frase.id}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: fraseIndex })}
        >
          {frase.autor}
        </button>
      ))}
    </div>
  );
}

export default Options;
