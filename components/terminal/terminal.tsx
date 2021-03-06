import React, { FC, useEffect, useState } from "react";
import styles from "./terminal.module.css";

interface LineProps {
  children: string;
  noPrompt?: boolean;
  noCaret?: boolean;
  onTyped?: () => void;
}

const Line: FC<LineProps> = (
  { children, noPrompt = false, noCaret = false, onTyped },
) => {
  const [typedText, setTypedText] = useState(noCaret ? children : "");

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (typedText === children) return onTyped && onTyped();
        setTypedText(children.slice(0, typedText.length + 1));
      },
      typedText ? 120 + 180 * (Math.random() - 0.5) : 240,
    );
    return () => clearTimeout(timer);
  }, [typedText]);

  return (
    <p>
      {!noPrompt && <span>machnevegor ~{" "}</span>}
      {typedText}
      {typedText !== children && <span className={styles.caret} />}
    </p>
  );
};

interface TerminalProps {
  filename?: string;
}

const Terminal: FC<TerminalProps> = (
  { filename = "main.ts", children },
) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={styles.terminal}>
      <div className={styles.dock}>
        <span className={styles.circle} />
        <span className={styles.circle} />
        <span className={styles.circle} />
      </div>
      <div className={styles.body}>
        <Line onTyped={() => setIsVisible(true)}>
          {`deno run ${filename}`}
        </Line>
        {isVisible && children}
      </div>
    </div>
  );
};

export default Terminal;
