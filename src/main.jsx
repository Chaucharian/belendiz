import React from 'react';
import ReactDOM from 'react-dom';
import SlideWrapper from './components/slideWrapper.jsx';
import SectionContainer from './components/sectionContainer.jsx';
import Section from './components/section.jsx';
import Background from './model/imageSections';

const animationConfig1 = { transitionTime: 2, transitionType: 'ease-in-out', background: Background.one };
const animationConfig2= { transitionTime: 2, transitionType: 'ease-in-out', background: Background.two };
const animationConfig3 = { transitionTime: 2, transitionType: 'ease-in-out', background: Background.three };
const animationConfig4 = { transitionTime: 2, transitionType: 'ease-in-out', background: Background.four };
const animationConfig5 = { transitionTime: 2, transitionType: 'linear', background: Background.five };
const animationConfig6 = { transitionTime: 2, transitionType: 'ease', background: Background.six };
const animationConfig7 = { transitionTime: 2, transitionType: 'ease', background: Background.seven };
const animationConfig8 = { transitionTime: 2, transitionType: 'ease', background: Background.eight };
const animationConfig9 = { transitionTime: 2, transitionType: 'ease', background: Background.nine };
const animationConfig10 = { transitionTime: 2, transitionType: 'ease', background: Background.twentysix };


const Page = () => (
  <SlideWrapper>
    <Section {...animationConfig1} />
    <SectionContainer>
      <Section {...animationConfig2} />
      <Section {...animationConfig4} />
      <Section {...animationConfig3} />
    </SectionContainer>
    <SectionContainer>
      <Section {...animationConfig5} />
      <Section {...animationConfig6} />
    </SectionContainer>
    <Section {...animationConfig8} />
    <Section {...animationConfig9} />
    <Section {...animationConfig10} />
  </SlideWrapper>
);

ReactDOM.render(<Page />, document.getElementById('root'));