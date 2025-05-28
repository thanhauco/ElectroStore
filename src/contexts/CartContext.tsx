import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Component, CartItem } from '../types';

interface CartContextType {
  items: CartItem[];
  addToCart: (component: Component, quantity?: number) => void;
  removeFromCart: (componentId: string) => void;
  updateQuantity: (componentId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (component: Component, quantity = 1) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.component.id === component.id);
      
      if (existingItem) {
        return currentItems.map(item => 
          item.component.id === component.id 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      }
      
      return [...currentItems, { component, quantity }];
    });
  };

  const removeFromCart = (componentId: string) => {
    setItems(currentItems => currentItems.filter(item => item.component.id !== componentId));
  };

  const updateQuantity = (componentId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(componentId);
      return;
    }
    
    setItems(currentItems => 
      currentItems.map(item => 
        item.component.id === componentId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const total = items.reduce(
    (sum, item) => sum + (item.component.price * item.quantity), 
    0
  );

  const itemCount = items.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider 
      value={{ 
        items, 
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        clearCart, 
        total,
        itemCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};