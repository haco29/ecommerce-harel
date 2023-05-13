import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { CartProvider } from './contexts/CardContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CartProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </main>
          </BrowserRouter>
        </QueryClientProvider>
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;
