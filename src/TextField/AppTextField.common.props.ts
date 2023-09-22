export type AppTextFieldPropSizes = "small" | "medium" | "large";

export type AppTextFieldRefProps =
  | {
      refCallback?: never;
      inputRef?: React.MutableRefObject<HTMLInputElement | null>;
    }
  | {
      refCallback?: (instance: HTMLInputElement | null) => void;
      inputRef?: never;
    };
