import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AnalyticsPage = () => {
  const data = [
    { name: 'Mon', buy: 4000, sell: 2400 },
    { name: 'Tue', buy: 3000, sell: 1398 },
    { name: 'Wed', buy: 2000, sell: 9800 },
    { name: 'Thu', buy: 2780, sell: 3908 },
    { name: 'Fri', buy: 1890, sell: 4800 },
    { name: 'Sat', buy: 2390, sell: 3800 },
    { name: 'Sun', buy: 3490, sell: 4300 },
  ];

  return (
    <div className="animate-fade-in" style={{ padding: '24px' }}>
      <div className="dashboard-header flex-row-between">
        <div>
          <h1 className="page-title">Analytics</h1>
          <p className="text-muted">Detailed insights into your portfolio performance.</p>
        </div>
      </div>
      
      <div className="stats-grid" style={{ marginBottom: '32px' }}>
        <div className="glass-panel" style={{ padding: '24px' }}>
          <h4 className="text-muted" style={{ marginBottom: '8px' }}>Total Trade Volume</h4>
          <h2>$845,230.50</h2>
          <p className="text-success" style={{ marginTop: '8px', fontSize: '14px' }}>+12.5% this week</p>
        </div>
        <div className="glass-panel" style={{ padding: '24px' }}>
          <h4 className="text-muted" style={{ marginBottom: '8px' }}>Most Traded Asset</h4>
          <h2>Solana (SOL)</h2>
          <p className="text-muted" style={{ marginTop: '8px', fontSize: '14px' }}>45% of total volume</p>
        </div>
        <div className="glass-panel" style={{ padding: '24px' }}>
          <h4 className="text-muted" style={{ marginBottom: '8px' }}>Win Rate</h4>
          <h2>68.4%</h2>
          <p className="text-success" style={{ marginTop: '8px', fontSize: '14px' }}>+2.1% from last month</p>
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '32px', height: '400px' }}>
        <h3 style={{ marginBottom: '24px' }}>Weekly Buy vs Sell Volume</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-highlight)" vertical={false} />
            <XAxis dataKey="name" stroke="var(--text-muted)" axisLine={false} tickLine={false} dy={10} />
            <YAxis stroke="var(--text-muted)" axisLine={false} tickLine={false} tickFormatter={(v) => `$${v/1000}k`} />
            <Tooltip 
              contentStyle={{ background: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: '8px' }}
              itemStyle={{ color: 'var(--text-primary)' }}
            />
            <Bar dataKey="buy" fill="var(--accent-primary)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="sell" fill="var(--accent-danger)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnalyticsPage;
