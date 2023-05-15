export default function Line({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xl">
      <span className="color-blue">machnevegor</span> ~/ {children}
    </p>
  );
}
