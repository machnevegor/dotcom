import { useCallback, useEffect, useRef, useState } from "react";

import Bio from "~/components/program/Bio.tsx";
import Choice from "~/components/program/Choice.tsx";
import Contact from "~/components/program/Contact.tsx";
import Welcome from "~/components/program/Welcome.tsx";
import Caret from "~/components/terminal/Caret.tsx";
import Hint from "~/components/terminal/Hint.tsx";
import Line from "~/components/terminal/Line.tsx";
import Terminal from "~/components/terminal/Terminal.tsx";

const LINKS = [
  { title: "GitHub", url: "https://github.com/machnevegor" },
  { title: "Telegram", url: "https://t.me/machnevegor" },
  { title: "Twitter", url: "https://twitter.com/machnevegor" },
];

export default function Index() {
  const [history, setHistory] = useState<React.ReactNode[]>([]);
  const [isTyped, setIsTyped] = useState<boolean>(false);

  const bio = useCallback(
    () => {
      history.push(
        <li key={history.length}>
          <Bio onDone={() => setIsTyped(true)} />
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
          <Contact links={LINKS} onDone={() => setIsTyped(true)} />
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
          <Welcome onDone={() => setIsTyped(true)} />
        </li>,
      );

      setHistory(history);
      setIsTyped(false);
    },
    [history],
  );

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(
    () => bottomRef.current?.scrollIntoView({ behavior: "smooth" }),
    [isTyped],
  );

  return (
    <main className="grid h-[100dvh] place-content-center">
      <Terminal>
        <Choice
          command="ls"
          options={[
            { name: "README.md", callback: bio },
            { name: "contact.ts", callback: contact },
            { name: "welcome.ts", callback: welcome },
          ]}
          onDone={() => setIsTyped(true)}
          disabled={!isTyped}
        />
        <ul>{history}</ul>
        {isTyped && (
          <Line>
            <Caret />
            {!history.length && (
              <>
                {" "}
                <Hint>choose a file</Hint>
              </>
            )}
          </Line>
        )}
        <div ref={bottomRef} />
      </Terminal>
    </main>
  );
}
