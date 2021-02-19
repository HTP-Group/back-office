import jwt from 'jsonwebtoken';

// to import to protect the routes
export function auth(req, res, next) {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).send('Access denied. no token provided')
  try {
    const decodedPayload = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decodedPayload;
    req.id = user_id 
    next()
  }
  catch (ex) {
    console.error(e)
    res.status(400).send('Invalid token');
  }
}
