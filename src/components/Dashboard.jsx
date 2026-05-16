import React from 'react';
import StatCard from './StatCard';
import ChartSection from './ChartSection';
import { DollarSign, Activity, CreditCard } from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header flex-row-between">
        <div>
          <h1 className="page-title">Dashboard</h1>
          <p className="text-muted">Welcome back, Sawah. Here is what's happening today.</p>
        </div>
        <button className="primary-btn glass-panel">
          Deposit Funds
        </button>
      </div>

      <div className="stats-grid">
        <StatCard 
          title="Total Balance" 
          value="$124,563.00" 
          change={12.5} 
          isPositive={true} 
          icon={DollarSign}
          delay={0}
        />
        <StatCard 
          title="24h Volume" 
          value="$14,230.50" 
          change={4.2} 
          isPositive={true} 
          icon={Activity}
          delay={100}
        />
        <StatCard 
          title="Total Spent" 
          value="$8,450.00" 
          change={2.4} 
          isPositive={false} 
          icon={CreditCard}
          delay={200}
        />
      </div>

      <ChartSection />
    </div>
  );
};

export default Dashboard;
