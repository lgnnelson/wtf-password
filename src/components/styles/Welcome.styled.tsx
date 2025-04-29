import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;

  @media (max-width: 1400px) {
    margin-bottom: 1.5rem;
  }

  div {
    @media (min-width: 1400px) {
      flex-basis: 80%;
    }
  }
`;

export const PreName = styled.pre`
  font-family: monospace;
  font-size: 14px;
  white-space: pre;
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 4rem;
  color: #ffffff;

  @media (max-width: 1400px) {
    font-size: 9px;
  }

  @media (max-width: 1200px) {
    font-size: 8px;
  }

  @media (max-width: 1000px) {
    font-size: 7px;
  }

  @media (max-width: 800px) {
    font-size: 6px;
  }

  @media (max-width: 600px) {
    font-size: 5px;
  }

  @media (max-width: 400px) {
    font-size: 4px;
  }
`;

export const DecryptingPlaceholder = styled.div`
  position: relative;
  height: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const PreWrapper = styled.div`
  text-align: center;
`;

export const PreNameMobile = styled.pre`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;

  @media (min-width: 550px) {
    display: none;
  }
`;

export const PreImg = styled.pre`
  @media (max-width: 550px) {
    display: none;
    margin-top: 3rem;
  }
`;

export const Seperator = styled.div`
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
`;

export const Cmd = styled.span`
  color: ${({ theme }) => theme.colors?.primary};
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors?.secondary};
  text-decoration: none;
  line-height: 1.5rem;
  white-space: nowrap;
  border-bottom: 2px dashed ${({ theme }) => theme.colors?.secondary};

  &:hover {
    border-bottom-style: solid;
  }
`;

export const InfoSection = styled.div`
  flex: 0 1 60%;
  min-width: 400px;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 1.5rem; /* ✅ ADD THIS */
  padding-right: 1rem; /* ✅ Optional: balance both sides */
`;

export const IlluSection = styled.div`
  flex: 0 1 30%; /* ⬅️ Take about 30% of the width */
  min-width: 300px;
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
