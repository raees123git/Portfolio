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
export const useMultiTypewriter = ({ 
  texts, 
  speed = 50, 
  delay = 0, 
  pauseDuration = 2000 
}: UseMultiTypewriterProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (texts.length === 0) return;

    let typeTimeout: NodeJS.Timeout;
    let pauseTimeout: NodeJS.Timeout;
    let deleteTimeout: NodeJS.Timeout;
    let cycleTimeout: NodeJS.Timeout;

    const startCycle = () => {
      setIsVisible(true);
      const currentText = texts[currentIndex];
      
      // Type the text
      let charIndex = 0;
      const typeText = () => {
        if (charIndex < currentText.length) { // FIXED: Changed <= to <
          setDisplayText(currentText.slice(0, charIndex + 1)); // FIXED: Added +1
          charIndex++;
          typeTimeout = setTimeout(typeText, speed);
        } else {
          // Pause, then delete
          pauseTimeout = setTimeout(() => {
            let deleteIndex = currentText.length;
            const deleteText = () => {
              if (deleteIndex > 0) { // FIXED: Changed >= to >
                deleteIndex--;
                setDisplayText(currentText.slice(0, deleteIndex));
                deleteTimeout = setTimeout(deleteText, speed / 2);
              } else {
                // Move to next text
                setDisplayText(''); // FIXED: Clear display text
                cycleTimeout = setTimeout(() => {
                  setCurrentIndex((prev) => (prev + 1) % texts.length);
                }, 200);
              }
            };
            deleteText();
          }, pauseDuration);
        }
      };
      
      typeText();
    };

    const initialDelay = setTimeout(startCycle, delay);

    return () => {
      clearTimeout(typeTimeout);
      clearTimeout(pauseTimeout);
      clearTimeout(deleteTimeout);
      clearTimeout(cycleTimeout);
      clearTimeout(initialDelay);
    };
  }, [currentIndex, texts, speed, delay, pauseDuration]);

  return { 
    displayText, 
    currentIndex, 
    isTyping: isVisible 
  };
};
