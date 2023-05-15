import { useEffect, useState } from "react";

export interface CaretProps {
  children: string;
  delay?: number;
  onTyped?: () => void;
}

export default function Caret({ children, delay = 240, onTyped }: CaretProps) {
  const [buffer, setBuffer] = useState<string>("");
  const [cursor, setCursor] = useState<number>(0);

  useEffect(
    () => {
      const timer = setTimeout(
        () => {
          if (cursor === children.length) return onTyped?.();

          setBuffer(buffer + children[cursor]);
          setCursor(cursor + 1);
        },
        cursor ? 120 + 180 * (Math.random() - 0.5) : delay,
      );

      return () => clearTimeout(timer);
    },
    [cursor],
  );

  return (
    <>
      {buffer}
      {cursor !== children.length &&
        <span className="inline-block w-3 h-6 align-sub bg-black" />}
    </>
  );
}
