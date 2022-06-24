import dynamic from 'next/dynamic';
import { Field } from 'formik';
const AppErrorMessage = dynamic(() => import('./AppErrorMessage'));

const FormField = ({ label, name, type, ...props }) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="text-black">
        {label}
      </label>
      <Field name={name} type={type} className="form-control" {...props} />

      <AppErrorMessage name={name} />
    </div>
  );
};

export default FormField;
