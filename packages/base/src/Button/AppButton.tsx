import { forwardRef, ForwardedRef } from "react";
import { Button, ButtonProps } from "@mui/material";

export interface AppButtonProps extends ButtonProps {}

const AppButton = forwardRef<HTMLButtonElement, AppButtonProps>(
  (props: AppButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const { ...buttonProps } = props;

    return <Button ref={ref} {...buttonProps}></Button>;
  }
);

export default AppButton;
