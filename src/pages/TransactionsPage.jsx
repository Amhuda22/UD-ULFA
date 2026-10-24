import { useTransactions } from '../features/transactions/hooks/useTransactions.js'
import DashboardSidebar from '../features/dashboard/components/DashboardSidebar.jsx'
import DashboardTopBar from '../features/dashboard/components/DashboardTopBar.jsx'
import TransactionCatalog from '../features/transactions/components/TransactionCatalog.jsx'
import TransactionPaymentForm from '../features/transactions/components/TransactionPaymentForm.jsx'
import TransactionTable from '../features/transactions/components/TransactionTable.jsx'
import TransactionSummaryCard from '../features/transactions/components/TransactionSummaryCard.jsx'
import TransactionReceiptModal from '../features/transactions/components/TransactionReceiptModal.jsx'
import '../features/transactions/styles/transactions.css'
import './DashboardPage.css'

export default function TransactionsPage() {
  const {
    viewMode,
    setViewMode,
    activeMenu,
    handleSelectMenu,
    handleLogout,
    catalogProducts,
    cartItems,
    totalAmount,
    totalDisplay,
    customer,
    setCustomer,
    paymentMethod,
    setPaymentMethod,
    searchQuery,
    setSearchQuery,
    paidAmount,
    paidAmountFormatted,
    handlePaidAmountChange,
    changeAmount,
    changeDisplay,
    removeCartItem,
    incrementQuantity,
    decrementQuantity,
    addCartItem,
    handleCheckout,
    handleCancel,
    isSuccessModalOpen,
    handleCloseSuccessModal,
  } = useTransactions()

  return (
    <div className={`dash-wrapper ${viewMode === 'tablet' ? 'wrapper-tablet-mode' : ''}`}>
      {/* Tablet Chassis Frame Shell */}
      <div className={`tablet-chassis ${viewMode === 'tablet' ? 'active' : 'headless'}`}>
        <div className="tablet-camera" aria-hidden="true" />
        <div className="tablet-speaker" aria-hidden="true" />

        {/* Layar Tablet */}
        <div className="dash-screen">
          {/* 1. Sidebar Navigasi Kiri (Dipertahankan identik sesuai permintaan user) */}
          <DashboardSidebar
            activeMenu={activeMenu}
            onSelectMenu={handleSelectMenu}
            onLogout={handleLogout}
          />

          {/* 2. Area Konten Utama Kanan */}
          <section className="dash-main">
            {/* Top Bar (Slogan & Tanggal Dinamis Hari Ini) */}
            <DashboardTopBar
              slogan="“Akan melayani dengan sepenuh hati”"
            />

            {/* Konten Halaman Transaksi Penjualan Sesuai Desain Screenshot 1 */}
            <div className="dash-content-body trx-content-body">
              {/* Judul Utama Halaman */}
              <div className="trx-top-header">
                <h1 className="trx-page-title">Transaksi Penjualan</h1>
              </div>

              {/* Area Split Dua Kolom: Katalog Produk (Kiri) & Keranjang Belanja (Kanan) */}
              <div className="trx-two-columns">
                {/* Kolom Kiri: Katalog Produk */}
                <TransactionCatalog
                  products={catalogProducts}
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                  onAddToCart={addCartItem}
                />

                {/* Kolom Kanan: Keranjang Belanja / Detail Transaksi */}
                <div className="trx-cart-column">
                  <h2 className="trx-section-title">Keranjang Belanja / Detail Transaksi</h2>

                  {/* Dropdown Pelanggan & Metode Pembayaran */}
                  <TransactionPaymentForm
                    customer={customer}
                    onCustomerChange={setCustomer}
                    paymentMethod={paymentMethod}
                    onPaymentMethodChange={setPaymentMethod}
                  />

                  {/* Tabel Daftar Belanja (Item, Jumlah dengan stepper, Subtotal, Aksi) */}
                  <TransactionTable
                    items={cartItems}
                    onDeleteItem={removeCartItem}
                    onIncrement={incrementQuantity}
                    onDecrement={decrementQuantity}
                  />

                  {/* Bagian Bawah: Uang Dibayar & Kembalian + Total & Tombol Aksi */}
                  <TransactionSummaryCard
                    totalDisplay={totalDisplay}
                    paidAmountFormatted={paidAmountFormatted}
                    onPaidAmountChange={handlePaidAmountChange}
                    changeDisplay={changeDisplay}
                    onCheckout={handleCheckout}
                    onCancel={handleCancel}
                    isDisabled={cartItems.length === 0}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 3. Modal Struk Transaksi / Sukses Pembayaran */}
          <TransactionReceiptModal
            isOpen={isSuccessModalOpen}
            onClose={handleCloseSuccessModal}
            cartItems={cartItems}
            totalDisplay={totalDisplay}
            totalAmount={totalAmount}
            customer={customer}
            paymentMethod={paymentMethod}
            paidAmount={paidAmount}
            changeAmount={changeAmount}
          />
        </div>
      </div>

      {/* Floating View Switcher Toggle */}
      <div className="view-toggle-bar">
        <button
          type="button"
          className={`toggle-btn ${viewMode === 'tablet' ? 'active' : ''}`}
          onClick={() => setViewMode('tablet')}
          title="Tampilan Mockup Tablet"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
            <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
          </svg>
          <span>Mockup Tablet</span>
        </button>
        <button
          type="button"
          className={`toggle-btn ${viewMode === 'fullscreen' ? 'active' : ''}`}
          onClick={() => setViewMode('fullscreen')}
          title="Tampilan Layar Penuh"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
          </svg>
          <span>Layar Penuh</span>
        </button>
      </div>
    </div>
  )
}
