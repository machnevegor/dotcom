import Program from "~/components/program/Program.tsx";

export interface Link {
  title: string;
  url: string;
}

export interface ContactProps {
  links: Link[];
  onDone?: () => void;
}

export default function Contact({ links, onDone }: ContactProps) {
  return (
    <Program command="deno run contact.ts" onStart={onDone}>
      {links.map((link, i) => (
        <p key={i} className="font-mono text-xl">
          {i + 1}){" "}
          <a className="color-green @hover:underline" href={link.url}>
            {link.title}
          </a>
        </p>
      ))}
    </Program>
  );
}
