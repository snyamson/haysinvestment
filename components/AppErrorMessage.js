import { ErrorMessage } from 'formik';

const AppErrorMessage = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={(msg) => <div className="field-error">{msg}</div>}
    />
  );
};

export default AppErrorMessage;
