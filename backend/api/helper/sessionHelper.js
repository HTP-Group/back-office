import jwt from 'jsonwebtoken';

// to return the payload
function payload(req) {
  const token = req.headers['authorization'];
  try {
    return jwt.verify(token, process.env.JWT_SECRET_KEY);
  }
  catch (ex) {
    console.error(ex)
  }
}
export default payload;