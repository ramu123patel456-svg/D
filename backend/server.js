import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const app = express();
const PORT = Number(process.env.API_PORT || 3001);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.disable('x-powered-by');
app.use(express.json({ limit: '100kb' }));

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    app: 'SITEFORGE Campus Portal — Sprint 1 Demo',
    mode: 'demo-only',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/demo-data', (_req, res) => {
  res.json({
    demo: true,
    collegeName: 'Vasantrao Sakharam Sanas Jr. College',
    notices: [
      { id: 'notice-1', category: 'Academic', title: 'Academic calendar preview', date: 'Demo date', detail: 'Official dates will be added after college confirmation.' },
      { id: 'notice-2', category: 'Admissions', title: 'Admissions information', date: 'To be confirmed', detail: 'This is sample content for the design preview only.' },
      { id: 'notice-3', category: 'Events', title: 'College activities', date: 'To be confirmed', detail: 'Event dates and announcements are placeholders.' }
    ]
  });
});

app.get('/api/*splat', (_req, res) => {
  res.status(404).json({ error: 'API route not found' });
});

app.listen(PORT, '127.0.0.1', () => {
  console.log(`SITEFORGE demo API: http://127.0.0.1:${PORT}/api/health`);
});
