import React from 'react';
import { Loading } from '@/components';
import loadable from '../utils/loadable';

// Landing Page
export const Landing = loadable(() => import('./Landing'), {
  fallback: <Loading />,
});

// Static Pages
export const NotFound = loadable(() => import('./NotFound'), {
  fallback: <Loading />,
});

export const Prelogin = loadable(() => import('./Prelogin'), {
  fallback: <Loading />,
});

export const CashGame = loadable(() => import('./CashGame'), {
  fallback: <Loading />,
});
