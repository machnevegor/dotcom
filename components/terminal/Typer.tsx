import { useEffect, useState } from "react";
import Caret from "~/components/terminal/Caret.tsx";

export interface TyperProps {
  children: string;
  onTyped?: () => void;
}

export default function Typer({ children, onTyped }: TyperProps) {
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
        cursor ? 120 + 180 * (Math.random() - 0.5) : 240,
      );

      return () => clearTimeout(timer);
    },
    [cursor],
  );

  return <>{buffer}{cursor !== children.length && <Caret />}</>;
}
