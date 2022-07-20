import Spin from "assets/images/spinner.gif";
import { SpinnerContainer } from "./Spinner.styles";

export const Spinner = () => {
  return (
    <SpinnerContainer>
      <img src={Spin} alt="Loading Spinner" />;
    </SpinnerContainer>
  );
};
