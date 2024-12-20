/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Request, Response, NextFunction } from 'express';
import { ZodError, ZodIssue } from 'zod';
import config from '..';
import TErrorSources from '../interface/error';
import hadelZodError from '../errors/handelZodErrors';


const globalErrorHandeler = (
  err: any,
  _req: Request,
  res: Response,
  
  _next: NextFunction,
) => {
  {
    let statusCode = 500;
    let message = 'Something went worng';

    let error: TErrorSources = [
      {
        path: '',
        message: 'Something went wrong!',
      },
    ];

    if (err instanceof ZodError) {
      const simplifiedError = hadelZodError(err);
      statusCode = simplifiedError.statusCode;
      message = simplifiedError.message;
      error = simplifiedError?.error;

    }

    res.status(statusCode).json({
      success: false,
      message,
      error,
      stack: config.node_env === 'development' ? err?.stack : null,
    });
  }
};

export default globalErrorHandeler;
