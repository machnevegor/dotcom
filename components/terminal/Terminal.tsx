export interface TerminalProps {
  children: React.ReactNode;
}

export default function Terminal({ children }: TerminalProps) {
  return (
    <div className="w-90vw sm:w-lg h-sm sm:h-xs p-3 rd-3 shadow-lg">
      <div className="flex gap-2">
        <span className="w-4 h-4 rounded-full bg-black" />
        <span className="w-4 h-4 rounded-full bg-black" />
        <span className="w-4 h-4 rounded-full bg-black" />
      </div>
      <div className="overflow-y-scroll scrollbar-hide h-83 sm:h-67 mt-3">
        {children}
      </div>
    </div>
  );
}
