import React from "react";
import Decrypting from "./Decrypting";
import TermInfo from "../TermInfo"
import {
  HeroContainer,
  InfoSection,
  IlluSection,
  PreImg,
  PreName,
  Seperator,
} from "../styles/Welcome.styled";

const titleArt = `
 /$$                                                     /$$   /$$           /$$                              
| $$                                                    | $$$ | $$          | $$                              
| $$        /$$$$$$   /$$$$$$   /$$$$$$  /$$$$$$$       | $$$$| $$  /$$$$$$ | $$  /$$$$$$$  /$$$$$$  /$$$$$$$ 
| $$       /$$__  $$ /$$__  $$ |____  $$| $$__  $$      | $$ $$ $$ /$$__  $$| $$ /$$_____/ /$$__  $$| $$__  $$
| $$      | $$  \\ $$| $$  \\ $$  /$$$$$$$| $$  \\ $$      | $$  $$$$| $$$$$$$$| $$|  $$$$$$ | $$  \\ $$| $$  \\ $$
| $$      | $$  | $$| $$  | $$ /$$__  $$| $$  | $$      | $$\\  $$$| $$_____/| $$ \\____  $$| $$  | $$| $$  | $$
| $$$$$$$$|  $$$$$$/|  $$$$$$$|  $$$$$$$| $$  | $$      | $$ \\  $$|  $$$$$$$| $$ /$$$$$$$/|  $$$$$$/| $$  | $$
|________/ \\______/  \\____  $$ \\_______/|__/  |__/      |__/  \\__/ \\_______/|__/|_______/  \\______/ |__/  |__/
                     /$$  \\ $$                                                                                
                    |  $$$$$$/                                                                                
                     \\______/                                                                                  
`;

const dudeArt = `



                       ,##,,eew,
                     ,##############C
                  a###############@##
                 7####^\\\`^"7W7^"@####
                 @#@b\\\`         ^@#@^
                  ##^,,,,   ,,,,^#^
                 ,,@######"#######=
                  .''555"\\\` '5555b|
                  T"@  ,,,^,mg,@,*
                     %p||\\\`~~'.#\\\`
                      ^Wp  ,#T
                     :b''@@b^}
                  ,^     \\\` 'b 3-
              .<\\\` 'p   ^v   #   b   *.
            {      }   #"GpGb   [
            C      3 * @#######Nl      \`
           '            ^@##b     ($    !
`;

const IntroSection: React.FC = () => {
  return (
    <HeroContainer data-testid="intro">
      <InfoSection>

        {/* 👇 Terminal Header at the top */}
        <div style={{
  marginTop: "1rem",  // ✅ small buffer from very top
  marginBottom: "1rem",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem"
}}>
  <TermInfo />
  <span>welcome</span> {/* ✅ Only here */}
</div>

        {/* 👇 Logan Nelson ASCII */}
        <PreName>{titleArt}</PreName>

        {/* 👇 Decrypting typing effect */}
        <Decrypting />

        <Seperator>----</Seperator>

        {/* 👇 Welcome intro text */}
        <div>
          Welcome to the blockchain of musical ideas. The music score of your dreams is just on the other side of this screen. But... WHAT THE FUCK IS MY PASSWORD!!!
        </div>

        <Seperator>----</Seperator>

        {/* 👇 Prompt for access */}
        <div>
          For access, type `<span style={{ color: "#00FFFF" }}>forgot</span>`.
        </div>

      </InfoSection>

      {/* 👇 Dude ASCII art */}
      <IlluSection>
        <PreImg>{dudeArt}</PreImg>
      </IlluSection>
    </HeroContainer>
  );
};

export default React.memo(IntroSection);
