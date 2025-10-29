# Redirección simple con Next.js (raíz y API)

Ahora cambiar la URL es editar **una sola línea** en un **solo archivo**.

## Cambiar la URL (un archivo, una línea)
- Archivo: `c:\xampp\htdocs\s\vercel domi\config.js`
- Línea 1:
```js
export const DESTINO_URL = 'https://TU-NUEVA-URL.com/ruta';
```
Guarda, sube a GitHub y Vercel redeploya automático al importar tu repo.

## Uso
- Raíz: `https://TU-PROYECTO.vercel.app/` → `302` al destino.
- API: `https://TU-PROYECTO.vercel.app/api/go` → `302` al destino.

## Subir a GitHub
```bash
git init
git add .
git commit -m "Redirect mínimo Next.js"
git branch -M main
# Reemplaza con tu URL
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git push -u origin main
```

## Desplegar en Vercel
- Importa el repo, Preset **Next.js**.
- No necesitas variables de entorno (usa `config.js`).

## Desarrollo local (opcional)
```bash
npm install
npm run dev
# prueba
curl -I http://localhost:3000/
curl -I http://localhost:3000/api/go
```

## Qué hay dentro
- `config.js`: URL única para todo el proyecto.
- `pages/index.js`: redirección en la raíz usando `getServerSideProps`.
- `pages/api/go.js`: redirección por API (302).

## Validaciones
- Si la URL no es válida (sin `http/https`) se muestra error claro.