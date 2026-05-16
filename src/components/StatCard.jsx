import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import './StatCard.css';

const StatCard = ({ title, value, change, isPositive, icon: Icon, delay }) => {
  return (
    <div 
      className="stat-card glass-panel animate-fade-in" 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="stat-header flex-row-between">
        <span className="stat-title text-muted">{title}</span>
        <div className="stat-icon-wrapper">
          <Icon size={20} className="stat-icon" />
        </div>
      </div>
      
      <div className="stat-body">
        <h3 className="stat-value">{value}</h3>
        <div className={`stat-change flex-row-center ${isPositive ? 'positive' : 'negative'}`}>
          {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
          <span>{Math.abs(change)}%</span>
          <span className="stat-period">vs last month</span>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
