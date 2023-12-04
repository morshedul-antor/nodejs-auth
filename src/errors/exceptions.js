const errorExceptions = (req, res, next) => {
  // ********* success functions *********
  res.success = (data = null, statusCode = 200) => {
    res.status(statusCode).json(data);
  };

  // successful responses - 200
  res.created = (data = null) => {
    res.success(data, 201);
  };

  res.accepted = (data = null) => {
    res.success(data, 202);
  };

  // ********* error functions *********
  res.error = (
    message = "Something went wrong!",
    statusCode = 500,
    type = "ServerError"
  ) => {
    res.status(statusCode).json({
      exception: type,
      error: message,
    });
  };

  // client error - 400
  res.badRequest = (message = "Bad Request!") => {
    res.error(message, 400, "BadRequest");
  };

  res.unauthorized = (message = "Not Authenticated!") => {
    res.error(message, 401, "Unauthorized");
  };

  res.forbidden = (message = "Forbidden!") => {
    res.error(message, 403, "Forbidden");
  };

  res.notFound = (message = "Not Found!") => {
    res.error(message, 404, "NotFound");
  };

  res.notAllowed = (message = "Method Not Allowed!") => {
    res.error(message, 405, "NotAllowed");
  };

  res.notAcceptable = (message = "Not Acceptable!") => {
    res.error(message, 406, "NotAcceptable");
  };

  // server error - 500
  res.notImplemented = (message = "Not Implemented!") => {
    res.error(message, 501, "NotImplemented");
  };

  res.badGateway = (message = "Bad Gateway!") => {
    res.error(message, 502, "BadGateway");
  };

  res.serviceUnavailable = (message = "Service Unavailable!") => {
    res.error(message, 503, "ServiceUnavailable");
  };

  res.gatewayTimeout = (message = "Gateway Timeout!") => {
    res.error(message, 504, "GatewayTimeout");
  };

  next();
};

module.exports = errorExceptions;
