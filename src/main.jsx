import React from 'react';
import ReactDOM from 'react-dom';
import SlideWrapper from './components/slideWrapper.jsx';
import SectionContainer from './components/sectionContainer.jsx';
import Section from './components/section.jsx';
import Background from './model/imageSections';

const animationConfig1 = { transitionTime: 2, transitionType: 'ease-in-out', background: Background.one };
const animationConfig2 = { transitionTime: 2, transitionType: 'ease-in-out', background: Background.two };
const animationConfig3 = { transitionTime: 2, transitionType: 'ease-in-out', background: Background.three };
const animationConfig4 = { transitionTime: 2, transitionType: 'ease-in-out', background: Background.four };
const animationConfig5 = { transitionTime: 2, transitionType: 'ease-in-out', background: Background.five };
const animationConfig6 = { transitionTime: 2, transitionType: 'ease-in-out', background: Background.six };
const animationConfig7 = { transitionTime: 2, transitionType: 'ease-in-out', background: Background.seven };
const animationConfig8 = { transitionTime: 2, transitionType: 'ease-in-out', background: Background.eight };
const animationConfig9 = { transitionTime: 2, transitionType: 'ease-in-out', background: Background.nine };
const animationConfig10 = { transitionTime: 2, transitionType: 'ease-in-out', background: Background.ten };
const animationConfig11 = { transitionTime: 2, transitionType: 'ease-in-out', background: Background.eleven };
const animationConfig12 = { transitionTime: 2, transitionType: 'ease-in-out', background: Background.twelve };
const animationConfig13 = { transitionTime: 2, transitionType: 'ease-in-out', background: Background.thirteen };
const animationConfig14 = { transitionTime: 2, transitionType: 'ease-in-out', background: Background.fourteen };
const animationConfig15 = { transitionTime: 2, transitionType: 'ease-in-out', background: Background.fiveteen };
const animationConfig16 = { transitionTime: 2, transitionType: 'ease-in-out', background: Background.sixteen };
const animationConfig17 = { transitionTime: 2, transitionType: 'ease-in-out', background: Background.seventeen };
const animationConfig18 = { transitionTime: 2, transitionType: 'ease-in-out', background: Background.eighteen };
const animationConfig19 = { transitionTime: 2, transitionType: 'ease-in-out', background: Background.nineteen };
const animationConfig20 = { transitionTime: 2, transitionType: 'ease-in-out', background: Background.twenty };
const animationConfig21 = { transitionTime: 2, transitionType: 'ease-in-out', background: Background.twentyone };
const animationConfig22 = { transitionTime: 2, transitionType: 'ease-in-out', background: Background.twentytwo };
const animationConfig23 = { transitionTime: 2, transitionType: 'ease-in-out', background: Background.twentythree };
const animationConfig24 = { transitionTime: 2, transitionType: 'ease-in-out', background: Background.twentyfour };
const animationConfig25 = { transitionTime: 2, transitionType: 'ease-in-out', background: Background.twentyfive };
const animationConfig26 = { transitionTime: 2, transitionType: 'ease-in-out', background: Background.twentysix };
const animationConfig27 = { transitionTime: 2, transitionType: 'ease-in-out', background: Background.twentyseven };
const animationConfig28 = { transitionTime: 2, transitionType: 'ease-in-out', background: Background.twentyeight };
const animationConfig29 = { transitionTime: 2, transitionType: 'ease-in-out', background: Background.twentynine };
const animationConfig30 = { transitionTime: 2, transitionType: 'ease-in-out', background: Background.thirty };
const animationConfig31 = { transitionTime: 2, transitionType: 'ease-in-out', background: Background.thirtyone };
const animationConfig32 = { transitionTime: 2, transitionType: 'ease-in-out', background: Background.thirtytwo };
const animationConfig33 = { transitionTime: 2, transitionType: 'ease-in-out', background: Background.thirtythree };

const Page = () => (
  <SlideWrapper>
    <Section {...animationConfig1} />
    {/*  PERSONAL INFO 1 */}
    <SectionContainer>
      <Section {...animationConfig2} />
      <Section {...animationConfig3} />
    </SectionContainer>
    {/*  BLOQUE 1 */}
    <SectionContainer>
      <Section {...animationConfig4} />
      <Section {...animationConfig5} />
      <Section {...animationConfig6} />
      <Section {...animationConfig7} />
      <Section {...animationConfig8} />
      <Section {...animationConfig9} />
      <Section {...animationConfig10} />
      <Section {...animationConfig11} />
      <Section {...animationConfig12} />
    </SectionContainer>
    {/*  BLOQUE 2 */}
    <SectionContainer>
      <Section {...animationConfig13} />
      <Section {...animationConfig14} />
      <Section {...animationConfig15} />
    </SectionContainer>
    {/*  BLOQUE 3 */}
    <SectionContainer>
      <Section {...animationConfig16} />
      <Section {...animationConfig17} />
      <Section {...animationConfig18} />
      <Section {...animationConfig19} />
      <Section {...animationConfig20} />
      <Section {...animationConfig21} />
      <Section {...animationConfig22} />
      <Section {...animationConfig23} />
      <Section {...animationConfig24} />
      <Section {...animationConfig25} />
      <Section {...animationConfig26} />
      <Section {...animationConfig27} />
      <Section {...animationConfig28} />
    </SectionContainer>
    <SectionContainer>
      <Section {...animationConfig29} />
      <Section {...animationConfig30} />
      <Section {...animationConfig31} />
      <Section {...animationConfig32} />
    </SectionContainer>
    {/*  CONTACT */}
    <Section {...animationConfig33} />
  </SlideWrapper>
);

ReactDOM.render(<Page />, document.getElementById('root'));