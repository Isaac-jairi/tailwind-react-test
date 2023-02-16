import { DashBoardPage, WriteNowPage, EmailsPage, ContatosPage } from 'pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoardPage />} />
        <Route path="/dashboard" element={<DashBoardPage />} />
        <Route path="/contatos" element={<ContatosPage />} />
        <Route path="/emails" element={<EmailsPage />} />
        <Route path="/escrever-agora" element={<WriteNowPage />} />
      </Routes>
    </BrowserRouter>
  );
}
