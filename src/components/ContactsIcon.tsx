import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/contacts.svg';

const ContactsIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ContactsIcon };
