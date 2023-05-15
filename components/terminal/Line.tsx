export interface LineProps {
  directory: string;
  children?: React.ReactNode;
}

export default function Line({ directory, children }: LineProps) {
  return (
    <p className="font-mono text-xl">
      <span className="color-blue">machnevegor</span> {directory} {children}
    </p>
  );
}
