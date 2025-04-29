import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Logan Nelson</HighlightSpan>!
      </p>
      <p>
      I composed the music for Seasons 2 and 3 of the Emmy-winning Apple TV+ drama, The Morning Show, in collaboration with Carter Burwell.
      </p>
      <p>
I was named the Best Young International Composer at the World Soundtrack Awards in Ghent, Belgium, attending the festival with Oscar-winning director Barry Jenkins, who called me a “must-watch composer.” 
At the Cannes Film Festival, I premiered my score for Nanette Burstein’s film, Elizabeth Taylor: The Lost Tapes (HBO). My orchestral score captures the essence of old Hollywood’s golden age, embodying the spirit of Elizabeth Taylor. 
My score for Showtime’s Nothing Lasts Forever, directed by Sundance-winning director Jason Kohn, was highly praised, with the Hollywood Reporter noting it “mines the genre [of a ‘70s conspiracy thriller with] sometimes the spritely kick of a heist film." In narrative film, I scored Straight Up, a romantic comedy on Netflix starring Randall Park and Katie Findlay, and the horror film Family (Fifth Season), utilizing the GRAMMY-winning Attacca String Quartet for experimental textures. 
</p>
<p>
As a collaborator with Kris Bowers, I wrote music for Netflix’s critically acclaimed Dear White People, as well as the Oscar-winning film, Green Book. Additionally, I have worked at Hans Zimmer’s Remote Control Productions.
      </p>
      <p>
      Logan resides in Los Angeles, California. 
      </p>
    </AboutWrapper>
  );
};

export default About;
