exports.success = (req, res, message, status) => {
  let statusCode = status || 200
  let statusMessage = message || ''

  res.status(status).send({
    error: false,
    status,
    body: message
  });
}

exports.error = (req, res, message, status) => {
  let statusCode = status || 500
  let statusMessage = message || 'Internal server error, virgen'
  
  res.status(statusCode).send({
    error: false,
    status,
    body: statusMessage
  });
}