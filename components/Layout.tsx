import React from 'react';
import { LayoutProps } from '../types';
import Header from './Header';
import Nav from './Nav';

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen">
      {children}
      {/* Footer */}
      <Nav />
    </div>
  );
}
