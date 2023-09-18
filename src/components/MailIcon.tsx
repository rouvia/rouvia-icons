import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/mail.svg';

const MailIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { MailIcon };
