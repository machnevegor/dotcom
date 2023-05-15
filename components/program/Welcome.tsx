import Program from "~/components/program/Program.tsx";

export default function Welcome({ onTyped }: { onTyped?: () => void }) {
  return (
    <Program command="deno run welcome.ts" onTyped={onTyped}>
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
