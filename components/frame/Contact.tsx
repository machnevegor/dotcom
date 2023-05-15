import Frame from "~/components/frame/Frame.tsx";

export interface Link {
  title: string;
  url: string;
}

export interface ContactProps {
  links: Link[];
  onTyped?: () => void;
}

export default function Contact({ links, ...props }: ContactProps) {
  return (
    <Frame command="deno run contact.ts" {...props}>
      {links.map((link, i) => (
        <p className="font-mono text-xl" key={i}>
          {i + 1}){" "}
          <a className="color-green @hover:underline" href={link.url}>
            {link.title}
          </a>
        </p>
      ))}
    </Frame>
  );
}
