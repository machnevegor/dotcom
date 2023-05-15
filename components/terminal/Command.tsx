import Caret from "~/components/terminal/Caret.tsx";
import Line from "~/components/terminal/Line.tsx";

export interface CommandProps {
  children: string;
  onTyped?: () => void;
}

export default function Command({ children, ...props }: CommandProps) {
  return (
    <Line>
      <Caret {...props}>{children}</Caret>
    </Line>
  );
}
