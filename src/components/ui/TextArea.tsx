import React from 'react';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  sublabel?: string;
  wordCount?: number;
}

export const TextArea: React.FC<TextAreaProps> = ({ 
  label, 
  sublabel, 
  wordCount, 
  className, 
  ...props 
}) => {
  return (
    <div className="w-full space-y-6">
      {(label || sublabel) && (
        <div className="text-center space-y-1">
          {label && <h2 className="font-serif text-3xl text-[#D4AF37]">{label}</h2>}
          {sublabel && <p className="text-slate-400 text-xs">{sublabel}</p>}
        </div>
      )}

      <div className="relative">
        <textarea
          className="w-full h-40 bg-purple-900/10 border-2 border-purple-900 focus:border-purple-600 rounded-2xl p-6 text-white placeholder-slate-600 focus:outline-none transition-all resize-none font-serif text-xl text-center"
          {...props}
        />
        {wordCount !== undefined && (
          <div className="absolute bottom-4 right-4 text-xs font-mono text-purple-400 bg-[#0A0A14] px-2 py-1 rounded border border-purple-900">
            Palavras: {wordCount}
          </div>
        )}
      </div>
    </div>
  );
};
