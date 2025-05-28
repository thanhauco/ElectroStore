import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowLeft, CreditCard } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import CartItem from '../components/CartItem';
import Button from '../components/ui/Button';

const CartPage: React.FC = () => {
  const { items, total, clearCart } = useCart();
  
  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Looks like you haven't added any items to your cart yet.</p>
          <Link to="/">
            <Button>
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">
                  Cart Items ({items.length})
                </h2>
              </div>
              
              <div>
                {items.map((item) => (
                  <div key={item.component.id} className="px-6">
                    <CartItem item={item} />
                  </div>
                ))}
              </div>
              
              <div className="px-6 py-4 flex justify-between items-center bg-gray-50">
                <Link to="/" className="text-blue-600 hover:text-blue-800 flex items-center">
                  <ArrowLeft className="h-4 w-4 mr-1" /> Continue Shopping
                </Link>
                <Button
                  variant="ghost"
                  onClick={clearCart}
                  className="text-red-600 hover:text-red-800"
                >
                  Clear Cart
                </Button>
              </div>
            </div>
          </div>
          
          {/* Order summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden sticky top-6">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">
                  Order Summary
                </h2>
              </div>
              
              <div className="px-6 py-4">
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900 font-medium">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-900 font-medium">
                    {total >= 50 ? 'Free' : '$4.99'}
                  </span>
                </div>
                <div className="flex justify-between py-4">
                  <span className="text-gray-900 font-medium">Total</span>
                  <span className="text-blue-600 text-xl font-bold">
                    ${(total >= 50 ? total : total + 4.99).toFixed(2)}
                  </span>
                </div>
                
                <Button
                  variant="primary"
                  fullWidth
                  size="lg"
                  className="mt-4 flex items-center justify-center gap-2"
                >
                  <CreditCard className="h-5 w-5" />
                  Checkout
                </Button>
                
                <div className="mt-4 text-xs text-gray-500 text-center">
                  Taxes calculated at checkout. Shipping calculated based on delivery address.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;