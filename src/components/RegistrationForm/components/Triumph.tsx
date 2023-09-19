type TriumphProps = {
  userName: string;
  onClose: () => void;
};

export const Triumph = ({ userName, onClose }: TriumphProps) => {
  return (
    <>
      <h1 className="registration__title triumph__title">
        {' '}
        <span className="triumph__icon"></span>Ваша регистрация прошла успешно!
      </h1>
      <p className="triumph__text">Добро пожаловать, {userName}!</p>
      <button
        type="button"
        onClick={onClose}
        className="registration__button triumph__button"
      >
        Закрыть окно
      </button>
    </>
  );
};
