import Command from "~/components/command/Command.tsx";

export default function Bio({ onTyped }: { onTyped?: () => void }) {
  return (
    <Command name="cat README.md" onTyped={onTyped}>
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
    </Command>
  );
}
