import Command from "~/components/command/Command.tsx";

export interface Link {
  title: string;
  url: string;
}

export interface ContactProps {
  links: Link[];
  onTyped?: () => void;
}

export default function Contact({ links, onTyped }: ContactProps) {
  return (
    <Command name="deno run contact.ts" onTyped={onTyped}>
      {links.map((link, i) => (
        <p className="font-mono text-xl" key={i}>
          {i + 1}){" "}
          <a className="color-green @hover:underline" href={link.url}>
            {link.title}
          </a>
        </p>
      ))}
    </Command>
  );
}
