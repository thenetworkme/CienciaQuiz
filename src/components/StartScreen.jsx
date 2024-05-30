import { useQuiz } from "../App";

function StartScreen() {
  const { numQuestions, dispatch } = useQuiz();

  return (
    <div className="start">
      <h2>Bienvenido/a al Quiz Científico!!</h2>
      <h3>{numQuestions} adivinanzas</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        ¡Empieza ya!
      </button>
    </div>
  );
}

export default StartScreen;
