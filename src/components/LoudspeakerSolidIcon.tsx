import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/loudspeaker_solid.svg';

const LoudspeakerSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { LoudspeakerSolidIcon };
