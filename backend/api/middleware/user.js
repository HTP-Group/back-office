import jwt from 'jsonwebtoken';

// to protect the routes
function auth(req, res) {
  console.log('****** auth middleware *******')

  const token = req.headers['authorization'];
  console.log('****** token *******\n', token)
  if (!token) return res.status(401).send('Access denied. no token provided')
  try {
    const decodedPayload = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log('decodedPayload',decodedPayload)
    req.user = decodedPayload;
    req.id = decodedPayload.user_id
  }
  catch (ex) {
    console.error(ex)
    res.status(400).send('Invalid token');
  }
}
export default auth;