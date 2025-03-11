import { FormEvent, ReactElement } from "react";

import { Link } from "react-router";

import { useMutation } from "@tanstack/react-query";

import { toast } from "react-toastify";

import { fetchSignUpApi } from "../../../../api/fetch-sign-up.api.ts";

import ButtonComponent from "../../../../components/button/button.component.tsx";
import TextInputComponent from "../../../../components/text-input/text-input.component.tsx";
import PasswordInputComponent from "../../../../components/password-input/password-input.component.tsx";

import { SignUpDto } from "../../../../dto/sign-up.dto.ts";

import styles from "./sign-up-form.module.css";

export default function SignUpFormComponent(): ReactElement {
  const mutation = useMutation({
    mutationFn: fetchSignUpApi,
  });

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const dto: SignUpDto = {
      username: formData.get("username") as string,
      password: formData.get("password") as string,
    };

    mutation.mutate(dto, {
      onSuccess: (result) => {
        if ("error" in result) {
          console.log(result.validationErrors);
          toast.error(result.message);
        } else {
          toast.success(result.message);
        }
      },
    });
  };

  return (
    <div className={styles["sign-up-form"]}>
      <h1>Sign Up!</h1>
      <form onSubmit={formSubmitHandler}>
        <TextInputComponent label="Username" name="username" />
        <PasswordInputComponent
          label="Password"
          name="password"
          autoComplete="new-password"
        />
        <ButtonComponent>Sign Up</ButtonComponent>
      </form>
      <div className={styles["change-form"]}>
        Already have an account? <Link to="/auth/sign-in">Sign in</Link>.
      </div>
    </div>
  );
}
