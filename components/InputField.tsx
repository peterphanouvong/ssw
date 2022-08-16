import { StatefulInput as Input, StatefulInputProps } from "baseui/input";
import { FormControl } from "baseui/form-control";
import React from "react";

type InputFieldProps = StatefulInputProps & {
  label: String;
};

export const InputField: React.FC<InputFieldProps> = ({ label, ...props }) => {
  return (
    <FormControl label={label}>
      <Input
        {...props}
        overrides={{
          Root: {
            style: ({ $theme }) => ({
              borderTopLeftRadius: `${$theme.borderRadius.small}`,
              borderTopRightRadius: `${$theme.borderRadius.small}`,
              borderBottomLeftRadius: `${$theme.borderRadius.small}`,
              borderBottomRightRadius: `${$theme.borderRadius.small}`,
              backgroundColor: $theme.grey50,
            }),
          },
        }}
      />
    </FormControl>
  );
};
