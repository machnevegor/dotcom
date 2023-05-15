import { useState } from "react";
import Command from "~/components/terminal/Command.tsx";

export interface FrameProps {
  command: string;
  children: React.ReactNode;
  onTyped?: () => void;
}

export default function Frame({ command, children, onTyped }: FrameProps) {
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
