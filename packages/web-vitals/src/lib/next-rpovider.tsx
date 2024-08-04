'use client';

import { useReportWebVitals } from 'next/web-vitals';

import { collectMetrics } from './collect-metrics';
import { setEndpoint, setToken } from './configs';
import { cuid } from './cuid';
import { getConnectionSpeed } from './get-connection-speed';
import { getScreenSize } from './get-screen-size';
import { PerfioOptions } from './options';

export function PerfioProvider({ endpoint, token }: PerfioOptions) {
  useReportWebVitals((metric) => {
    if (typeof window === 'undefined' || !window) {
      return;
    }

    setToken(token);

    const sessionId = cuid();

    if (endpoint) {
      setEndpoint(endpoint);
    }

    const speed = getConnectionSpeed();

    const screen = getScreenSize();

    collectMetrics({
      path: window.location.pathname,
      speed,
      screen,
      data: metric,
      sessionId: sessionId,
    });
  });

  return <></>;
}
