import { DESTINO_URL } from '../config'

export async function getServerSideProps() {
  const destination = DESTINO_URL || process.env.DESTINO_URL;

  if (!destination) {
    return { props: { error: 'DESTINO_URL no está configurada.' } };
  }

  let parsed;
  try {
    parsed = new URL(destination);
  } catch {
    return {
      props: {
        error: 'DESTINO_URL inválida. Use una URL completa http/https.',
      },
    };
  }

  if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
    return { props: { error: 'DESTINO_URL debe usar http o https.' } };
  }

  return {
    redirect: {
      destination: parsed.toString(),
      permanent: false,
    },
  };
}

export default function Home({ error }) {
  if (error) {
    return (
      <main
        style={{
          fontFamily: 'system-ui, sans-serif',
          background: '#111',
          color: '#ddd',
          minHeight: '100vh',
          padding: '2rem',
        }}
      >
        <h1 style={{ fontSize: '1.1rem', fontWeight: 500, marginBottom: '1rem' }}>
          Impresión con formato estilístico
        </h1>
        <pre
          style={{
            background: '#000',
            border: '1px solid #333',
            borderRadius: '6px',
            padding: '1rem',
            overflow: 'auto',
          }}
        >
          {JSON.stringify({ error }, null, 2)}
        </pre>
        <p style={{ marginTop: '1rem' }}>
          Defina `DESTINO_URL` en Vercel y vuelva a desplegar.
        </p>
      </main>
    );
  }

  return null;
}