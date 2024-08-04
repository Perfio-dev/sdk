import { getEndpoint, getToken } from './configs';

export type Metrics = {
  sessionId: string;
  path: string;
  speed: string;
  screen: string;
  data: any;
};

let queue: (Metrics & { eventType: 'web-vitals' })[] = [];

let timeout: null | ReturnType<typeof setTimeout> = null;

export function collectMetrics(metric: Metrics) {
  queue.push({ ...metric, eventType: 'web-vitals' });
  timeout = setTimeout(() => {
    sendMetrics();
    timeout = null;
  }, 3000);
}

function sendMetrics() {
  if (queue.length === 0) {
    return;
  }
  const body = JSON.stringify([...queue]);
  queue = [];

  fetch(getEndpoint(), {
    body,
    method: 'POST',
    keepalive: true,
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  }).catch((e) => {
    queue = JSON.parse(body).concat(queue);

    console.error(e);
  });
}
