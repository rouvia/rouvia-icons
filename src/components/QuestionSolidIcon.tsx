import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/question_solid.svg';

const QuestionSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { QuestionSolidIcon };
