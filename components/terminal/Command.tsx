import Caret from "~/components/terminal/Caret.tsx";
import Line from "~/components/terminal/Line.tsx";

export interface CommandProps {
  children: string;
  onTyped?: () => void;
}

export default function Command({ children, onTyped }: CommandProps) {
  return (
    <Line>
      <Caret onTyped={onTyped}>{children}</Caret>
    </Line>
  );
}
