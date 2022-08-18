import { StatefulInput as Input, StatefulInputProps } from "baseui/input";
import { FormControl } from "baseui/form-control";
import React from "react";
import { Theme } from "baseui";

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
            style: ({ $theme }: { $theme: Theme }) => ({
              borderTopLeftRadius: `${$theme.borders.radius400}`,
              borderTopRightRadius: `${$theme.borders.radius400}`,
              borderBottomLeftRadius: `${$theme.borders.radius400}`,
              borderBottomRightRadius: `${$theme.borders.radius400}`,
              backgroundColor: $theme.colors.inputFill,
            }),
          },
        }}
      />
    </FormControl>
  );
};
