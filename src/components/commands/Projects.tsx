import { useEffect, useRef } from "react";

const Projects: React.FC = () => {
  const hasOpened = useRef(false); // 👈 Only open ONCE

  useEffect(() => {
    if (!hasOpened.current) {
      hasOpened.current = true;
      window.open("https://www.imdb.me/logannelson", "_blank"); // your IMDb link
    }
  }, []);

  return null;
};

export default Projects;
