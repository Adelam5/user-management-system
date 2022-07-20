import { Link, useParams } from "react-router-dom";
import { Field, Formik } from "formik";

import { userEditSchema } from "./user.validation";
import { useUpdateUser } from "./hooks";

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
import useUser from "./hooks/useUser";

const EditForm = () => {
  const { id } = useParams();

  const { data: user } = useUser(id);

  const initialValues = {
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    status: user?.status || "offline",
  };

  const { mutate: edit, error, isLoading } = useUpdateUser();

  if (isLoading) {
    return <Spinner />;
  }

  const onSubmit = (values) => {
    console.log(values);
    const edited = {
      id: user._id,
      data: values,
    };
    edit(edited);
  };

  return (
    <FormContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={userEditSchema}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {() => (
          <SimpleForm>
            <h1>Edit User</h1>
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

export default EditForm;
