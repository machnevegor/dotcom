import Caret from "~/components/Caret.tsx";

export interface CommandProps {
  children: string;
  delay?: number;
  onTyped?: () => void;
}

export default function Command({ children, ...options }: CommandProps) {
  return (
    <p className="font-mono text-xl">
      <span className="color-blue">machnevegor</span> ~{" "}
      <Caret className="caret" {...options}>{children}</Caret>
    </p>
  );
}
