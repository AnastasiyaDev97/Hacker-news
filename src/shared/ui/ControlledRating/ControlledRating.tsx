import { useState } from 'react';

import Rating from '@mui/material/Rating';

import { NullableType, ReturnComponentType } from 'shared/types';

export const ControlledRating = (): ReturnComponentType => {
  const [value, setValue] = useState<NullableType<number>>(2);

  return (
    <Rating
      name="simple-controlled"
      size="small"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    />
  );
};
