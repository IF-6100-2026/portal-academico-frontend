export type HealthResponse = { status: string; service: string; timestamp: string };
export async function getHealth(): Promise<HealthResponse> {
  const response = await fetch(`${import.meta.env.VITE_API_URL ?? 'http://localhost:8080'}/api/v1/health`);
  if (!response.ok) throw new Error(`Backend respondió HTTP ${response.status}`);
  return response.json() as Promise<HealthResponse>;
}
