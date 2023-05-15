import Frame from "~/components/frame/Frame.tsx";

export interface Link {
  title: string;
  url: string;
}

export interface ContactProps {
  directory: string;
  links: Link[];
  delay?: number;
  onTyped?: () => void;
}

export default function Contact({ links, ...args }: ContactProps) {
  return (
    <Frame command="deno run contact.ts" {...args}>
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
