import Program from "~/components/program/Program.tsx";

export default function Welcome({ onDone }: { onDone?: () => void }) {
  return (
    <Program command="deno run welcome.ts" onStart={onDone}>
      <p className="font-mono text-xl">
        Hi! My name is Egor Machnev. I am a student of{" "}
        <a
          className="color-green @hover:underline"
          href="https://innopolis.university/"
        >
          Innopolis University
        </a>, Department of Data Science and AI.
      </p>
    </Program>
  );
}
