export default function Line({ children }: { children?: React.ReactNode }) {
  return (
    <p className="font-mono text-xl select-none">
      <span className="color-blue">machnevegor</span> ~/ {children}
    </p>
  );
}
