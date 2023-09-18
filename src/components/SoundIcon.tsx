import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/sound.svg';

const SoundIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { SoundIcon };
