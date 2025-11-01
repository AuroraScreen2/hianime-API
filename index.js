// index.js
import { Hono } from 'hono';
import { serve } from '@hono/node-server'; // Node-compatible server
import app from './src/app.js';

// Start server on port 3030
serve({
  fetch: app.fetch,
  port: 3030,
});

console.log('✅ Server started: http://localhost:3030/ui');
