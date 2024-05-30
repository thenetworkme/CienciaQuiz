import { useQuiz } from "../App";
import Options from "./Options";

function Question() {
  const { frases, index } = useQuiz();
  const frase = frases.at(index);

  console.log(frase);

  return (
    <div>
      <p className="question">¿Quién dijo esta frase?:</p>
      <h4>{frase.frase}</h4>

      <Options frases={frases} />
    </div>
  );
}

export default Question;
