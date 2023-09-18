import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/history.svg';

const HistoryIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { HistoryIcon };
