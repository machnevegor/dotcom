import { useCallback, useState } from "react";
import Command from "~/components/terminal/Command.tsx";

export interface ProgramProps {
  command: string;
  children: React.ReactNode;
  onStart?: () => void;
}

export default function Program({ command, children, onStart }: ProgramProps) {
  const [isTyped, setIsTyped] = useState<boolean>(false);

  const onTyped = useCallback(
    () => {
      setIsTyped(true);
      onStart?.();
    },
    [],
  );

  return (
    <>
      <Command onTyped={onTyped}>{command}</Command>
      {isTyped && children}
    </>
  );
}
