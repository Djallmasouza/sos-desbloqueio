import { useState, useEffect, useMemo, useCallback } from 'react';
import { Feeling, Action } from '../types';

const STORAGE_KEY = 'shadow_unlock_count';

export function useShadowWriting() {
  const [step, setStep] = useState(1);
  const [feeling, setFeeling] = useState<Feeling | null>(null);
  const [text, setText] = useState('');
  const [unlockCount, setUnlockCount] = useState(0);
  const [selectedAction, setSelectedAction] = useState<Action | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setUnlockCount(parseInt(saved, 10));
  }, []);

  const wordCount = useMemo(() => {
    return text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  }, [text]);

  const handleFeelingSelect = useCallback((f: Feeling) => {
    setFeeling(f);
    setStep(2);
  }, []);

  const handleFinishBreakthrough = useCallback(() => {
    setUnlockCount((prev) => {
      const next = prev + 1;
      localStorage.setItem(STORAGE_KEY, next.toString());
      return next;
    });
    setStep(4);
  }, []);

  const reset = useCallback(() => {
    setStep(1);
    setFeeling(null);
    setText('');
    setSelectedAction(null);
  }, []);

  const handleStartWriting = useCallback(() => {
    setStep(3);
  }, []);

  const handleActionSelect = useCallback((action: Action) => {
    setSelectedAction(action);
    setText('');
    setStep(6);
  }, []);

  const handleShowActions = useCallback(() => {
    setStep(5);
  }, []);

  const handleFinishWritingAction = useCallback(() => {
    setStep(7);
  }, []);

  const handleBackToStep4 = useCallback(() => {
    setStep(4);
  }, []);

  const handleBackToActions = useCallback(() => {
    setStep(5);
  }, []);

  return {
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
  };
}
