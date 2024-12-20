import { ZodError, ZodIssue } from 'zod';
import TErrorSources, { TGenericErrorResponse } from '../interface/error';

const hadelZodError = (err: ZodError): TGenericErrorResponse => {
  const error: TErrorSources = err.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue.message,
    };
  });

  const statusCode = 400;
  return {
    statusCode,
    message: 'validation Error',
    error,
  };
};

export default hadelZodError;
