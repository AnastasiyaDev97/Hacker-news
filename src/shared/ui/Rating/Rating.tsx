import { useState } from 'react';

import Rating from '@mui/material/Rating';

import { NullableType } from 'shared/types/NullableType';
import { ReturnComponentType } from 'shared/types/ReturnComponentType';

export const ControlledRating = (): ReturnComponentType => {
  const [value, setValue] = useState<NullableType<number>>(2);

  return (
    <Rating
      name="simple-controlled"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    />
  );
};
