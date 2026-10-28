import { useEffect, useState } from 'react';
import { getHealth, type HealthResponse } from '../api/health';
export default function App() {
  const [health, setHealth] = useState<HealthResponse>(); const [error, setError] = useState<string>();
  useEffect(() => { getHealth().then(setHealth).catch((reason: unknown) => setError(reason instanceof Error ? reason.message : 'Sin conexión')); }, []);
  return <main><header>Centro Educativo María Montessori <span>IF-6100 · Entorno de desarrollo</span></header><section><p className="eyebrow">PORTAL ACADÉMICO</p><h1>Seguimiento académico,<br/>en un solo lugar.</h1><p className="intro">Prototipo técnico. Esta pantalla comprueba la conexión entre React y el backend del proyecto.</p><article><i className={health ? 'online' : error ? 'offline' : ''}/><div><strong>{health ? 'Backend conectado' : error ? 'Backend no disponible' : 'Comprobando conexión…'}</strong><p>{health ? `${health.service} · ${health.status} · ${new Date(health.timestamp).toLocaleString('es-CR')}` : error ?? 'Consultando /api/v1/health'}</p></div></article><small>Esqueleto del PC2 · Casos de uso de negocio en elaboración.</small></section></main>;
}
