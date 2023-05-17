import confetti from "canvas-confetti";
import { useCallback } from "react";
import Program from "~/components/program/Program.tsx";

export default function Welcome({ onDone }: { onDone?: () => void }) {
  const onTyped = useCallback(
    () => {
      confetti({ spread: 180, origin: { y: 0 } });

      onDone?.();
    },
    [],
  );

  return (
    <Program command="deno run welcome.ts" onStart={onTyped}>
      <p className="font-mono text-xl">
        Hi! My name is Egor Machnev. I am a student of{" "}
        <a
          className="color-green @hover:underline"
          href="https://innopolis.university/"
        >
          Innopolis University
        </a>, Department of Data Analysis and AI.
      </p>
    </Program>
  );
}
