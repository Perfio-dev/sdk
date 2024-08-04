import { reportWebVitals } from './index';

const url = new URL(import.meta.url);

const token = url.searchParams.get('token');

if (token) {
  reportWebVitals({ token });
}
