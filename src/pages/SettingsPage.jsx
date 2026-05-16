import React from 'react';

const SettingsPage = () => {
  return (
    <div className="animate-fade-in" style={{ padding: '24px', maxWidth: '800px' }}>
      <div className="dashboard-header flex-row-between">
        <div>
          <h1 className="page-title">Settings</h1>
          <p className="text-muted">Manage your account preferences.</p>
        </div>
        <button className="primary-btn">Save Changes</button>
      </div>
      
      <div className="glass-panel" style={{ padding: '32px', marginTop: '32px' }}>
        <h3 style={{ marginBottom: '24px', borderBottom: '1px solid var(--border-color)', paddingBottom: '16px' }}>Personal Information</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-input" defaultValue="Sawah" />
          </div>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input type="email" className="form-input" defaultValue="contact@sawah.trade" />
          </div>
          <div className="form-group">
            <label className="form-label">Phone Number</label>
            <input type="tel" className="form-input" defaultValue="+20 123 456 7890" />
          </div>
          <div className="form-group">
            <label className="form-label">Location</label>
            <input type="text" className="form-input" defaultValue="Cairo, Egypt" />
          </div>
        </div>

        <h3 style={{ margin: '32px 0 24px', borderBottom: '1px solid var(--border-color)', paddingBottom: '16px' }}>Preferences</h3>
        
        <div className="form-group" style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <label className="form-label" style={{ color: 'var(--text-primary)', fontSize: '16px' }}>Email Notifications</label>
            <p className="text-muted" style={{ fontSize: '13px', marginTop: '4px' }}>Receive daily market updates and trade alerts.</p>
          </div>
          <label className="switch" style={{ position: 'relative', display: 'inline-block', width: '48px', height: '24px' }}>
            <input type="checkbox" defaultChecked style={{ opacity: 0, width: 0, height: 0 }} />
            <span style={{ position: 'absolute', cursor: 'pointer', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'var(--accent-primary)', borderRadius: '24px', transition: '.4s' }}></span>
            <span style={{ position: 'absolute', content: '""', height: '18px', width: '18px', left: '26px', bottom: '3px', backgroundColor: 'white', borderRadius: '50%', transition: '.4s' }}></span>
          </label>
        </div>

        <div className="form-group" style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
          <div>
            <label className="form-label" style={{ color: 'var(--text-primary)', fontSize: '16px' }}>Two-Factor Authentication (2FA)</label>
            <p className="text-muted" style={{ fontSize: '13px', marginTop: '4px' }}>Secure your account with Google Authenticator.</p>
          </div>
          <button className="primary-btn" style={{ background: 'transparent', border: '1px solid var(--accent-primary)', color: 'var(--accent-primary)' }}>Enable</button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
