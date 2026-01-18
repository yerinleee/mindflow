import type { CardItem, CardType } from "../App";
import CardColumn from "./CardColumn";

type CardBoardProps = {
  cards: CardItem[];
  onMove: (id: string, nextType: CardType) => void;
};

const COLUMNS: { type: CardType; title: string }[] = [
  { type: "TYPE0", title: "입력대기" },
  { type: "TYPE1", title: "Type1" },
  { type: "TYPE2", title: "Type2" },
  { type: "TYPE3", title: "Type3" },
  { type: "TYPE4", title: "Type4" },
];

export default function CardBoard({ cards, onMove }: CardBoardProps) {
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 12 }}
    >
      {COLUMNS.map((col) => (
        <CardColumn
          key={col.type}
          title={col.title}
          type={col.type}
          items={cards.filter((c) => c.type === col.type)}
          onMove={onMove}
        />
      ))}
    </div>
  );
}
