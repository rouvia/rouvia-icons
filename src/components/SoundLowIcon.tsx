import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/sound-low.svg';

const SoundLowIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { SoundLowIcon };
