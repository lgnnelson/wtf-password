import React, {
  createContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import _ from "lodash";
import Output from "./Output";
import TermInfo from "./TermInfo";
import {
  CmdNotFound,
  Empty,
  Form,
  Hints,
  Input,
  MobileBr,
  MobileSpan,
  Wrapper,
} from "./styles/Terminal.styled";
import { argTab } from "../utils/funcs";

type Command = {
  cmd: string;
  desc: string;
  tab: number;
}[];

export const commands: Command = [
  { cmd: "music", desc: "listen to my reel", tab: 8 },
  { cmd: "about", desc: "about Logan Nelson", tab: 8 },
  { cmd: "clear", desc: "clear the terminal", tab: 8 },
  { cmd: "wtf", desc: "did you forget your password again?", tab: 9 },
  { cmd: "email", desc: "send an email to me", tab: 8 },
  { cmd: "forgot", desc: "check available commands", tab: 7 },
  { cmd: "history", desc: "view command history", tab: 6 },
  { cmd: "projects", desc: "view credits on IMDb", tab: 5 },
  { cmd: "themes", desc: "check available themes", tab: 7 },
  { cmd: "welcome", desc: "display hero section", tab: 6 },
  { cmd: "whoami", desc: "about current user", tab: 7 },
  { cmd: "attempt1", desc: "play Track 1", tab: 8 },
  { cmd: "attempt2", desc: "play Track 2", tab: 8 },
  { cmd: "attempt3", desc: "play Track 3", tab: 8 },
  { cmd: "exit", desc: "exit the terminal", tab: 8 },
  { cmd: "imdbopened", desc: "IMDb page opened", tab: 6 },
  { cmd: "musicaccessed", desc: "music accessed", tab: 6 },
];

type Term = {
  arg: string[];
  history: string[];
  rerender: boolean;
  index: number;
  clearHistory?: () => void;
};

export const termContext = createContext<Term>({
  arg: [],
  history: [],
  rerender: false,
  index: 0,
});

const Terminal = () => {
  const containerRef = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [inputVal, setInputVal] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [rerender, setRerender] = useState(false);
  const [hints, setHints] = useState<string[]>([]);
  const [pointer, setPointer] = useState(-1);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setRerender(false);
      setInputVal(e.target.value);
    },
    [inputVal]
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedInput = inputVal.trim().toLowerCase();

    if (trimmedInput === "projects") {
      window.open("https://www.imdb.me/logannelson", "_blank");
      setCmdHistory(["imdbopened", ...cmdHistory]);
    } else if (trimmedInput === "music") {
      window.open("https://play.reelcrafter.com/logan/wtf", "_blank");
      setCmdHistory(["musicaccessed", ...cmdHistory]);
    } else if (commands.find(cmd => cmd.cmd === trimmedInput)) {
      setCmdHistory([inputVal, ...cmdHistory]);
    } else {
      setCmdHistory(["ACCESS DENIED", ...cmdHistory]);
    }

    setInputVal("");
    setRerender(true);
    setHints([]);
    setPointer(-1);
  };

  const clearHistory = () => {
    setCmdHistory([]);
    setHints([]);
  };

  const handleDivClick = () => {
    inputRef.current && inputRef.current.focus();
  };

  useEffect(() => {
    document.addEventListener("click", handleDivClick);
    return () => {
      document.removeEventListener("click", handleDivClick);
    };
  }, [containerRef]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setRerender(false);
    const ctrlI = e.ctrlKey && e.key.toLowerCase() === "i";
    const ctrlL = e.ctrlKey && e.key.toLowerCase() === "l";

    if (e.key === "Tab" || ctrlI) {
      e.preventDefault();
      if (!inputVal) return;

      let hintsCmds: string[] = [];
      commands.forEach(({ cmd }) => {
        if (_.startsWith(cmd, inputVal)) {
          hintsCmds = [...hintsCmds, cmd];
        }
      });

      const returnedHints = argTab(inputVal, setInputVal, setHints, hintsCmds);
      hintsCmds = returnedHints ? [...hintsCmds, ...returnedHints] : hintsCmds;

      if (hintsCmds.length > 1) {
        setHints(hintsCmds);
      } else if (hintsCmds.length === 1) {
        const currentCmd = _.split(inputVal, " ");
        setInputVal(
          currentCmd.length !== 1
            ? `${currentCmd[0]} ${currentCmd[1]} ${hintsCmds[0]}`
            : hintsCmds[0]
        );
        setHints([]);
      }
    }

    if (ctrlL) {
      clearHistory();
    }

    if (e.key === "ArrowUp") {
      if (pointer >= cmdHistory.length) return;
      if (pointer + 1 === cmdHistory.length) return;
      setInputVal(cmdHistory[pointer + 1]);
      setPointer(prevState => prevState + 1);
      inputRef?.current?.blur();
    }

    if (e.key === "ArrowDown") {
      if (pointer < 0) return;
      if (pointer === 0) {
        setInputVal("");
        setPointer(-1);
        return;
      }
      setInputVal(cmdHistory[pointer - 1]);
      setPointer(prevState => prevState - 1);
      inputRef?.current?.blur();
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      inputRef?.current?.focus();
    }, 1);
    return () => clearTimeout(timer);
  }, [inputRef, inputVal, pointer]);

  return (
    <Wrapper data-testid="terminal-wrapper" ref={containerRef}>
      {hints.length > 1 && (
        <div>
          {hints.map(hCmd => (
            <Hints key={hCmd}>{hCmd}</Hints>
          ))}
        </div>
      )}
<Form onSubmit={handleSubmit}>
  <label htmlFor="terminal-input" style={{ display: "flex", alignItems: "center" }}>
    <TermInfo /> {/* ✅ Adds the $ prompt here */}
    <Input
      title="terminal-input"
      type="text"
      id="terminal-input"
      autoComplete="off"
      spellCheck="false"
      autoFocus
      autoCapitalize="off"
      ref={inputRef}
      value={inputVal}
      onKeyDown={handleKeyDown}
      onChange={handleChange}
      style={{ background: "transparent", border: "none", outline: "none", flex: "1" }} // ✅ make it blend seamlessly
    />
  </label>
</Form>

      {cmdHistory.map((cmdH, index) => {
        const commandArray = _.split(_.trim(cmdH), " ");
        const validCommand = _.find(commands, { cmd: commandArray[0] });
        const contextValue = {
          arg: _.drop(commandArray),
          history: cmdHistory,
          rerender,
          index,
          clearHistory,
        };
        return (
          <div key={_.uniqueId(`${cmdH}_`)}>
            <div>
              <TermInfo />
              <MobileBr />
              <MobileSpan>&#62;</MobileSpan>
              <span data-testid="input-command">{cmdH}</span>
            </div>
            {validCommand ? (
              <termContext.Provider value={contextValue}>
                <Output index={index} cmd={commandArray[0]} />
              </termContext.Provider>
            ) : cmdH === "" ? (
              <Empty />
            ) : (
              <CmdNotFound data-testid={`not-found-${index}`}>
                command not found: {cmdH}
              </CmdNotFound>
            )}
          </div>
        );
      })}
    </Wrapper>
  );
};

export default Terminal;
