import { useState } from "react";
import Command from "~/components/terminal/Command.tsx";

export interface FrameProps {
  directory: string;
  command: string;
  children: React.ReactNode;
  delay?: number;
  onTyped?: () => void;
}

export default function Frame(
  { command, children, onTyped, ...args }: FrameProps,
) {
  const [isTyped, setIsTyped] = useState<boolean>(false);

  return (
    <>
      <Command
        onTyped={() => {
          setIsTyped(true);
          onTyped?.();
        }}
        {...args}
      >
        {command}
      </Command>
      {isTyped && children}
    </>
  );
}
