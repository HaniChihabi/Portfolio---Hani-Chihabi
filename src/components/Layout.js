// components/Layout.js
import React from 'react';

function Layout({ header, intro, children }) {
  return (
    <div>
      <header>{header}</header>
      <div className="page-content">
        <aside className="intro">{intro}</aside>
        <main>{children}</main>
      </div>
    </div>
  );
}

export default Layout;
