export interface LineProps {
  children?: React.ReactNode;
}

export default function Line({ children }: LineProps) {
  return (
    <p className="font-mono text-xl">
      <span className="color-blue">machnevegor</span> ~/ {children}
    </p>
  );
}
