import { useState } from "react";
import Caret from "~/components/terminal/Caret.tsx";
import Line from "~/components/terminal/Line.tsx";

export interface CommandProps {
  name: string;
  children: React.ReactNode;
  onTyped?: () => void;
}

export default function Command({ name, children, onTyped }: CommandProps) {
  const [isTyped, setIsTyped] = useState<boolean>(false);

  return (
    <>
      <Line>
        <Caret
          onTyped={() => {
            setIsTyped(true);
            onTyped?.();
          }}
        >
          {name}
        </Caret>
      </Line>
      {isTyped && children}
    </>
  );
}
