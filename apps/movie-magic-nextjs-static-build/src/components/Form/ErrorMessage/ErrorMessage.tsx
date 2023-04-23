import * as React from 'react';

interface ErrorMessageProps {
  error?: string;
}

export function ErrorMessage({ error }: ErrorMessageProps) {
  return error !== undefined ? <div className="text-error">{error}</div> : null;
}
