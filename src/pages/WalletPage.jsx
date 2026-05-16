import React from 'react';
import { Wallet, Plus, ArrowRightLeft, Send } from 'lucide-react';

const WalletPage = () => {
  const assets = [
    { name: 'Bitcoin', symbol: 'BTC', balance: '0.45', value: '$28,450.00', color: '#F7931A' },
    { name: 'Ethereum', symbol: 'ETH', balance: '12.5', value: '$38,125.00', color: '#627EEA' },
    { name: 'Solana', symbol: 'SOL', balance: '150', value: '$22,500.00', color: '#14F195' },
    { name: 'Tether', symbol: 'USDT', balance: '35,488', value: '$35,488.00', color: '#26A17B' },
  ];

  return (
    <div className="animate-fade-in" style={{ padding: '24px' }}>
      <div className="dashboard-header flex-row-between">
        <div>
          <h1 className="page-title">My Wallet</h1>
          <p className="text-muted">Manage your crypto assets and balances.</p>
        </div>
        <div className="flex-row-center" style={{ gap: '12px' }}>
          <button className="primary-btn flex-row-center" style={{ gap: '8px', background: 'var(--bg-surface)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', boxShadow: 'none' }}>
            <Send size={16} /> Send
          </button>
          <button className="primary-btn flex-row-center" style={{ gap: '8px' }}>
            <Plus size={16} /> Add Funds
          </button>
        </div>
      </div>
      
      <div className="glass-panel" style={{ padding: '32px', marginTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <p className="text-muted" style={{ marginBottom: '8px' }}>Estimated Balance</p>
          <h1 style={{ fontSize: '42px', letterSpacing: '-1px' }}>$124,563.00</h1>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p className="text-muted" style={{ marginBottom: '8px' }}>24h Profit/Loss</p>
          <h2 className="text-success">+ $2,450.50 (2.1%)</h2>
        </div>
      </div>

      <h3 style={{ margin: '32px 0 16px' }}>Your Assets</h3>
      <div className="stats-grid">
        {assets.map(asset => (
          <div key={asset.symbol} className="glass-panel" style={{ padding: '20px' }}>
            <div className="flex-row-between" style={{ marginBottom: '16px' }}>
              <div className="flex-row-center" style={{ gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: `${asset.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: asset.color, fontWeight: 'bold' }}>
                  {asset.symbol[0]}
                </div>
                <div>
                  <h4 style={{ fontSize: '16px' }}>{asset.name}</h4>
                  <p className="text-muted" style={{ fontSize: '13px' }}>{asset.symbol}</p>
                </div>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '24px' }}>{asset.balance}</h3>
              <p className="text-muted" style={{ marginTop: '4px' }}>{asset.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WalletPage;
