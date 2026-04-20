import React from 'react';

export interface Feeling {
  id: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  color: string;
  support: string;
}

export interface Action {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  prompt: string;
  placeholder?: string;
}
