import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/wallet_solid.svg';

const WalletSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { WalletSolidIcon };
