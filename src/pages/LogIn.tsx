import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAuthErrors, getLogInErrorMessage, userLogIn } from "../redux/authSlice";
import { Form } from "../components/auth/Form";
import { Title } from "../components/auth/Title";
import { Button } from "../components/auth/Button";
import { CommonError } from "../components/auth/ErrorMessage";
import { FieldWrapper, Input, Label } from "../components/auth/TextField";
import { getAuthLocalization } from "../redux/localizationSlice";

export const LogIn: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const error = useSelector(getLogInErrorMessage);
  const localization = useSelector(getAuthLocalization);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearAuthErrors());
  }, [dispatch]);

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userLogIn(email, password));
  };
  return (
    <Form onSubmit={onFormSubmit}>
      <Title>{localization.logIn}</Title>
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
      <CommonError>{error} </CommonError>
      <Button>{localization.buttons.logIn}</Button>
    </Form>
  );
};
