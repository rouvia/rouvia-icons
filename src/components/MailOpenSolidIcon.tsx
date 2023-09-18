import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/mail-open_solid.svg';

const MailOpenSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { MailOpenSolidIcon };
