import Rating from "@mui/material/Rating";
import { useState } from "react";

export const ControlledRating = () => {
  const [value, setValue] = useState<number | null>(2);
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
