import cx from 'classnames';
import { ErrorMessage } from '@hookform/error-message';
import { RotatingLines } from 'react-loader-spinner';
import { useRegistrationForm } from '../hooks';

type FormProps = {
  onSuccess: (name: string) => void;
};

export const Form = ({ onSuccess }: FormProps) => {
  const { register, errors, onSubmit, isLoading } = useRegistrationForm({
    onSuccess,
  });

  return (
    <>
      <h1 className="registration__title">регистрация</h1>
      <form className="registration__form" onSubmit={onSubmit} noValidate>
        <label className="registration__label" htmlFor="name">
          ФИО
        </label>
        <input
          className={cx('registration__input', {
            'registration__input--error': errors.name,
          })}
          type="text"
          {...register('name')}
          disabled={isLoading}
        />
        <ErrorMessage
          errors={errors}
          name="name"
          render={({ message }) => <p className="error">{message} </p>}
        />

        <label className="registration__label" htmlFor="login">
          E-mail
        </label>
        <input
          className={cx('registration__input', {
            'registration__input--error': errors.login,
          })}
          type="email"
          {...register('login')}
          disabled={isLoading}
        />
        <ErrorMessage
          errors={errors}
          name="login"
          render={({ message }) => <p className="error">{message} </p>}
        />

        <label className="registration__label" htmlFor="phone">
          Телефон
        </label>
        <input
          className={cx('registration__input', {
            'registration__input--error': errors.phone,
          })}
          type="tel"
          placeholder="+7"
          {...register('phone')}
          disabled={isLoading}
        />
        <ErrorMessage
          errors={errors}
          name="phone"
          render={({ message }) => <p className="error">{message} </p>}
        />

        <div>
          <input
            className="registration__input visually-hidden"
            type="checkbox"
            disabled={isLoading}
            id="rules1"
            {...register('rules1')}
          />
          <label
            className="registration__label registration__label--checkbox"
            htmlFor="rules1"
          >
            <span className="checkmark"></span>
            <span>
              Я&nbsp;согласен с&nbsp;
              <a href="" className="registration__link">
                правилами акции
              </a>
              ,{' '}
              <a href="" className="registration__link">
                пользовательским соглашением
              </a>{' '}
              и&nbsp;с&nbsp;{' '}
              <a href="" className="registration__link">
                положением о конфиденциальности
              </a>
            </span>
          </label>
        </div>
        <ErrorMessage
          errors={errors}
          name="rules1"
          render={({ message }) => <p className="error">{message} </p>}
        />

        <button
          type="submit"
          className="registration__button"
          disabled={isLoading}
        >
          {isLoading ? (
            <RotatingLines width="1em" strokeColor="#FFD907"></RotatingLines>
          ) : (
            'Зарегистрироваться'
          )}
        </button>

        <p className="registration__sign-in">
          Есть аккаунт? <a className="registration__link">Авторизуйся</a>
        </p>
      </form>
    </>
  );
};
