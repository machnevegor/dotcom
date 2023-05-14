import Caret from "~/components/Caret.tsx";

export interface CommandProps {
  children: string;
  delay?: number;
  onTyped?: () => void;
}

export default function Command({ children, delay, onTyped }: CommandProps) {
  return (
    <p className="font-mono text-xl">
      <span className="color-blue">machnevegor</span> ~{" "}
      <Caret className="caret" delay={delay} onTyped={() => onTyped?.()}>
        {children}
      </Caret>
    </p>
  );
}
