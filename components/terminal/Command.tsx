import Caret from "~/components/terminal/Caret.tsx";
import Line from "~/components/terminal/Line.tsx";

export interface CommandProps {
  directory: string;
  children: string;
  delay?: number;
  onTyped?: () => void;
}

export default function Command(
  { directory, children, ...args }: CommandProps,
) {
  return (
    <Line directory={directory}>
      <Caret {...args}>{children}</Caret>
    </Line>
  );
}
