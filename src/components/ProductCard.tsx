import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { Component } from '../types';
import { useCart } from '../contexts/CartContext';
import Button from './ui/Button';
import Card, { CardBody, CardFooter } from './ui/Card';
import Badge from './ui/Badge';

interface ProductCardProps {
  component: Component;
}

const ProductCard: React.FC<ProductCardProps> = ({ component }) => {
  const { addToCart } = useCart();
  
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
      <Link to={`/component/${component.id}`}>
        <div className="relative h-48 overflow-hidden">
          <img 
            src={component.imageUrl} 
            alt={component.name} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          {component.stock < 10 && component.stock > 0 && (
            <Badge variant="warning\" className="absolute top-2 right-2">
              Low Stock
            </Badge>
          )}
          {component.stock === 0 && (
            <Badge variant="danger" className="absolute top-2 right-2">
              Out of Stock
            </Badge>
          )}
        </div>
      </Link>
      
      <CardBody>
        <div className="flex justify-between items-start mb-2">
          <Link to={`/component/${component.id}`} className="block">
            <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
              {component.name}
            </h3>
          </Link>
        </div>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center text-amber-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="ml-1 text-sm font-medium">{component.rating}</span>
          </div>
          <Badge variant="primary" className="ml-2">
            {component.category}
          </Badge>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {component.description}
        </p>
      </CardBody>
      
      <CardFooter className="flex items-center justify-between">
        <div className="text-lg font-bold text-gray-900">
          ${component.price.toFixed(2)}
        </div>
        
        <Button 
          variant="primary" 
          size="sm"
          onClick={() => addToCart(component)}
          disabled={component.stock === 0}
          className="flex items-center gap-1"
        >
          <ShoppingCart className="h-4 w-4" />
          <span>Add</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;