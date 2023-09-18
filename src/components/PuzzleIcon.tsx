import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/puzzle.svg';

const PuzzleIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { PuzzleIcon };
