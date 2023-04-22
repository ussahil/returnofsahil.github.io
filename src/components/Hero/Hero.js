import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Portfolio
        </SectionTitle>
        <SectionText>
          As a skilled data analyst, I am passionate about uncovering insights
          from complex datasets. With a focus on data analysis, visualization
          (using tools such as seaborn and Tableau), and statistical modeling, I
          utilize Python and SQL as my primary tools to extract meaningful
          information from data.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
