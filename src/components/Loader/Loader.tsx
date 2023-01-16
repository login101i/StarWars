import  { FC } from 'react';
import { LoaderContainer, Rotator } from './Loader.styles';

export const Loader: FC = () => {
  return (
    <LoaderContainer>
      <Rotator>-S-T-A-R-W-A-R-S-</Rotator>
    </LoaderContainer>
  );
};
