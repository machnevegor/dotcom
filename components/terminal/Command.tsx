import Line from "~/components/terminal/Line.tsx";
import Typer from "~/components/terminal/Typer.tsx";

export interface CommandProps {
  children: string;
  onTyped?: () => void;
}

export default function Command({ children, onTyped }: CommandProps) {
  return (
    <Line>
      <Typer onTyped={onTyped}>{children}</Typer>
    </Line>
  );
}
