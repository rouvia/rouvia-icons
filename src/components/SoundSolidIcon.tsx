import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/sound_solid.svg';

const SoundSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { SoundSolidIcon };
