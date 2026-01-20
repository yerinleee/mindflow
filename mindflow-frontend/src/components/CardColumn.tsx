import type { CardItem, CardType } from "../App";
import Card from "./Card";

type CardColumnProps = {
  title: string;
  type: CardType;
  items: CardItem[];
  onMove: (id: string, nextType: CardType) => void;
};

export default function CardColumn({
  title,
  type,
  items,
  onMove,
}: CardColumnProps) {
  const handleDragOver = (e: ReactDragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    if (!id) return;

    onMove(id, type);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      style={{
        border: "1px solid #ddd",
        borderRadius: 12,
        padding: 12,
        minHeight: 300,
        background: "#fafafa",
      }}
    >
      <h3 style={{ marginTop: 0 }}>{title}</h3>

      {items.length === 0 ? (
        <p style={{ color: "#888" }}>여기로 드롭하세요</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {items.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
