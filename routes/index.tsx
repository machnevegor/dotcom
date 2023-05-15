import { useCallback, useEffect, useRef, useState } from "react";
import Bio from "~/components/frame/Bio.tsx";
import Choice from "~/components/frame/Choice.tsx";
import Contact from "~/components/frame/Contact.tsx";
import Welcome from "~/components/frame/Welcome.tsx";
import Command from "~/components/terminal/Command.tsx";
import Terminal from "~/components/terminal/Terminal.tsx";

const links = [
  { title: "GitHub", url: "https://github.com/machnevegor" },
  { title: "Telegram", url: "https://t.me/machnevegor" },
];

export default function Index() {
  const [history, setHistory] = useState<React.ReactNode[]>([]);
  const [isTyped, setIsTyped] = useState<boolean>(false);

  const welcome = useCallback(
    () => {
      history.push(
        <li key={history.length}>
          <Welcome directory="~/" onTyped={() => setIsTyped(true)} />
        </li>,
      );

      setHistory(history);
      setIsTyped(false);
    },
    [history.length],
  );

  const contact = useCallback(
    () => {
      history.push(
        <li key={history.length}>
          <Contact
            directory="~/"
            links={links}
            onTyped={() => setIsTyped(true)}
          />
        </li>,
      );

      setHistory(history);
      setIsTyped(false);
    },
    [history.length],
  );

  const bio = useCallback(
    () => {
      history.push(
        <li key={history.length}>
          <Bio directory="~/" onTyped={() => setIsTyped(true)} />
        </li>,
      );

      setHistory(history);
      setIsTyped(false);
    },
    [history.length],
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
          directory="~/"
          command="ls"
          options={[
            { name: "welcome.ts", callback: welcome },
            { name: "contact.ts", callback: contact },
            { name: "README.txt", callback: bio },
          ]}
          onTyped={() => setIsTyped(true)}
          disabled={!isTyped}
        />
        <ul>{history}</ul>
        {isTyped && <Command directory="~/" />}
        <div ref={dungeon} />
      </Terminal>
    </main>
  );
}
