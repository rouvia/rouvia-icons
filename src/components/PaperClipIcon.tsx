import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/paper-clip.svg';

const PaperClipIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { PaperClipIcon };
