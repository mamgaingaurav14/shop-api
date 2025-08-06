const sendResponse = (res, statusCode, user, token) => {
    res.status(statusCode).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  };
  
  module.exports = sendResponse;
  