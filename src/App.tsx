import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { WishlistProvider } from './contexts/WishlistContext';
import Navbar from './components/ui/Navbar';
import HomePage from './pages/HomePage';
import ComponentDetail from './pages/ComponentDetail';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <WishlistProvider>
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/component/:id" element={<ComponentDetail />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/wishlist" element={<WishlistPage />} />
              </Routes>
            </main>
            <footer className="bg-gray-800 text-white py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between">
                  <div className="mb-8 md:mb-0">
                    <h3 className="text-xl font-bold mb-4">ElectroStore</h3>
                    <p className="text-gray-400 max-w-xs">
                      Your trusted source for quality electronic components since 2015.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-300 mb-3">Shop</h4>
                      <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white">All Products</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Featured</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">New Arrivals</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Deals</a></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-300 mb-3">About</h4>
                      <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white">Our Story</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-300 mb-3">Support</h4>
                      <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Shipping</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Returns</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                  <p className="text-gray-400 text-sm">
                    &copy; 2025 ElectroStore. All rights reserved.
                  </p>
                  <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className="text-gray-400 hover:text-white">
                      Terms
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Privacy
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Cookies
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </WishlistProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;