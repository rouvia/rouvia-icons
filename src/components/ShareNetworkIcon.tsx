import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/share-network.svg';

const ShareNetworkIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ShareNetworkIcon };
