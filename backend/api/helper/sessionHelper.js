import jwt from 'jsonwebtoken';

// to import to protect the routes
function payload(req) {
  const token = req.header('x-auth-token');
  try {
    return jwt.verify(token, process.env.JWT_SECRET_KEY);
  }
  catch (ex) {
    console.error(ex)
  }
}
export default payload;