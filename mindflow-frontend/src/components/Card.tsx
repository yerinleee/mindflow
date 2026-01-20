import type { CardItem } from "../App";

type CardProps = {
  item: CardItem;
};

export default function Card({ item }: CardProps) {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text/plain", item.id);
    e.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      style={{
        border: "1px solid #ccc",
        borderRadius: 8,
        padding: 10,
        background: "#fff",
        cursor: "grab",
      }}
      title="드래그해서 다른 칸으로 이동"
    >
      {item.text}
    </div>
  );
}
