import React, { useState, useEffect, useMemo } from 'react';
import { 
  AlertTriangle, Ghost, EyeOff, ArrowRight, PenTool, Star, 
  RotateCcw, Heart, Sparkles, Trash2, Wand2, Eye, Mail, CheckCircle2 
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function App() {
  const [step, setStep] = useState(1);
  const [feeling, setFeeling] = useState(null);
  const [text, setText] = useState('');
  const [unlockCount, setUnlockCount] = useState(0);
  const [selectedAction, setSelectedAction] = useState(null);

  // Persistência com LocalStorage para o contador de desbloqueios
  useEffect(() => {
    const saved = localStorage.getItem('shadow_unlock_count');
    if (saved) setUnlockCount(parseInt(saved));
  }, []);

  const feelings = {
    medo: {
      id: 'medo',
      icon: <EyeOff className="w-8 h-8 text-red-500" />,
      title: "Medo",
      desc: "Tenho medo do que pode surgir",
      color: "border-red-500/30 bg-red-500/10",
      support: "O medo que você sente agora é a sombra tentando te proteger. Você não precisa ir fundo de uma vez. Apenas coloque 3 palavras no papel."
    },
    vergonha: {
      id: 'vergonha',
      icon: <Ghost className="w-8 h-8 text-orange-500" />,
      title: "Vergonha",
      desc: "Sinto que não mereço isso",
      color: "border-orange-500/30 bg-orange-500/10",
      support: "Você não precisa merecer para começar. A escrita não julga. Ela apenas recebe o que você tem agora. Escreva apenas 3 palavras."
    },
    confusao: {
      id: 'confusao',
      icon: <AlertTriangle className="w-8 h-8 text-blue-500" />,
      title: "Confusão",
      desc: "Não sei nem por onde começar",
      color: "border-blue-500/30 bg-blue-500/10",
      support: "Confusão é o início de toda descoberta real. Você não precisa saber para onde vai. Escreva apenas 3 palavras sobre o que está sentindo."
    }
  };

  const nextActions = [
    {
      id: 'lama',
      title: 'Abraçar a Lama',
      desc: 'Escrever sobre o que mais te envergonha agora.',
      icon: <Sparkles className="w-6 h-6 text-purple-400" />,
      prompt: 'O que eu não quero que ninguém saiba sobre como me sinto hoje?',
      placeholder: 'O que eu escondo é...'
    },
    {
      id: 'chao',
      title: 'Limpar o Chão',
      desc: 'Listar 5 medos irracionais que estão no seu caminho.',
      icon: <Trash2 className="w-6 h-6 text-emerald-400" />,
      prompt: 'Quais são as 5 mentiras que meu medo está contando agora?',
      placeholder: 'Os medos que me travam são...'
    },
    {
      id: 'simbolico',
      title: 'Ato Simbólico',
      desc: 'Rasgar uma folha ou fechar os olhos por 1 minuto.',
      icon: <Wand2 className="w-6 h-6 text-gold" />,
      prompt: 'Sinta o peso saindo. O que você escolhe soltar neste exato momento?',
      placeholder: 'Eu escolho soltar...'
    },
    {
      id: 'olhar',
      title: 'O Olhar da Sombra',
      desc: 'Personificar seu travamento: que cara ele tem?',
      icon: <Eye className="w-6 h-6 text-blue-400" />,
      prompt: 'Se o seu travamento fosse um personagem, como ele seria? O que ele diria?',
      placeholder: 'Ele seria...'
    },
    {
      id: 'carta',
      title: 'Carta ao Sabotador',
      desc: 'Diga a ele por que você vai continuar mesmo assim.',
      icon: <Mail className="w-6 h-6 text-red-400" />,
      prompt: 'Querido Sabotador, eu entendo que você quer me proteger, mas...',
      placeholder: 'Mesmo assim, eu vou porque...'
    }
  ];

  const wordCount = useMemo(() => {
    return text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  }, [text]);

  const handleFeelingSelect = (f) => {
    setFeeling(f);
    setStep(2);
  };

  const handleFinishBreakthrough = () => {
    const newCount = unlockCount + 1;
    setUnlockCount(newCount);
    localStorage.setItem('shadow_unlock_count', newCount.toString());
    setStep(4);
  };

  const reset = () => {
    setStep(1);
    setFeeling(null);
    setText('');
    setSelectedAction(null);
  };

  return (
    <div className="min-h-screen bg-[#0A0A14] text-white flex flex-col items-center p-4 pb-12 overflow-y-auto">
      <div className="w-full max-w-[390px] mx-auto">
        
        {/* TELA 1: EMERGÊNCIA */}
        {step === 1 && (
          <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500 py-8 space-y-8">
            <div className="text-center space-y-2">
              <h1 className="font-serif text-4xl text-[#D4AF37]">Estou Travada</h1>
              <p className="text-slate-400 text-sm italic">O que você está sentindo agora?</p>
            </div>

            <div className="space-y-4">
              {Object.values(feelings).map((f) => (
                <button
                  key={f.id}
                  onClick={() => handleFeelingSelect(f)}
                  className={twMerge(
                    "w-full flex items-center p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] active:scale-95 text-left",
                    f.color
                  )}
                >
                  <div className="mr-5">{f.icon}</div>
                  <div>
                    <p className="font-semibold text-lg">{f.title}</p>
                    <p className="text-sm text-slate-300">{f.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* TELA 2: SUPORTE */}
        {step === 2 && (
          <div className="w-full animate-in fade-in duration-500 py-12 flex flex-col items-center space-y-10">
            <div className="bg-purple-900/20 border border-purple-500/30 p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Heart className="w-20 h-20 text-purple-400" />
              </div>
              <p className="text-lg leading-relaxed text-slate-200 relative z-10 font-serif italic text-center">
                "{feeling.support}"
              </p>
            </div>

            <button
              onClick={() => setStep(3)}
              className="bg-[#D4AF37] text-[#0A0A14] font-bold px-8 py-4 rounded-full flex items-center gap-3 transition-all hover:brightness-110 active:scale-95 shadow-lg shadow-gold/20"
            >
              Estou pronta — escrever 3 palavras
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* TELA 3: ESCRITA 3 PALAVRAS */}
        {step === 3 && (
          <div className="w-full animate-in fade-in duration-500 py-8 space-y-6">
            <div className="text-center space-y-1">
              <h2 className="font-serif text-3xl text-[#D4AF37]">Suas 3 palavras</h2>
              <p className="text-slate-400 text-xs">Apenas o que vier, sem filtro.</p>
            </div>

            <div className="relative">
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Digite aqui... a sombra ouve."
                className="w-full h-40 bg-purple-900/10 border-2 border-purple-900 focus:border-purple-600 rounded-2xl p-6 text-white placeholder-slate-600 focus:outline-none transition-all resize-none font-serif text-xl text-center"
              />
              <div className="absolute bottom-4 right-4 text-xs font-mono text-purple-400 bg-[#0A0A14] px-2 py-1 rounded border border-purple-900">
                Palavras: {wordCount}
              </div>
            </div>

            <button
              disabled={wordCount < 1}
              onClick={handleFinishBreakthrough}
              className={twMerge(
                "w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all",
                wordCount >= 1 
                  ? "bg-[#D4AF37] text-[#0A0A14] cursor-pointer hover:brightness-110" 
                  : "bg-slate-800 text-slate-500 cursor-not-allowed opacity-50"
              )}
            >
              <PenTool className="w-5 h-5" />
              Concluir
            </button>
          </div>
        )}

        {/* TELA 4: CELEBRAÇÃO + CTA PARA AÇÃO */}
        {step === 4 && (
          <div className="w-full animate-in fade-in duration-500 py-10 flex flex-col items-center text-center space-y-8">
            <div className="animate-pulse">
              <Star className="w-20 h-20 text-[#D4AF37] fill-current" />
            </div>

            <div className="space-y-3">
              <h2 className="font-serif text-3xl text-white">Você permaneceu.</h2>
              <p className="text-slate-400 italic text-sm">O primeiro passo foi dado.</p>
              <div className="text-xs text-purple-400 uppercase tracking-widest font-bold">
                {unlockCount} Desbloqueios Concluídos
              </div>
            </div>

            <div className="w-full pt-6 border-t border-white/10 space-y-4">
              <p className="text-slate-300 text-sm">Você já rompeu a inércia. Quer ir mais fundo agora?</p>
              <button
                onClick={() => setStep(5)}
                className="w-full bg-purple-600/20 border border-purple-500 text-purple-300 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-purple-600/30 transition-all"
              >
                Ver Próximos Passos
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={reset}
                className="text-slate-500 text-xs flex items-center gap-1 mx-auto hover:text-slate-300 transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                Apenas encerrar por hoje
              </button>
            </div>
          </div>
        )}

        {/* TELA 5: MENU DE AÇÕES */}
        {step === 5 && (
          <div className="w-full animate-in fade-in duration-500 py-6 space-y-6">
            <div className="text-center space-y-1">
              <h2 className="font-serif text-3xl text-[#D4AF37]">A Próxima Ação</h2>
              <p className="text-slate-400 text-xs italic">Escolha uma ferramenta para aprofundar</p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {nextActions.map((action) => (
                <button
                  key={action.id}
                  onClick={() => {
                    setSelectedAction(action);
                    setText('');
                    setStep(6);
                  }}
                  className="w-full flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all text-left group"
                >
                  <div className="mt-1 p-2 bg-white/5 rounded-lg group-hover:bg-purple-500/10 transition-colors">
                    {action.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-white leading-tight">{action.title}</p>
                    <p className="text-xs text-slate-400 mt-1">{action.desc}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-600 self-center" />
                </button>
              ))}
            </div>

            <button
              onClick={() => setStep(4)}
              className="w-full py-3 text-slate-500 text-sm hover:text-white transition-colors"
            >
              Voltar
            </button>
          </div>
        )}

        {/* TELA 6: EXERCÍCIO DE PROFUNDIDADE */}
        {step === 6 && (
          <div className="w-full animate-in fade-in duration-500 py-8 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-purple-500/10 rounded-lg">
                {selectedAction.icon}
              </div>
              <h3 className="font-serif text-2xl text-[#D4AF37]">{selectedAction.title}</h3>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 italic text-slate-300 text-sm leading-relaxed">
              {selectedAction.prompt}
            </div>

            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={selectedAction.placeholder || "A verdade liberta..."}
              className="w-full h-48 bg-white/5 border border-purple-900/50 focus:border-purple-500 rounded-2xl p-6 text-white placeholder-slate-600 focus:outline-none transition-all resize-none"
            />

            <div className="flex gap-3">
              <button
                onClick={() => setStep(5)}
                className="flex-1 py-4 rounded-xl font-bold bg-white/5 text-slate-400 hover:text-white transition-all"
              >
                Trocar Ação
              </button>
              <button
                disabled={text.length < 5}
                onClick={() => setStep(7)}
                className={twMerge(
                  "flex-[2] py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all",
                  text.length >= 5 
                    ? "bg-[#D4AF37] text-[#0A0A14]" 
                    : "bg-slate-800 text-slate-500 opacity-50 cursor-not-allowed"
                )}
              >
                Finalizar Escrita
                <CheckCircle2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* TELA 7: CONCLUSÃO FINAL */}
        {step === 7 && (
          <div className="w-full animate-in fade-in duration-500 py-12 flex flex-col items-center text-center space-y-10">
            <div className="relative">
              <div className="absolute inset-0 bg-[#D4AF37] blur-2xl opacity-20 animate-pulse"></div>
              <CheckCircle2 className="w-20 h-20 text-emerald-500 relative z-10" />
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-4xl text-white">Você permaneceu até o fim.</h2>
              <p className="text-slate-400 leading-relaxed px-4">
                O que antes era silêncio agora ganhou voz. Sua sombra agradece por ser vista.
              </p>
            </div>

            <div className="w-full pt-8">
              <button
                onClick={reset}
                className="w-full bg-[#D4AF37] text-[#0A0A14] py-4 rounded-2xl font-bold shadow-lg shadow-gold/10 hover:scale-[1.02] transition-all"
              >
                Finalizar Jornada
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
