import Caret from "~/components/terminal/Caret.tsx";

export interface CommandProps {
  directory: string;
  children?: string;
  delay?: number;
  onTyped?: () => void;
}

export default function Command(
  { directory, children, ...args }: CommandProps,
) {
  return (
    <p className="font-mono text-xl">
      <span className="color-blue">machnevegor</span> {directory} {children
        ? <Caret {...args}>{children}</Caret>
        : <span className="inline-block w-3 h-6 align-sub bg-black" />}
    </p>
  );
}
