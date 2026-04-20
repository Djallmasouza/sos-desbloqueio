import React from 'react';
import { 
  ArrowRight, PenTool, Star, 
  RotateCcw, Heart, CheckCircle2 
} from 'lucide-react';
import { Feeling, Action } from '../types';
import { FEELINGS, NEXT_ACTIONS } from '../constants';
import { useShadowWriting } from '../hooks/useShadowWriting';
import { Button } from './ui/Button';
import { TextArea } from './ui/TextArea';
import { twMerge } from 'tailwind-merge';

export const ShadowWritingFlow: React.FC = () => {
  const {
    step,
    feeling,
    text,
    setText,
    unlockCount,
    selectedAction,
    wordCount,
    handleFeelingSelect,
    handleFinishBreakthrough,
    reset,
    handleStartWriting,
    handleActionSelect,
    handleShowActions,
    handleFinishWritingAction,
    handleBackToStep4,
    handleBackToActions,
  } = useShadowWriting();

  return (
    <div className="w-full max-w-[390px] mx-auto">
      {/* TELA 1: EMERGÊNCIA */}
      {step === 1 && (
        <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500 py-8 space-y-8">
          <div className="text-center space-y-2">
            <h1 className="font-serif text-4xl text-[#D4AF37]">Estou Travada</h1>
            <p className="text-slate-400 text-sm italic">O que você está sentindo agora?</p>
          </div>

          <div className="space-y-4">
            {Object.values(FEELINGS).map((f) => (
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
      {step === 2 && feeling && (
        <div className="w-full animate-in fade-in duration-500 py-12 flex flex-col items-center space-y-10">
          <div className="bg-purple-900/20 border border-purple-500/30 p-8 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Heart className="w-20 h-20 text-purple-400" />
            </div>
            <p className="text-lg leading-relaxed text-slate-200 relative z-10 font-serif italic text-center">
              "{feeling.support}"
            </p>
          </div>

          <Button 
            onClick={handleStartWriting}
            icon={<ArrowRight className="w-5 h-5" />}
            className="rounded-full px-8"
          >
            Estou pronta — escrever 3 palavras
          </Button>
        </div>
      )}

      {/* TELA 3: ESCRITA 3 PALAVRAS */}
      {step === 3 && (
        <div className="w-full animate-in fade-in duration-500 py-8 space-y-6">
          <TextArea
            label="Suas 3 palavras"
            sublabel="Apenas o que vier, sem filtro."
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Digite aqui... a sombra ouve."
            wordCount={wordCount}
          />

          <Button
            disabled={wordCount < 1}
            onClick={handleFinishBreakthrough}
            variant={wordCount >= 1 ? 'gold' : 'secondary'}
            icon={<PenTool className="w-5 h-5" />}
          >
            Concluir
          </Button>
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
            <Button 
              onClick={handleShowActions}
              variant="purple"
              icon={<ArrowRight className="w-5 h-5" />}
              className="rounded-2xl"
            >
              Ver Próximos Passos
            </Button>
            <Button 
              onClick={reset}
              variant="ghost"
              icon={<RotateCcw className="w-3 h-3" />}
              className="mx-auto"
            >
              Apenas encerrar por hoje
            </Button>
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
            {NEXT_ACTIONS.map((action) => (
              <button
                key={action.id}
                onClick={() => handleActionSelect(action)}
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

          <Button 
            onClick={handleBackToStep4}
            variant="ghost"
            className="w-full py-3"
          >
            Voltar
          </Button>
        </div>
      )}

      {/* TELA 6: EXERCÍCIO DE PROFUNDIDADE */}
      {step === 6 && selectedAction && (
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
            <Button 
              onClick={handleBackToActions}
              variant="outline"
              className="flex-1"
            >
              Trocar Ação
            </Button>
            <Button
              disabled={text.length < 5}
              onClick={handleFinishWritingAction}
              variant={text.length >= 5 ? 'gold' : 'secondary'}
              className="flex-[2]"
              icon={<CheckCircle2 className="w-5 h-5" />}
            >
              Finalizar Escrita
            </Button>
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
            <Button 
              onClick={reset}
              className="rounded-2xl"
            >
              Finalizar Jornada
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
