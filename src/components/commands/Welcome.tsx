import React from "react";
import {
  HeroContainer,
  InfoSection,
  IlluSection,
  PreImg,
  PreName,
} from "../styles/Welcome.styled";

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

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <InfoSection>
        {/* (You could add future Terminal commands here if needed) */}
      </InfoSection>


    </HeroContainer>
  );
};

export default React.memo(Welcome);
