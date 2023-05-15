import Program from "~/components/program/Program.tsx";

export interface Option {
  name: string;
  callback: () => void;
}

export interface ChoiceProps {
  command: string;
  options: Option[];
  onTyped?: () => void;
  disabled?: boolean;
}

export default function Choice({ options, disabled, ...props }: ChoiceProps) {
  return (
    <Program {...props}>
      <div className="grid sm:grid-cols-3 justify-items-start">
        {options.map((option, i) => (
          <button
            className="font-mono text-xl color-green @hover:underline"
            disabled={disabled}
            onClick={option.callback}
            key={i}
          >
            {option.name}
          </button>
        ))}
      </div>
    </Program>
  );
}
