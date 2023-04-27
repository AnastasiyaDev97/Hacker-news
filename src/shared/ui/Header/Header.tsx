import { FC } from 'react';

import Typography from '@mui/material/Typography';
import type { TypographyTypeMap } from '@mui/material/Typography';

import { ReturnComponentType } from 'shared/types/ReturnComponentType';

type HeaderPropsType = {
  title: string;
  variant?: TypographyTypeMap['props']['variant'];
  component?: React.ElementType;
};

export const Header: FC<HeaderPropsType> = ({
  title,
  variant = 'h1',
  component = 'h2',
}): ReturnComponentType => (
  <Typography variant={variant} component={component}>
    {title}
  </Typography>
);
