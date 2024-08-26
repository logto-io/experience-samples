import { InputField, Button, ErrorMessage } from '@logto/experience-components';
import { SignInIdentifier } from '@logto/schemas';
import classNames from 'classnames';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import usePasswordSignIn from '../use-password-sign-in';

import styles from './index.module.scss';

type Props = {
  readonly className?: string;
};

type FormData = {
  username: string;
  password: string;
};

const UsernamePasswordForm = ({ className }: Props) => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<FormData>({
    reValidateMode: 'onBlur',
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const { errorMessage, onSubmit, clearErrorMessage } = usePasswordSignIn();

  const onSubmitHandler = useCallback(
    async (event?: React.FormEvent<HTMLFormElement>) => {
      void handleSubmit(async ({ username, password }) => {
        await onSubmit({
          identifier: {
            type: SignInIdentifier.Username,
            value: username,
          },
          password,
        });
      })(event);
    },
    [handleSubmit, onSubmit]
  );

  return (
    <form className={classNames(className, styles.form)} onSubmit={onSubmitHandler}>
      <InputField
        label="Username"
        className={styles.inputField}
        {...register('username', {
          required: 'Username is required',
        })}
        autoFocus
        autoComplete="username"
        errorMessage={errors.username?.message}
      />
      <InputField
        label="Password"
        className={styles.inputField}
        type="password"
        {...register('password', {
          required: 'Password is required',
        })}
        errorMessage={errors.password?.message}
      />
      {errorMessage && <ErrorMessage className={styles.errorMessage}>{errorMessage}</ErrorMessage>}
      <Button name="submit" htmlType="submit" isLoading={isSubmitting}>
        Sign in
      </Button>
      <input hidden type="submit" />
    </form>
  );
};

export default UsernamePasswordForm;
