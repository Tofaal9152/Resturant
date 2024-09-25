export const Response = (res, status, success, message, data = null) => {
  return res.status(status).json({
    success,
    message,
    data,
  });
};
