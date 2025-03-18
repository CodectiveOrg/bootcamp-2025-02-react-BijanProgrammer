import { ReactElement } from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "react-toastify";

import { fetchUserUpdateApi } from "../../../api/fetch-user-update.api.ts";

import TextInputComponent from "../../../components/text-input/text-input.component.tsx";
import ButtonComponent from "../../../components/button/button.component.tsx";

import { useUser } from "../../../hooks/use-user.hook.ts";

import {
  UserUpdateDto,
  userUpdateSchema,
} from "../../../dto/user-update.dto.ts";

import styles from "./profile.module.css";

export default function ProfilePage(): ReactElement {
  const user = useUser();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: fetchUserUpdateApi,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["user"] }),
  });

  const {
    control,
    handleSubmit,
    formState: { errors: clientErrors },
  } = useForm<UserUpdateDto>({
    resolver: zodResolver(userUpdateSchema),
    values: {
      username: user?.username ?? "",
      email: user?.email ?? "",
      firstName: user?.firstName ?? "",
      lastName: user?.lastName ?? "",
    },
  });

  const formSubmitHandler: SubmitHandler<UserUpdateDto> = (data): void => {
    mutation.mutate(data, {
      onSuccess: (result) => {
        if ("error" in result) {
          toast.error(result.message);
        } else {
          toast.success(result.message);
        }
      },
    });
  };

  return (
    <div className={styles.profile}>
      <h1>Edit User Profile</h1>
      <form className="card" onSubmit={handleSubmit(formSubmitHandler)}>
        <Controller
          control={control}
          name="username"
          render={({ field }) => (
            <TextInputComponent
              label="Username"
              clientError={clientErrors?.username}
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <TextInputComponent
              label="Email"
              clientError={clientErrors?.email}
              type="email"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="firstName"
          render={({ field }) => (
            <TextInputComponent
              label="First Name"
              clientError={clientErrors?.firstName}
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="lastName"
          render={({ field }) => (
            <TextInputComponent
              label="Last Name"
              clientError={clientErrors?.lastName}
              {...field}
            />
          )}
        />
        <ButtonComponent>Submit</ButtonComponent>
      </form>
    </div>
  );
}
