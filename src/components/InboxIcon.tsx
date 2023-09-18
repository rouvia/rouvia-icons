import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/inbox.svg';

const InboxIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { InboxIcon };
