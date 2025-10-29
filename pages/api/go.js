import { DESTINO_URL } from '../../config'

export default function handler(req, res) {
  const destination = DESTINO_URL || process.env.DESTINO_URL;

  if (!destination) {
    res.status(500).json({ error: 'DESTINO_URL no está configurada.' });
    return;
  }

  let parsed;
  try {
    parsed = new URL(destination);
  } catch (err) {
    res
      .status(500)
      .json({ error: 'DESTINO_URL inválida. Use una URL completa http/https.' });
    return;
  }

  if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
    res.status(500).json({ error: 'DESTINO_URL debe usar http o https.' });
    return;
  }

  res.statusCode = 302;
  res.setHeader('Location', parsed.toString());
  res.end();
}