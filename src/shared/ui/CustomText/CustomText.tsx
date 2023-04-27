import { FC } from 'react';

import Typography from '@mui/material/Typography';
import type { TypographyTypeMap } from '@mui/material/Typography';

import { ReturnComponentType } from 'shared/types';

type CustomTextPropsType = {
  text: string;
  variant?: TypographyTypeMap['props']['variant'];
  component?: React.ElementType;
};

export const CustomText: FC<CustomTextPropsType> = ({
  text,
  variant = 'body2',
  component = 'span',
}): ReturnComponentType => (
  <Typography
    sx={{ display: 'inline' }}
    component={component}
    variant={variant}
    color="text.primary"
  >
    {text}
  </Typography>
);
