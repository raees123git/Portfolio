import { useState, useEffect } from 'react';

interface UseTypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
}

interface UseMultiTypewriterProps {
  texts: string[];
  speed?: number;
  delay?: number;
  pauseDuration?: number;
}

export const useTypewriter = ({ text, speed = 50, delay = 0 }: UseTypewriterProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const startTyping = () => {
      let i = 0;
      const typeChar = () => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
          timeout = setTimeout(typeChar, speed);
        } else {
          setIsComplete(true);
        }
      };
      typeChar();
    };

    const delayTimeout = setTimeout(startTyping, delay);

    return () => {
      clearTimeout(timeout);
      clearTimeout(delayTimeout);
    };
  }, [text, speed, delay]);

  return { displayText, isComplete };
};

export const useMultiTypewriter = ({ 
  texts, 
  speed = 50, 
  delay = 0, 
  pauseDuration = 2000 
}: UseMultiTypewriterProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const startCycle = () => {
      const currentText = texts[currentIndex];
      
      if (!isTyping && !isDeleting) {
        setIsTyping(true);
        typeText(currentText);
      }
    };

    const typeText = (text: string) => {
      let i = 0;
      const type = () => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
          timeout = setTimeout(type, speed);
        } else {
          setIsTyping(false);
          timeout = setTimeout(() => {
            setIsDeleting(true);
            deleteText();
          }, pauseDuration);
        }
      };
      type();
    };

    const deleteText = () => {
      const currentText = texts[currentIndex];
      let i = currentText.length;
      const deleteChar = () => {
        if (i > 0) {
          setDisplayText(currentText.slice(0, i - 1));
          i--;
          timeout = setTimeout(deleteChar, speed / 2);
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      };
      deleteChar();
    };

    const delayTimeout = setTimeout(startCycle, delay);

    return () => {
      clearTimeout(timeout);
      clearTimeout(delayTimeout);
    };
  }, [texts, currentIndex, isTyping, isDeleting, speed, delay, pauseDuration]);

  return { displayText, currentIndex, isTyping: isTyping || isDeleting };
};