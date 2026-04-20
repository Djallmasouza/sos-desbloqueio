import React from 'react';
import { ShadowWritingFlow } from './components/ShadowWritingFlow';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A14] text-white flex flex-col items-center p-4 pb-12 overflow-y-auto">
      <ShadowWritingFlow />
    </div>
  );
}
