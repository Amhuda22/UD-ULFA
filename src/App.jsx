import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage.jsx'
import WelcomePage from './pages/WelcomePage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
import TransactionsPage from './pages/TransactionsPage.jsx'
import StockPage from './pages/StockPage.jsx'
import FinancePage from './pages/FinancePage.jsx'
import SettingsPage from './pages/SettingsPage.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rute Halaman Sapaan Awal (Splash / Welcome Screen) */}
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/sapaan" element={<Navigate to="/welcome" replace />} />
        <Route path="/splash" element={<Navigate to="/welcome" replace />} />

        {/* Rute Login */}
        <Route path="/login" element={<LoginPage />} />

        {/* Rute Dashboard */}
        <Route path="/dashboard" element={<DashboardPage />} />

        {/* Rute Produk */}
        <Route path="/produk" element={<ProductsPage />} />
        <Route path="/products" element={<Navigate to="/produk" replace />} />

        {/* Rute Transaksi */}
        <Route path="/transaksi" element={<TransactionsPage />} />
        <Route path="/transactions" element={<Navigate to="/transaksi" replace />} />

        {/* Rute Stok */}
        <Route path="/stok" element={<StockPage />} />
        <Route path="/stock" element={<Navigate to="/stok" replace />} />

        {/* Rute Keuangan */}
        <Route path="/keuangan" element={<FinancePage />} />
        <Route path="/finance" element={<Navigate to="/keuangan" replace />} />

        {/* Rute Pengaturan */}
        <Route path="/pengaturan" element={<SettingsPage />} />
        <Route path="/settings" element={<Navigate to="/pengaturan" replace />} />

        {/* Halaman utama '/' langsung menampilkan halaman awal (WelcomePage) */}
        <Route path="/" element={<WelcomePage />} />

        {/* Fallback rute 404 / tidak dikenal */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
