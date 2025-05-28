import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Heart, ChevronRight, Star, Shield, Truck, Clock } from 'lucide-react';
import { components } from '../data/components';
import { Component } from '../types';
import { useCart } from '../contexts/CartContext';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import ProductCard from '../components/ProductCard';

const ComponentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [component, setComponent] = useState<Component | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('description');
  const { addToCart } = useCart();
  
  const [relatedProducts, setRelatedProducts] = useState<Component[]>([]);

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      const foundComponent = components.find(comp => comp.id === id) || null;
      setComponent(foundComponent);
      
      if (foundComponent) {
        // Find related products in the same category
        const related = components
          .filter(comp => comp.category === foundComponent.category && comp.id !== foundComponent.id)
          .slice(0, 3);
        setRelatedProducts(related);
      }
      
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [id]);

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-300 rounded w-1/4 mb-8"></div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 bg-gray-300 h-96 rounded"></div>
            <div className="md:w-1/2">
              <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/4 mb-6"></div>
              <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-6"></div>
              <div className="h-10 bg-gray-300 rounded w-full mb-4"></div>
              <div className="h-10 bg-gray-300 rounded w-full"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!component) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Component Not Found</h2>
        <p className="text-gray-600 mb-6">Sorry, we couldn't find the component you're looking for.</p>
        <Link to="/">
          <Button>Return to Home</Button>
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(component, quantity);
  };

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          <li>
            <Link to="/" className="hover:text-gray-900">Home</Link>
          </li>
          <li className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link to="/categories" className="hover:text-gray-900">Categories</Link>
          </li>
          <li className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link to={`/category/${component.category.toLowerCase()}`} className="hover:text-gray-900">
              {component.category}
            </Link>
          </li>
          <li className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-gray-900 font-medium">{component.name}</span>
          </li>
        </ol>
      </nav>

      {/* Product section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product image */}
          <div className="md:w-1/2">
            <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-md">
              <img 
                src={component.imageUrl} 
                alt={component.name} 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Product details */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{component.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center text-amber-500">
                <Star className="h-5 w-5 fill-current" />
                <span className="ml-1 text-sm font-medium">{component.rating}</span>
              </div>
              <span className="mx-2 text-gray-400">|</span>
              <Badge variant="primary">
                {component.category}
              </Badge>
              <span className="mx-2 text-gray-400">|</span>
              <span className="text-gray-600 text-sm">
                SKU: {component.id}
              </span>
            </div>

            <div className="text-2xl font-bold text-gray-900 mb-4">
              ${component.price.toFixed(2)}
            </div>

            <p className="text-gray-600 mb-6">
              {component.description}
            </p>

            <div className="border-t border-b border-gray-200 py-4 mb-6">
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <Shield className="h-4 w-4 mr-2 text-green-500" />
                <span>1 Year Warranty</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <Truck className="h-4 w-4 mr-2 text-blue-500" />
                <span>Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="h-4 w-4 mr-2 text-blue-500" />
                <span>Same day dispatch for orders before 2pm</span>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Quantity
              </label>
              <div className="flex items-center">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="border border-gray-300 rounded-l-md p-2 hover:bg-gray-100"
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  max={component.stock}
                  value={quantity}
                  onChange={(e) => setQuantity(Math.min(component.stock, Math.max(1, parseInt(e.target.value))))}
                  className="border-t border-b border-gray-300 p-2 w-16 text-center focus:outline-none"
                />
                <button
                  onClick={() => setQuantity(Math.min(component.stock, quantity + 1))}
                  className="border border-gray-300 rounded-r-md p-2 hover:bg-gray-100"
                  disabled={quantity >= component.stock}
                >
                  +
                </button>
                <span className="ml-4 text-sm text-gray-500">
                  {component.stock} available
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="primary"
                size="lg"
                fullWidth
                onClick={handleAddToCart}
                disabled={component.stock === 0}
                className="flex items-center justify-center gap-2"
              >
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="lg"
                fullWidth
                className="flex items-center justify-center gap-2"
              >
                <Heart className="h-5 w-5" />
                Add to Wishlist
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('description')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'description'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab('specifications')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'specifications'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Specifications
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'reviews'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Reviews
            </button>
          </nav>
        </div>

        <div className="py-6">
          {activeTab === 'description' && (
            <div className="prose max-w-none">
              <p>{component.description}</p>
              <p>
                This {component.name} from {component.manufacturer} is designed to provide
                reliable performance for a variety of electronic projects. Whether you're a hobbyist,
                student, or professional engineer, this component offers the quality and 
                functionality you need.
              </p>
              <p>
                All our components are sourced directly from authorized distributors or
                manufacturers to ensure authenticity and reliability.
              </p>
            </div>
          )}

          {activeTab === 'specifications' && (
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <tbody className="divide-y divide-gray-200">
                  {Object.entries(component.specs).map(([key, value]) => (
                    <tr key={key}>
                      <td className="py-4 pr-6 text-sm font-medium text-gray-900 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </td>
                      <td className="py-4 pl-6 text-sm text-gray-500">
                        {value.toString()}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td className="py-4 pr-6 text-sm font-medium text-gray-900">
                      Manufacturer
                    </td>
                    <td className="py-4 pl-6 text-sm text-gray-500">
                      {component.manufacturer}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-6 text-sm font-medium text-gray-900">
                      Category
                    </td>
                    <td className="py-4 pl-6 text-sm text-gray-500">
                      {component.category}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div>
              <div className="flex items-center mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(component.rating)
                          ? 'text-amber-500 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="ml-2 text-sm text-gray-700">
                  Based on customer reviews
                </p>
              </div>

              <div className="space-y-6">
                <div className="border-t border-b border-gray-200 py-6">
                  <div className="flex justify-between mb-2">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">John D.</h4>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < 5 ? 'text-amber-500 fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <time className="text-sm text-gray-500">3 months ago</time>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Excellent quality component. Works exactly as described and arrived quickly.
                    I've used it in several projects already with great results.
                  </p>
                </div>

                <div className="border-b border-gray-200 py-6">
                  <div className="flex justify-between mb-2">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Sarah M.</h4>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < 4 ? 'text-amber-500 fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <time className="text-sm text-gray-500">1 month ago</time>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Good component with detailed documentation. Shipping was fast and the packaging was secure.
                    Would buy again.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related products section */}
      {relatedProducts.length > 0 && (
        <div className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} component={relatedProduct} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComponentDetail;