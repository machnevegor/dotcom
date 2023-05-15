import { useCallback, useEffect, useRef, useState } from "react";
import Bio from "~/components/program/Bio.tsx";
import Choice from "~/components/program/Choice.tsx";
import Contact from "~/components/program/Contact.tsx";
import Welcome from "~/components/program/Welcome.tsx";
import Line from "~/components/terminal/Line.tsx";
import Terminal from "~/components/terminal/Terminal.tsx";

const links = [
  { title: "GitHub", url: "https://github.com/machnevegor" },
  { title: "Telegram", url: "https://t.me/machnevegor" },
];

export default function Index() {
  const [history, setHistory] = useState<React.ReactNode[]>([]);
  const [isTyped, setIsTyped] = useState<boolean>(false);

  const bio = useCallback(
    () => {
      history.push(
        <li key={history.length}>
          <Bio onTyped={() => setIsTyped(true)} />
        </li>,
      );

      setHistory(history);
      setIsTyped(false);
    },
    [history],
  );

  const contact = useCallback(
    () => {
      history.push(
        <li key={history.length}>
          <Contact links={links} onTyped={() => setIsTyped(true)} />
        </li>,
      );

      setHistory(history);
      setIsTyped(false);
    },
    [history],
  );

  const welcome = useCallback(
    () => {
      history.push(
        <li key={history.length}>
          <Welcome onTyped={() => setIsTyped(true)} />
        </li>,
      );

      setHistory(history);
      setIsTyped(false);
    },
    [history],
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
          command="ls"
          options={[
            { name: "README.md", callback: bio },
            { name: "contact.ts", callback: contact },
            { name: "welcome.ts", callback: welcome },
          ]}
          onTyped={() => setIsTyped(true)}
          disabled={!isTyped}
        />
        <ul>{history}</ul>
        {isTyped && (
          <Line>
            <span className="inline-block w-3 h-6 align-sub bg-black" />
            {!history.length &&
              <span className="opacity-40">{" "}choose a file</span>}
          </Line>
        )}
        <div ref={dungeon} />
      </Terminal>
    </main>
  );
}
