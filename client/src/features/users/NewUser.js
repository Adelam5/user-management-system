import { Link } from "react-router-dom";
import { Field, Formik } from "formik";

import { userSchema } from "./user.validation";
import { useNewUser } from "./hooks";

import {
  FormContainer,
  ErrorMessage,
  SimpleForm,
} from "components/Form/Form.styles";
import { Buttons } from "components/Button/Button.styles";

import Button from "components/Button";
import InputControl from "components/Form/InputControl";
import { Spinner } from "components/Spinner";
import SelectControl from "components/Form/SelectControl";

const NewUser = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
    status: "offline",
  };

  const { mutate: add, error, isLoading } = useNewUser();

  if (isLoading) {
    return <Spinner />;
  }

  const onSubmit = (values) => {
    console.log(values);

    add(values);
  };

  return (
    <FormContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {() => (
          <SimpleForm>
            <h1>New User</h1>
            <Field
              variant="block"
              label="First name:"
              name="firstName"
              component={InputControl}
            />
            <Field
              variant="block"
              label="Last name:"
              name="lastName"
              component={InputControl}
            />
            <Field
              variant="block"
              label="Username:"
              name="username"
              component={InputControl}
            />
            <Field
              variant="block"
              label="Password:"
              name="password"
              type="password"
              component={InputControl}
            />
            <Field
              variant="block"
              label="Email:"
              name="email"
              component={InputControl}
            />
            <Field
              variant="block"
              label="Status:"
              name="status"
              options={[
                { code: "online", name: "Online" },
                { code: "offline", name: "Offline" },
                { code: "away", name: "Away" },
              ]}
              component={SelectControl}
            />
            <Buttons>
              <Button type="submit" label="Save" />
              <Button as={Link} to={-1} variant="secondary" label="Cancel" />
            </Buttons>
            {error && <ErrorMessage>{error.response.data.error}</ErrorMessage>}
          </SimpleForm>
        )}
      </Formik>
    </FormContainer>
  );
};

export default NewUser;
