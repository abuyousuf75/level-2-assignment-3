
import { UserService } from './user.service';
import catchAsync from '../../utiles/catchAsync';
import sendResponse from '../../utiles/sendResponse';
import httpStatus from 'http-status-codes'

const createUser = catchAsync(async(req,res) => {
  const { user } = req.body;

  const result = await UserService.createUserIntoDB(user);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is created Successfully',
    data: result,
  });
})

export const UserControler = {
  createUser,
};


