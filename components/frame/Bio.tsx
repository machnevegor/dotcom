import Frame from "~/components/frame/Frame.tsx";

export interface BioProps {
  onTyped?: () => void;
}

export default function Bio(props: BioProps) {
  return (
    <Frame command="cat README.md" {...props}>
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
    </Frame>
  );
}
