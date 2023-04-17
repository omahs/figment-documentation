import React, { useEffect, useRef } from "react";

import Editor from "react-simple-code-editor";
import Highlight, { defaultProps } from "prism-react-renderer";
import { usePrismTheme } from "@docusaurus/theme-common";

import styles from "./styles.module.css";

interface ActionButton {
  title: string;
  onClick: () => void;
  Component?: React.ReactElement;
}

interface Props {
  children: string;
  header: string | React.ReactNode;
  actions?: ActionButton[];
  disabled?: boolean;
  status?: "LOADING" | "SUCCESS" | "ERROR";
  onValueChange?: (value: string) => void;
}

export default function CodeEditor({
  children = "",
  header,
  actions,
  disabled = false,
  status,
  onValueChange,
}: Props) {
  const prismTheme = usePrismTheme();

  // update the width of each textarea as the input changes
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const textarea = ref.current?.querySelector("textarea");
    const updateWidth = (evt: Event) => {
      const target = evt.target as HTMLTextAreaElement;
      target.style.width = target.scrollWidth + "px";
    };
    textarea.addEventListener("input", updateWidth);
    // clean up event listeners
    return () => textarea.removeEventListener("input", updateWidth);
  }, []);

  const highlight = (code: string = "") => (
    <Highlight {...defaultProps} theme={prismTheme} code={code} language="json">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className={styles.Code}>
          {tokens.map((line, i) => (
            <div
              key={i}
              {...getLineProps({ line, key: i })}
              className={styles.Line}
            >
              <span className={styles.LineContent}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </span>
            </div>
          ))}
        </div>
      )}
    </Highlight>
  );

  return (
    <div className="LiveEditor" ref={ref}>
      <Header actions={actions} status={status}>
        {header}
      </Header>
      <div className={styles.Container}>
        <Editor
          value={children}
          onValueChange={onValueChange}
          highlight={highlight}
          disabled={disabled}
          ignoreTabKey
          padding={10}
          style={{
            ...prismTheme.plain,
            overflow: "auto",
          }}
          className={styles.Editor}
        />
      </div>
    </div>
  );
}

function Header({ children, actions = [], status }) {
  return (
    <div className={styles.Header} data-status={status}>
      <span>{children}</span>
      <span className={styles.Actions}>
        {actions.map(({ title, onClick, Component = title }, i) => (
          <button
            className={styles.HeaderButton}
            key={`${i}:${title}`}
            title={title}
            onClick={onClick}
          >
            {Component}
          </button>
        ))}
      </span>
    </div>
  );
}
