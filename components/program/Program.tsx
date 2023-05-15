import { useState } from "react";
import Command from "~/components/terminal/Command.tsx";

export interface ProgramProps {
  command: string;
  children: React.ReactNode;
  onTyped?: () => void;
}

export default function Program({ command, children, onTyped }: ProgramProps) {
  const [isTyped, setIsTyped] = useState<boolean>(false);

  return (
    <>
      <Command
        onTyped={() => {
          setIsTyped(true);
          onTyped?.();
        }}
      >
        {command}
      </Command>
      {isTyped && children}
    </>
  );
}
