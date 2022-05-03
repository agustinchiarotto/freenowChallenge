import { QueryClient, QueryClientProvider } from 'react-query';

import AppRoutes from './routes';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/common/header/Header';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
