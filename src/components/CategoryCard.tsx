import React from 'react';
import { Link } from 'react-router-dom';
import Card from './ui/Card';

interface CategoryCardProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ 
  id, 
  name, 
  description, 
  imageUrl 
}) => {
  return (
    <Link to={`/category/${id}`}>
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
        <div className="h-40 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{name}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        </div>
      </Card>
    </Link>
  );
};

export default CategoryCard;