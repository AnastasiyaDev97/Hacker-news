import { FC } from 'react';

import Typography from '@mui/material/Typography';

import { ReturnComponentType } from 'shared/types';

type CustomTextPropsType = {
  text: string;
};

export const CustomText: FC<CustomTextPropsType> = ({ text }): ReturnComponentType => (
  <Typography
    sx={{ display: 'inline' }}
    component="span"
    variant="body2"
    color="text.primary"
  >
    {text}
  </Typography>
);
