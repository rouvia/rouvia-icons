import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/contacts_solid.svg';

const ContactsSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ContactsSolidIcon };
