import Frame from "~/components/frame/Frame.tsx";

export interface WelcomeProps {
  directory: string;
  delay?: number;
  onTyped?: () => void;
}

export default function Welcome(args: WelcomeProps) {
  return (
    <Frame command="deno run welcome.ts" {...args}>
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
