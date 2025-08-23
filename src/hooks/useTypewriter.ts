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

// FIXED VERSION of your useMultiTypewriter hook
interface UseMultiTypewriterProps {
  texts: string[];
  speed?: number;          // typing speed per character
  delay?: number;          // initial delay before starting
  pauseDuration?: number;  // wait time after finishing a word
}

export const useMultiTypewriter = ({
  texts,
  speed = 50,
  delay = 0,
  pauseDuration = 1500,
}: UseMultiTypewriterProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    let timer: NodeJS.Timeout;

    const handleTyping = () => {
      if (!isDeleting && displayText.length < currentText.length) {
        // typing forward
        setDisplayText(currentText.slice(0, displayText.length + 1));
        timer = setTimeout(handleTyping, speed);
      } else if (!isDeleting && displayText.length === currentText.length) {
        // pause before deleting
        timer = setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && displayText.length > 0) {
        // deleting
        setDisplayText(currentText.slice(0, displayText.length - 1));
        timer = setTimeout(handleTyping, speed );
      } else if (isDeleting && displayText.length === 0) {
        // move to next word
        setIsDeleting(false); 
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }
    };

    timer = setTimeout(handleTyping, delay);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, texts, currentIndex, speed, pauseDuration, delay]);

  return { displayText, isTyping: !isDeleting };
};