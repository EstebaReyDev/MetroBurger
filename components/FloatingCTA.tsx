
import React from 'react';
import { Button } from './Button';

export const FloatingCTA: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full p-4 z-50 md:hidden bg-gradient-to-t from-black to-transparent">
      <Button 
        variant="primary" 
        fullWidth 
        size="lg" 
        onClick={onClick}
        className="animate-vibe"
      >
        LA QUIERO AHORA
      </Button>
    </div>
  );
};
