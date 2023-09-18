import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/catalog.svg';

const CatalogIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CatalogIcon };
