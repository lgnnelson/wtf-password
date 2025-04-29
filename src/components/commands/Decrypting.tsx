import { useEffect, useRef, memo } from "react";

const Decrypting = () => {
  const fullText = "Decrypting soundtrack..........................................";
  const indexRef = useRef(0);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!textRef.current) return;
      textRef.current.textContent = fullText.slice(0, indexRef.current);
      indexRef.current++;

      if (indexRef.current > fullText.length) {
        clearInterval(interval);
      }
    }, 75);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={textRef}
      style={{
        textAlign: "center",
        fontFamily: "monospace",
        fontSize: "1rem",
        color: "#ffffff",
        whiteSpace: "pre",
        marginTop: "1rem",
        marginBottom: "1rem",
      }}
    />
  );
};

export default memo(Decrypting);
