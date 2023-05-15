import { useEffect, useRef, useState } from "react";
import Caret from "~/components/Caret.tsx";
import Command from "~/components/Command.tsx";
import Terminal from "~/components/Terminal.tsx";

export default function Index() {
  const [upper, setUpper] = useState<number>(0);
  const [lower, setLower] = useState<number>(0);

  const frames = [
    // welcome
    <Command onTyped={() => setLower(lower + 2)} key={0}>
      deno run welcome.ts
    </Command>,
    <p className="font-mono text-xl" key={1}>
      Hi! My name is Egor Machnev. I am a student of{" "}
      <a className="color-green" href="https://innopolis.university/">
        Innopolis University
      </a>, Department of Data Analysis and AI.
    </p>,
    // clear
    <Command
      delay={5000}
      onTyped={() => {
        setUpper(lower + 1);
        setLower(lower + 1);
      }}
      key={2}
    >
      clear
    </Command>,
    // editor
    <Command onTyped={() => setLower(lower + 1)} key={3}>
      deno run editor.ts
    </Command>,
    <p className="font-mono text-xl" key={4}>
      <Caret className="caret" delay={1000} onTyped={() => setLower(lower + 2)}>
        I have two years of commercial experience in frontend and backend
        development.
      </Caret>
    </p>,
    <br key={5} />,
    <p className="font-mono text-xl" key={6}>
      <Caret className="caret" delay={1000} onTyped={() => setLower(lower + 2)}>
        TypeScript • Python • Rust
      </Caret>
    </p>,
    <br key={7} />,
    <p className="font-mono text-xl" key={8}>
      <Caret className="caret" delay={3000} onTyped={() => setLower(lower + 2)}>
        I am currently interested in graph theory, decentralized databases, and
        machine learning.
      </Caret>
    </p>,
    <br key={9} />,
    <p className="font-mono text-xl" key={10}>
      <Caret className="caret" delay={5000} onTyped={() => setLower(lower + 1)}>
        ...
      </Caret>
    </p>,
    // contacts
    <Command delay={3000} onTyped={() => setLower(lower + 2)} key={11}>
      deno run contact.ts
    </Command>,
    <p className="font-mono text-xl" key={12}>
      1) <a className="color-green" href="https://t.me/machnevegor">Telegram</a>
    </p>,
    <p className="font-mono text-xl" key={13}>
      2){" "}
      <a className="color-green" href="https://github.com/machnevegor">
        GitHub
      </a>
    </p>,
  ];

  const dungeon = useRef<HTMLDivElement>(null);

  useEffect(
    () => dungeon.current?.scrollIntoView({ behavior: "smooth" }),
    [lower],
  );

  return (
    <main className="grid h-screen place-content-center">
      <Terminal>
        {frames.slice(upper, lower + 1)}
        <div ref={dungeon} />
      </Terminal>
    </main>
  );
}
