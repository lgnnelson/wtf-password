import { createPortal } from "react-dom";
import Decrypting from "./commands/Decrypting";

const DecryptingPortal = () => {
  const el = document.getElementById("decrypting-root");
  if (!el) return null;

  return createPortal(<Decrypting />, el);
};

export default DecryptingPortal;
