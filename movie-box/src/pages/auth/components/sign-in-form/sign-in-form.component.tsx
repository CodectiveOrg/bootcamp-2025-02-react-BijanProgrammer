import { ReactElement, useState } from "react";

import { Link, useNavigate } from "react-router";

import { useMutation } from "@tanstack/react-query";

import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { toast } from "react-toastify";

import { fetchSignInApi } from "../../../../api/fetch-sign-in.api.ts";

import ButtonComponent from "../../../../components/button/button.component.tsx";
import TextInputComponent from "../../../../components/text-input/text-input.component.tsx";
import PasswordInputComponent from "../../../../components/password-input/password-input.component.tsx";

import { ValidationErrors } from "../../../../dto/response.dto.ts";
import { SignInDto } from "../../../../dto/sign-in.dto.ts";

import styles from "../../styles/auth-form.module.css";

export default function SignInFormComponent(): ReactElement {
  const navigate = useNavigate();

  const [validationErrors, setValidationErrors] =
    useState<ValidationErrors<SignInDto>>();

  const mutation = useMutation({
    mutationFn: fetchSignInApi,
  });

  const { control, handleSubmit, reset } = useForm<SignInDto>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const formSubmitHandler: SubmitHandler<SignInDto> = (data): void => {
    mutation.mutate(data, {
      onSuccess: (result) => {
        if ("error" in result) {
          setValidationErrors(result.validationErrors);
          toast.error(result.message);
        } else {
          toast.success(result.message);
          reset();
          navigate("/dashboard");
        }
      },
    });
  };

  return (
    <div className={styles["auth-form"]}>
      <h1>Sign In!</h1>
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <Controller
          control={control}
          name="username"
          render={({ field }) => (
            <TextInputComponent
              label="Username"
              errors={validationErrors?.username}
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <PasswordInputComponent
              label="Password"
              autoComplete="current-password"
              errors={validationErrors?.password}
              {...field}
            />
          )}
        />
        <ButtonComponent>Sign In</ButtonComponent>
      </form>
      <div className={styles["change-form"]}>
        Haven't signed up yet? <Link to="/auth/sign-up">Sign up</Link>.
      </div>
    </div>
  );
}
