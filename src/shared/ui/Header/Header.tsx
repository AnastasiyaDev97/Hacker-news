import Typography, { TypographyTypeMap } from "@mui/material/Typography";

import { FC } from "react";

type HeaderPropsType = {
  title: string;
  variant?: TypographyTypeMap["props"]["variant"];
  component?: React.ElementType;
};

export const Header: FC<HeaderPropsType> = ({
  title,
  variant = "h1",
  component = "h2",
}) => (
  <Typography variant={variant} component={component}>
    {title}
  </Typography>
);
