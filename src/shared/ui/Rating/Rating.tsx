import Rating from "@mui/material/Rating";
import { useState } from "react";
import { NullableType } from "shared/types/NullableType";

export const ControlledRating = () => {
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
