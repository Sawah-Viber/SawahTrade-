import React from 'react';
import { Search, Bell, ChevronDown } from 'lucide-react';
import './TopBar.css';

const TopBar = () => {
  return (
    <header className="topbar">
      <div className="search-container glass-panel flex-row-center">
        <Search size={18} className="search-icon text-muted" />
        <input 
          type="text" 
          placeholder="Search for crypto, news, or users..." 
          className="search-input"
        />
      </div>

      <div className="topbar-actions flex-row-center">
        <button className="icon-btn glass-panel">
          <Bell size={20} />
          <span className="notification-dot"></span>
        </button>

        <div className="user-profile glass-panel flex-row-center">
          <div className="user-info">
            <span className="user-name">Sawah</span>
            <span className="user-role">Pro Trader</span>
          </div>
          <ChevronDown size={16} className="text-muted" />
        </div>
      </div>
    </header>
  );
};

export default TopBar;
