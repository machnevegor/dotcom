import Frame from "~/components/frame/Frame.tsx";

export interface WelcomeProps {
  onTyped?: () => void;
}

export default function Welcome(props: WelcomeProps) {
  return (
    <Frame command="deno run welcome.ts" {...props}>
      <p className="font-mono text-xl">
        Hi! My name is Egor Machnev. I am a student of{" "}
        <a
          className="color-green @hover:underline"
          href="https://innopolis.university/"
        >
          Innopolis University
        </a>, Department of Data Analysis and AI.
      </p>
    </Frame>
  );
}
