import * as React from 'react';
import { ErrorMessage } from '../ErrorMessage';

// TODO: Allow ...props
interface TextFieldProps {
  /** used to make label and errorText accessible for screen readers */
  id?: string;

  /** used to create data-testid property on element for testing */
  testId?: string;

  /** passed directly to the input element */
  name?: string;

  /** the label content */
  label?: React.ReactNode;

  /** the input type (defaults to text) */
  type?: string;

  /** placeholder text */
  placeholder?: string;

  /** error text */
  error?: string;

  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField(
    {
      id,
      testId,
      name,
      label,
      type = 'text',
      placeholder,
      error,
      onBlur,
      onChange,
    },
    ref
  ) {
    return (
      <>
        {label !== undefined ? (
          <label htmlFor={id} className="block text-sm font-medium">
            {label}
          </label>
        ) : null}
        <div className="mt-1">
          <input
            className="block w-full appearance-none rounded-md bg-transparent border border-default px-3 py-2 shadow-sm sm:text-sm focus:outline-none focus:border-focus focus:ring-default"
            id={id}
            data-testid={testId}
            name={name}
            type={type}
            placeholder={placeholder}
            ref={ref}
            onBlur={onBlur}
            onChange={onChange}
          />
        </div>
        <ErrorMessage error={error} />
      </>
    );
  }
);
