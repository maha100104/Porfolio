'use client';

import { useState, useEffect } from 'react';

export default function TypingEffect({ words, className = '' }: { words: string[], className?: string }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
          setTypingSpeed(100);
        } else {
          setIsDeleting(true);
          setTypingSpeed(1500); // Pause before deleting
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentWord.slice(0, currentText.length - 1));
          setTypingSpeed(50);
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(500); // Pause before typing next word
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
