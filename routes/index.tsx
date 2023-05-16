import { useCallback, useEffect, useRef, useState } from "react";
import Bio from "~/components/command/Bio.tsx";
import Choice from "~/components/command/Choice.tsx";
import Contact from "~/components/command/Contact.tsx";
import Welcome from "~/components/command/Welcome.tsx";
import Line from "~/components/terminal/Line.tsx";
import Terminal from "~/components/terminal/Terminal.tsx";

const links = [
  { title: "GitHub", url: "https://github.com/machnevegor" },
  { title: "Telegram", url: "https://t.me/machnevegor" },
];

export default function Index() {
  const [content, setContent] = useState<React.ReactNode[]>([]);
  const [isTyped, setIsTyped] = useState<boolean>(false);

  const bio = useCallback(
    () => {
      content.push(
        <li key={content.length}>
          <Bio onTyped={() => setIsTyped(true)} />
        </li>,
      );

      setContent(content);
      setIsTyped(false);
    },
    [content],
  );

  const contact = useCallback(
    () => {
      content.push(
        <li key={content.length}>
          <Contact links={links} onTyped={() => setIsTyped(true)} />
        </li>,
      );

      setContent(content);
      setIsTyped(false);
    },
    [content],
  );

  const welcome = useCallback(
    () => {
      content.push(
        <li key={content.length}>
          <Welcome onTyped={() => setIsTyped(true)} />
        </li>,
      );

      setContent(content);
      setIsTyped(false);
    },
    [content],
  );

  const dungeon = useRef<HTMLDivElement>(null);

  useEffect(
    () => dungeon.current?.scrollIntoView({ behavior: "smooth" }),
    [isTyped],
  );

  return (
    <main className="grid h-[calc(100dvh)] place-content-center">
      <Terminal>
        <Choice
          name="ls"
          options={[
            { name: "README.md", callback: bio },
            { name: "contact.ts", callback: contact },
            { name: "welcome.ts", callback: welcome },
          ]}
          onTyped={() => setIsTyped(true)}
          disabled={!isTyped}
        />
        <ul>{content}</ul>
        {isTyped && (
          <Line>
            <span className="inline-block w-3 h-6 align-sub bg-black" />
            {!content.length &&
              <span className="opacity-40">{" "}choose a file</span>}
          </Line>
        )}
        <div ref={dungeon} />
      </Terminal>
    </main>
  );
}
