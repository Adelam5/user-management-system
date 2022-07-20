import PropTypes from "prop-types";

import StyledButton from "./Button.styles";

const Button = ({ variant, onClick, label, disabled, ...props }) => {
  return (
    <StyledButton
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {label}
    </StyledButton>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "icon"]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: "primary",
  label: "Button",
  disabled: false,
};

export default Button;
