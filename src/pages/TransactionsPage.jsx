import React from 'react';
import { ArrowUpRight, ArrowDownRight, RefreshCw } from 'lucide-react';

const TransactionsPage = () => {
  const transactions = [
    { id: 'TX-9842', type: 'Buy', asset: 'Bitcoin (BTC)', amount: '+0.45 BTC', value: '$28,450.00', status: 'Completed', date: 'May 16, 2026' },
    { id: 'TX-9841', type: 'Sell', asset: 'Ethereum (ETH)', amount: '-12.5 ETH', value: '$38,125.00', status: 'Completed', date: 'May 15, 2026' },
    { id: 'TX-9840', type: 'Deposit', asset: 'USDT', amount: '+50,000 USDT', value: '$50,000.00', status: 'Pending', date: 'May 14, 2026' },
    { id: 'TX-9839', type: 'Buy', asset: 'Solana (SOL)', amount: '+150 SOL', value: '$22,500.00', status: 'Completed', date: 'May 12, 2026' },
    { id: 'TX-9838', type: 'Withdraw', asset: 'USD Bank', amount: '-10,000 USD', value: '$10,000.00', status: 'Failed', date: 'May 10, 2026' },
  ];

  return (
    <div className="animate-fade-in" style={{ padding: '24px' }}>
      <div className="dashboard-header flex-row-between">
        <div>
          <h1 className="page-title">Transactions</h1>
          <p className="text-muted">View your recent trading history.</p>
        </div>
        <button className="primary-btn flex-row-center" style={{ gap: '8px' }}>
          <RefreshCw size={16} /> Export CSV
        </button>
      </div>
      
      <div className="glass-panel" style={{ padding: '24px', marginTop: '32px' }}>
        <h3 style={{ marginBottom: '16px' }}>Recent Activity</h3>
        <div style={{ overflowX: 'auto' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Type</th>
                <th>Asset</th>
                <th>Amount</th>
                <th>Value (USD)</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx.id}>
                  <td style={{ fontWeight: 500 }}>{tx.id}</td>
                  <td>
                    <div className="flex-row-center" style={{ gap: '8px' }}>
                      {tx.type === 'Buy' || tx.type === 'Deposit' ? (
                        <ArrowDownRight size={16} className="text-success" />
                      ) : (
                        <ArrowUpRight size={16} className="text-danger" />
                      )}
                      {tx.type}
                    </div>
                  </td>
                  <td>{tx.asset}</td>
                  <td className={tx.amount.startsWith('+') ? 'text-success' : 'text-danger'}>
                    {tx.amount}
                  </td>
                  <td>{tx.value}</td>
                  <td className="text-muted">{tx.date}</td>
                  <td>
                    <span className={`badge ${tx.status === 'Completed' ? 'success' : tx.status === 'Pending' ? 'warning' : 'danger'}`}>
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionsPage;
