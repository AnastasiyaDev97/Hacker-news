import { FC } from 'react';

import Button from '@mui/material/Button';

import { ReturnComponentType } from 'shared/types';

type UpdateButtonPropsType = {
  buttonText?: string;
};

export const UpdateButton: FC<UpdateButtonPropsType> = ({
  buttonText = 'Update',
}): ReturnComponentType => {
  return <Button variant="outlined">{buttonText}</Button>;
};
