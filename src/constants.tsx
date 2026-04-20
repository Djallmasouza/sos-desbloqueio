import React from 'react';
import { 
  AlertTriangle, Ghost, EyeOff, Sparkles, Trash2, Wand2, Eye, Mail 
} from 'lucide-react';
import { Feeling, Action } from './types';

export const FEELINGS: Record<string, Feeling> = {
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

export const NEXT_ACTIONS: Action[] = [
  {
    id: 'lama',
    title: 'O que eu escondo é...',
    desc: 'Escrever sobre o que mais te envergonha agora.',
    icon: <Sparkles className="w-6 h-6 text-purple-400" />,
    prompt: 'O que eu não quero que ninguém saiba sobre como me sinto hoje?',
    placeholder: 'O que eu escondo é...'
  },
  {
    id: 'chao',
    title: 'Os medos que me travam são...',
    desc: 'Listar 5 medos irracionais que estão no seu caminho.',
    icon: <Trash2 className="w-6 h-6 text-emerald-400" />,
    prompt: 'Quais são as 5 mentiras que meu medo está contando agora?',
    placeholder: 'Os medos que me travam são...'
  },
  {
    id: 'simbolico',
    title: 'Eu escolho soltar...',
    desc: 'Rasgar uma folha ou fechar os olhos por 1 minuto.',
    icon: <Wand2 className="w-6 h-6 text-gold" />,
    prompt: 'Sinta o peso saindo. O que você escolhe soltar neste exato momento?',
    placeholder: 'Eu escolho soltar...'
  },
  {
    id: 'olhar',
    title: 'Ele seria...',
    desc: 'Personificar seu travamento: que cara ele tem?',
    icon: <Eye className="w-6 h-6 text-blue-400" />,
    prompt: 'Se o seu travamento fosse um personagem, como ele seria? O que ele diria?',
    placeholder: 'Ele seria...'
  },
  {
    id: 'carta',
    title: 'Mesmo assim, eu vou porque...',
    desc: 'Diga a ele por que você vai continuar mesmo assim.',
    icon: <Mail className="w-6 h-6 text-red-400" />,
    prompt: 'Querido Sabotador, eu entendo que você quer me proteger, mas...',
    placeholder: 'Mesmo assim, eu vou porque...'
  }
];
