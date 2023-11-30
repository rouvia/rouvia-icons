import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/Container2.svg';

const Container2Icon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { Container2Icon };
