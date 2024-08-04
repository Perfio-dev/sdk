let token: string | null = null;

export function setToken(t: string) {
  token = t;
}

export function getToken(): string {
  if (!token) {
    throw new Error('Token is not set');
  }

  return token;
}

let endpoint = 'https://perfio.dev/api/v1/events';

export function setEndpoint(e: string) {
  endpoint = e;
}

export function getEndpoint() {
  return endpoint;
}
