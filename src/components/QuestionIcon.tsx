import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/question.svg';

const QuestionIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { QuestionIcon };
