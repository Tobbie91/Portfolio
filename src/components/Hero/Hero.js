import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
         Oluwatobi's Portfolio
        </SectionTitle>
        <SectionText>
       I'm excited to have the opportunity to connect with recruiters like you. As a full stack developer with a passion for front-end design, I'm always looking for new opportunities to showcase my skills and collaborate with innovative teams. Thank you for taking the time to review my work, and I look forward to hearing from you soon.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;