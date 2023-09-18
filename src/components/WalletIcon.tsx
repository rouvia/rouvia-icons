import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/wallet.svg';

const WalletIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { WalletIcon };
