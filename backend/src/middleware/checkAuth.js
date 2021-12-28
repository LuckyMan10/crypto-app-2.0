const checkAuth = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    next();
  }
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: 'Not authorized.' });
    }
    next();
  } catch (e) {
    res.status(401).json({ message: e });
  }
};

export default checkAuth;
