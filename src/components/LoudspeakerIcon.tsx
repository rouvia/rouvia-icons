import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/loudspeaker.svg';

const LoudspeakerIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { LoudspeakerIcon };
