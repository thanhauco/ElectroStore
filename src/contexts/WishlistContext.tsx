import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Component } from '../types';

interface WishlistContextType {
  items: Component[];
  addToWishlist: (component: Component) => void;
  removeFromWishlist: (componentId: string) => void;
  isInWishlist: (componentId: string) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

interface WishlistProviderProps {
  children: ReactNode;
}

export const WishlistProvider: React.FC<WishlistProviderProps> = ({ children }) => {
  const [items, setItems] = useState<Component[]>([]);

  const addToWishlist = (component: Component) => {
    setItems(currentItems => {
      if (!currentItems.find(item => item.id === component.id)) {
        return [...currentItems, component];
      }
      return currentItems;
    });
  };

  const removeFromWishlist = (componentId: string) => {
    setItems(currentItems => currentItems.filter(item => item.id !== componentId));
  };

  const isInWishlist = (componentId: string) => {
    return items.some(item => item.id === componentId);
  };

  return (
    <WishlistContext.Provider 
      value={{ 
        items, 
        addToWishlist, 
        removeFromWishlist, 
        isInWishlist 
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};