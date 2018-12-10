import React from 'react';

import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header-group">
        <a className="sidebar-header-link" href="/index.html">
          <h1 className="sidebar-header">Diary App</h1>
        </a>
        <span className="sidebar-header__comment">Comments with no sence</span>
      </div>
    </div>
  );
}

export default Sidebar;