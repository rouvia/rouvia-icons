import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/puzzle_solid.svg';

const PuzzleSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { PuzzleSolidIcon };
