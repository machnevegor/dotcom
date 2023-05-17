import Command from "~/components/command/Command.tsx";

export interface Option {
  name: string;
  callback: () => void;
}

export interface ChoiceProps {
  name: string;
  options: Option[];
  onTyped?: () => void;
  disabled?: boolean;
}

export default function Choice(
  { name, options, onTyped, disabled }: ChoiceProps,
) {
  return (
    <Command name={name} onTyped={onTyped}>
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
    </Command>
  );
}
