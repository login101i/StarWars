import { FC, ReactNode } from 'react';
import { MainContainer } from './CenteredMessageConteainer.styles';

interface Props {
  children: ReactNode;
}

export const CenteredMessageContainer: FC<Props> = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};
