import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [dumps, setDumps] = useState<string[]>([]);

  const cardAdd = () => {
    if (input.trim() === "") return;

    setDumps([...dumps, input]);
    setInput("");
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          cardAdd();
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="지금 머릿속에 있는 생각을 그대로 적어보세요"
        />
        <button type="submit" onClick={cardAdd}>
          추가
        </button>
      </form>
      <ul style={{ marginTop: 20 }}>
        {dumps.map((dump, index) => (
          <li key={index} style={{ marginBottom: 8 }}>
            {dump}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
