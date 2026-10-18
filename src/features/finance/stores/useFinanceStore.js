import { create } from 'zustand'

export const initialFinanceTransactions = [
  {
    id: 1,
    date: '01-10-2026',
    description: 'Penjualan',
    income: 'Rp 1.250.000',
    expense: '-',
    balance: 'Rp 1.250.000',
  },
  {
    id: 2,
    date: '02-10-2026',
    description: 'Pembelian Stok',
    income: '-',
    expense: 'Rp 500.000',
    balance: 'Rp 750.000',
  },
  {
    id: 3,
    date: '03-10-2026',
    description: 'Penjualan',
    income: 'Rp 900.000',
    expense: '-',
    balance: 'Rp 1.730.000',
  },
]

export const financeKpiData = {
  Mingguan: {
    income: 'Rp 9.678.000',
    expense: 'Rp 5.695.000',
    netProfit: 'Rp 3.983.000',
    periodOptions: ['01-05 Oktober 2026', '06-12 Oktober 2026', '13-19 Oktober 2026', '20-26 Oktober 2026'],
  },
  Bulanan: {
    income: 'Rp 38.712.000',
    expense: 'Rp 22.780.000',
    netProfit: 'Rp 15.932.000',
    periodOptions: ['Oktober 2026', 'September 2026', 'Agustus 2026', 'Juli 2026'],
  },
  Tahunan: {
    income: 'Rp 464.544.000',
    expense: 'Rp 273.360.000',
    netProfit: 'Rp 191.184.000',
    periodOptions: ['Tahun 2026', 'Tahun 2025', 'Tahun 2024'],
  },
}

export const useFinanceStore = create((set) => ({
  periodTab: 'Mingguan', // 'Mingguan' | 'Bulanan' | 'Tahunan'
  selectedPeriod: '01-05 Oktober 2026',
  transactions: initialFinanceTransactions,

  setPeriodTab: (tab) =>
    set({
      periodTab: tab,
      selectedPeriod: financeKpiData[tab].periodOptions[0],
    }),

  setSelectedPeriod: (period) => set({ selectedPeriod: period }),
}))
