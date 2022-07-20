import { getIn } from "formik";

import { FormControl, Label, Select, ErrorText } from "./FormControl.styles";

export const SelectControl = ({
  field,
  form,
  options,
  label,
  placeholder,
  ...props
}) => {
  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);
  return (
    <FormControl>
      <div>
        {label && <Label htmlFor={field.name}>{label}</Label>}
        <Select id={field.name} {...field} {...props}>
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.code} value={option.code}>
              {option.name}
            </option>
          ))}
        </Select>
      </div>
      <ErrorText>{errorText}</ErrorText>
    </FormControl>
  );
};

export default SelectControl;
