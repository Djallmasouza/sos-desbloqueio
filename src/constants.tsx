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
    desc: 'Um convite para colocar em palavras algo que você ainda não disse em voz alta.',
    icon: <Sparkles className="w-6 h-6 text-purple-400" />,
    prompt: 'Existe algo que você gostaria de registrar agora? Escreva só o que fizer sentido pra você, no seu ritmo.',
    placeholder: 'O que eu escondo é...'
  },
  {
    id: 'chao',
    title: 'Os medos que me travam são...',
    desc: 'Nomear até 5 preocupações que estão no seu caminho agora.',
    icon: <Trash2 className="w-6 h-6 text-emerald-400" />,
    prompt: 'Quais são as preocupações que estão te travando agora? Escreva até 5, na ordem que vierem.',
    placeholder: 'Os medos que me travam são...'
  },
  {
    id: 'simbolico',
    title: 'Eu escolho soltar...',
    desc: 'Escrever o que está pesando agora e o que não depende só de você resolver.',
    icon: <Wand2 className="w-6 h-6 text-gold" />,
    prompt: 'O que está pesando para você agora? Existe alguma parte disso que não depende de você resolver? Escreva o que gostaria de deixar de carregar neste momento.',
    placeholder: 'Eu escolho soltar...'
  },
  {
    id: 'olhar',
    title: 'Se minha dificuldade tivesse uma forma...',
    desc: 'Se ajudar, você pode imaginar seu travamento como um personagem — não é obrigatório.',
    icon: <Eye className="w-6 h-6 text-blue-400" />,
    prompt: 'Se quiser, imagine seu travamento como um personagem. Como ele seria? O que ele diria? Se preferir, descreva do seu jeito, sem personagem nenhum.',
    placeholder: 'Minha dificuldade se parece com...'
  },
  {
    id: 'carta',
    title: 'Mesmo assim, eu vou porque...',
    desc: 'Escrever um pequeno próximo passo, mesmo com a dificuldade ainda presente.',
    icon: <Mail className="w-6 h-6 text-red-400" />,
    prompt: 'Mesmo com essa dificuldade ainda aqui, qual pequeno passo você gostaria de tentar? Você não precisa esperar ela desaparecer pra dar esse passo.',
    placeholder: 'Mesmo assim, eu vou porque...'
  }
];
