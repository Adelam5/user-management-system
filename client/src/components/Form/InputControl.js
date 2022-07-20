import { getIn } from "formik";

import { FormControl, Label, Input, ErrorText } from "./FormControl.styles";

const InputControl = ({
  field,
  form,
  label,
  placeholder,
  type = "text",
  variant,
  ...props
}) => {
  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);

  return (
    <FormControl>
      <div>
        {label && <Label htmlFor={field.name}>{label}</Label>}
        <Input
          variant={variant}
          id={field.name}
          type={type}
          placeholder={placeholder}
          {...field}
          {...props}
        />
      </div>
      <ErrorText>{errorText}</ErrorText>
    </FormControl>
  );
};

export default InputControl;
