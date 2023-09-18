import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/sound-x.svg';

const SoundXIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { SoundXIcon };
