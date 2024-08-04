import { onCLS, onFCP, onFID, onINP, onLCP, onTTFB } from 'web-vitals';

import { collectMetrics } from './lib/collect-metrics';
import { setEndpoint, setToken } from './lib/configs';
import { cuid } from './lib/cuid';
import { getConnectionSpeed } from './lib/get-connection-speed';
import { getScreenSize } from './lib/get-screen-size';
import { PerfioOptions } from './lib/options';

function computeAttrs() {
  return {
    speed: getConnectionSpeed(),
    sessionId: cuid(),
    screen: getScreenSize(),
    path: window.location.pathname,
  };
}

function metricsHandler(metric: any) {
  collectMetrics({
    ...computeAttrs(),
    data: metric,
  });
}

export function reportWebVitals({ endpoint, token }: PerfioOptions) {
  setToken(token);

  if (endpoint) {
    setEndpoint(endpoint);
  }

  onCLS(metricsHandler);
  onFCP(metricsHandler);
  onFID(metricsHandler);
  onINP(metricsHandler);
  onLCP(metricsHandler);
  onTTFB(metricsHandler);
}
