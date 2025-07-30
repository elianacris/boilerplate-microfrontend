import React from 'react';

const Dashboard = React.lazy(() => import('dashboard/Dashboard'));

export default function App() {
  return (
    <React.Suspense fallback={<div>Carregando...</div>}>
      <Dashboard />
    </React.Suspense>
  );
}