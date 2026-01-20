import { useState } from "react";

type CardInputProps = {
  onAdd: (text: string) => void;
};

export default function CardInput({ onAdd }: CardInputProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;

    onAdd(text);
    setInput("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="지금 머릿속에 있는 생각을 그대로 적어보세요"
          style={{ width: "100%", padding: 12, fontSize: 16 }}
        />
        <button type="submit" style={{ marginTop: 10, padding: "8px 16px" }}>
          추가
        </button>
      </form>
    </>
  );
}
