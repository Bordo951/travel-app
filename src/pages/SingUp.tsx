import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getErrorMessage, userSignUp } from "../redux/authSlice";
import { Form } from "../components/auth/Form";
import { Title } from "../components/auth/Title";
import { Button } from "../components/auth/Button";
import { ErrorMessage } from "../components/auth/ErrorMessage";
import { FieldWrapper, Input, Label } from "../components/auth/TextField";
import { getAuthLocalization } from "../redux/localizationSlice";

export const SignUp: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const error = useSelector(getErrorMessage);
  const localization = useSelector(getAuthLocalization);
  const dispatch = useDispatch();
  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userSignUp({ email, name, password }));
  };
  return (
    <Form onSubmit={onFormSubmit}>
      <Title>{localization.signUp}</Title>
      <FieldWrapper>
        <Label>{localization.inputs.name.text}</Label>
        <Input
          placeholder={localization.inputs.name.placeholder}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></Input>
      </FieldWrapper>
      <FieldWrapper>
        <Label>{localization.inputs.email.text}</Label>
        <Input
          placeholder={localization.inputs.email.placeholder}
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
      </FieldWrapper>
      <FieldWrapper>
        <Label>{localization.inputs.password.text}</Label>
        <Input
          placeholder={localization.inputs.password.placeholder}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
      </FieldWrapper>
      <ErrorMessage>{error}</ErrorMessage>
      <Button>{localization.buttons.signUp}</Button>
    </Form>
  );
};
