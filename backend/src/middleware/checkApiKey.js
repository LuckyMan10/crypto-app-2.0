const checkApiKey = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    next();
  }
  try {
    const api_key = req.headers.api_key;
    if (api_key === '1f518b6c-60d5-11ec-8607-0242ac130002') {
      next();
    } else {
      throw 'Для работы с api нужен ключ';
    }
  } catch (e) {
    res.status(401).json({ message: e });
  }
};

export default checkApiKey;
