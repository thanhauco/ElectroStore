import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../types';
import { useCart } from '../contexts/CartContext';
import Button from './ui/Button';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();
  const { component, quantity } = item;
  
  return (
    <div className="flex items-center py-4 border-b border-gray-200">
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
        <img
          src={component.imageUrl}
          alt={component.name}
          className="h-full w-full object-cover object-center"
        />
      </div>
      
      <div className="ml-4 flex flex-1 flex-col">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <h3>{component.name}</h3>
          <p className="ml-4">${(component.price * quantity).toFixed(2)}</p>
        </div>
        <p className="mt-1 text-sm text-gray-500 line-clamp-1">{component.description}</p>
        
        <div className="flex items-center justify-between text-sm mt-2">
          <div className="flex items-center">
            <Button
              variant="outline"
              size="sm"
              className="p-1 h-8 w-8"
              onClick={() => updateQuantity(component.id, quantity - 1)}
            >
              <Minus className="h-3 w-3" />
            </Button>
            
            <span className="mx-2 w-8 text-center">{quantity}</span>
            
            <Button
              variant="outline"
              size="sm"
              className="p-1 h-8 w-8"
              onClick={() => updateQuantity(component.id, quantity + 1)}
              disabled={quantity >= component.stock}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            className="text-red-500 hover:text-red-700 p-1"
            onClick={() => removeFromCart(component.id)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;