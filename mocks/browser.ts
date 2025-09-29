// eslint-disable-next-line import/no-extraneous-dependencies
import { setupWorker } from 'msw/browser';

import { handlers } from './handler';

export const worker = setupWorker(...handlers);
