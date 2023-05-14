import { useEffect, useRef, useState } from "react";
import Caret from "~/components/Caret.tsx";
import Command from "~/components/Command.tsx";
import Terminal from "~/components/Terminal.tsx";

export default function Index() {
  const [upper, setUpper] = useState<number>(0);
  const [lower, setLower] = useState<number>(0);

  const frames = [
    // welcome
    <Command onTyped={() => setLower(lower + 2)}>deno run welcome.ts</Command>,
    <p className="font-mono text-xl">
      Hi! My name is Egor Machnev. I am a student of{" "}
      <a className="color-green" href="https://innopolis.university/">
        Innopolis University
      </a>, Department of Data Analysis and AI.
    </p>,
    // editor
    <Command
      delay={5000}
      onTyped={() => {
        setUpper(lower + 1);
        setLower(lower + 1);
      }}
    >
      deno run editor.ts
    </Command>,
    <p className="font-mono text-xl">
      <Caret className="caret" delay={1000} onTyped={() => setLower(lower + 2)}>
        I have two years of commercial experience in frontend and backend
        development.
      </Caret>
    </p>,
    <br />,
    <p className="font-mono text-xl">
      <Caret className="caret" delay={1000} onTyped={() => setLower(lower + 2)}>
        TypeScript • Python • Rust
      </Caret>
    </p>,
    <br />,
    <p className="font-mono text-xl">
      <Caret className="caret" delay={3000} onTyped={() => setLower(lower + 1)}>
        I am currently interested in graph theory, decentralized databases, and
        machine learning.
      </Caret>
    </p>,
    <p className="font-mono text-xl">
      <Caret
        className="caret"
        delay={5000}
        onTyped={() => {
          setUpper(lower + 1);
          setLower(lower + 1);
        }}
      >
        ...
      </Caret>
    </p>,
    // contacts
    <Command delay={3000} onTyped={() => setLower(lower + 8)}>
      deno run contacts.ts
    </Command>,
    <p className="font-mono text-xl">⣿⣿⣿⣿⡿⠃⢸⣿⡟⠀</p>,
    <p className="font-mono text-xl">⣿⣿⣿⡟⢡⡆⢸⠏⣰⠀</p>,
    <p className="font-mono text-xl">⣿⣿⠟⣠⣿⡇⠈⣴⢿⠀</p>,
    <p className="font-mono text-xl">⣿⠏⣰⣿⠀⣧⣼⣿⢸⣦</p>,
    <p className="font-mono text-xl">⠃⣼⣿⣿⣦⣿⣿⣿⣼⣿</p>,
    <br />,
    <p className="font-mono text-xl">
      1) <a className="color-green" href="https://t.me/machnevegor">Telegram</a>
    </p>,
    <p className="font-mono text-xl">
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
