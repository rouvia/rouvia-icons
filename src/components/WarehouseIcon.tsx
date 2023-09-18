import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/Warehouse.svg';

const WarehouseIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { WarehouseIcon };
