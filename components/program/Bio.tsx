import Program from "~/components/program/Program.tsx";

export default function Bio({ onDone }: { onDone?: () => void }) {
  return (
    <Program command="cat README.md" onStart={onDone}>
      <p className="font-mono text-xl">
        I have two years of commercial experience in frontend and backend
        development.
      </p>
      <br />
      <p className="font-mono text-xl">TypeScript • Python • Rust</p>
      <br />
      <p className="font-mono text-xl">
        I do graph theory, decentralized data execution and storage. Currently I
        am interested in machine learning.
      </p>
    </Program>
  );
}
