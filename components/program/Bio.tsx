import Program from "~/components/program/Program.tsx";

export default function Bio({ onTyped }: { onTyped?: () => void }) {
  return (
    <Program command="cat README.md" onTyped={onTyped}>
      <p className="font-mono text-xl">
        I have two years of commercial experience in frontend and backend
        development.
      </p>
      <br />
      <p className="font-mono text-xl">TypeScript • Python • Rust</p>
      <br />
      <p className="font-mono text-xl">
        I am currently interested in graph theory, decentralized databases, and
        machine learning.
      </p>
    </Program>
  );
}
