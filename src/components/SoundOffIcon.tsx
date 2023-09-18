import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/sound-off.svg';

const SoundOffIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { SoundOffIcon };
