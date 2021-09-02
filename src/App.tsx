import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import Modal from 'react-modal';
import { GlobalStyle } from './styles/global';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionProvider } from './hooks/useTransactions';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactonModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactonModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactonModalOpen(false);
  }

  return (
    <TransactionProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />      
      <NewTransactionModal  
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionProvider>
  );
}
