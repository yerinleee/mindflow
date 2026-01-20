import { useState } from "react";
import CardInput from "./components/CardInput";
import CardBoard from "./components/CardBoard";
import "./App.css";

export type CardType = "TYPE0" | "TYPE1" | "TYPE2" | "TYPE3" | "TYPE4";

export type CardItem = {
  id: string;
  text: string;
  type: CardType;
  createdAt: number;
};

function App() {
  const [cards, setCards] = useState<CardItem[]>([]);

  const handleAddCard = (text: string) => {
    const newItem: CardItem = {
      id: crypto.randomUUID(),
      text,
      type: "TYPE0",
      createdAt: Date.now(),
    };

    setCards((prev) => [newItem, ...prev]);
  };

  const handleMoveCard = (id: string, nextType: CardType) => {
    setCards((prev) =>
      prev.map((item) => (item.id === id ? { ...item, type: nextType } : item))
    );
  };

  return (
    <div style={{ padding: 24, maxWidth: 1100, margin: "0 auto" }}>
      <h1> mind flow</h1>
      <CardInput onAdd={handleAddCard} />
      <CardBoard cards={cards} onMove={handleMoveCard} />
    </div>
  );
}

export default App;
