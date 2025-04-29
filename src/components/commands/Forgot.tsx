import {
  Cmd,
  CmdDesc,
  CmdList,
  HelpWrapper,
  KeyContainer,
} from "../styles/Forgot.styled";
import { commands } from "../Terminal";
import { generateTabs } from "../../utils/funcs";

const Forgot: React.FC = () => {
  const allowedCommands = ["music", "forgot", "about", "email", "projects"]; // ⬅️ Only show these

  return (
    <HelpWrapper data-testid="help">
      {commands
        .filter(({ cmd }) => allowedCommands.includes(cmd))
        .map(({ cmd, desc, tab }) => (
          <CmdList key={cmd}>
            <Cmd>{cmd}</Cmd>
            {generateTabs(tab)}
            <CmdDesc>- {desc}</CmdDesc>
          </CmdList>
        ))}
      <KeyContainer>
      </KeyContainer>
    </HelpWrapper>
  );
};

export default Forgot;
