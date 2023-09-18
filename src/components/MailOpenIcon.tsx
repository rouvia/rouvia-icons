import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/mail-open.svg';

const MailOpenIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { MailOpenIcon };
