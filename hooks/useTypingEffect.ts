"use client"

import { useState, useEffect, useRef } from 'react';

type TypingEffectOptions = {
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
};

export function useTypingEffect(words: string[], options: TypingEffectOptions = {}) {
  const { typingSpeed = 100, deletingSpeed = 50, pauseDuration = 1500 } = options;

  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex % words.length];
      
      if (isDeleting) {
        setText(current => current.substring(0, current.length - 1));
      } else {
        setText(current => currentWord.substring(0, current.length + 1));
      }

      if (!isDeleting && text === currentWord) {
        timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex(current => current + 1);
      }
    };

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    timeoutRef.current = setTimeout(handleTyping, speed);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return text;
}