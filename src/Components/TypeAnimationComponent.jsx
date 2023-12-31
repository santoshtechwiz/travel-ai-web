import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TypeAnimationComponent = ({ sequence, speed, style, repeat }) => {
  return (
    <TypeAnimation
      preRenderFirstString={true}
      sequence={sequence}
      speed={speed}
      style={style}
      repeat={repeat}
    />
  );
};

export default TypeAnimationComponent;
