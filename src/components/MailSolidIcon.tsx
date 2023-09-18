import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/mail_solid.svg';

const MailSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { MailSolidIcon };
