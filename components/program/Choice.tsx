import Program from "~/components/program/Program.tsx";

export interface Option {
  name: string;
  callback: () => void;
}

export interface ChoiceProps {
  command: string;
  options: Option[];
  onDone?: () => void;
  disabled?: boolean;
}

export default function Choice(
  { command, options, onDone, disabled }: ChoiceProps,
) {
  return (
    <Program command={command} onStart={onDone}>
      <div className="grid sm:grid-cols-3 justify-items-start">
        {options.map((option, i) => (
          <button
            key={i}
            className="font-mono text-xl color-green @hover:underline"
            disabled={disabled}
            onClick={option.callback}
          >
            {option.name}
          </button>
        ))}
      </div>
    </Program>
  );
}
