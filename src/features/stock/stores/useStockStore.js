import { create } from 'zustand'
import { getCurrentDateString } from '../../../shared/utils/dateUtils.js'

export const initialStockHistory = [
  {
    id: 1,
    date: getCurrentDateString(),
    product: 'Buku Tulis',
    type: 'Masuk',
    quantity: '+50',
    notes: 'Restock mingguan dari distributor',
  },
  {
    id: 2,
    date: getCurrentDateString(),
    product: 'Seragam SD',
    type: 'Masuk',
    quantity: '+14',
    notes: 'Tambahan stok ukuran M dan L',
  },
  {
    id: 3,
    date: getCurrentDateString(),
    product: 'Bolpoin',
    type: 'Masuk',
    quantity: '+70',
    notes: 'Masuk 7 lusin',
  },
  {
    id: 4,
    date: getCurrentDateString(),
    product: 'Kapas',
    type: 'Masuk',
    quantity: '+30',
    notes: 'Perlengkapan kematian',
  },
]

export const productOptions = [
  'Buku Tulis',
  'Bolpoin',
  'Pensil 2B',
  'Seragam SD',
  'Kain Kafan',
  'Kapas',
  'Buku Gambar',
  'Penghapus',
]

export const useStockStore = create((set) => ({
  history: initialStockHistory,
  searchQuery: '',
  selectedType: 'Semua', // 'Semua' | 'Masuk' | 'Keluar'
  form: {
    date: getCurrentDateString(),
    product: '',
    quantity: '0',
    notes: '',
  },

  setSearchQuery: (query) => set({ searchQuery: query }),
  setSelectedType: (type) => set({ selectedType: type }),

  updateFormField: (field, value) =>
    set((state) => ({
      form: {
        ...state.form,
        [field]: value,
      },
    })),

  resetForm: () =>
    set({
      form: {
        date: getCurrentDateString(),
        product: '',
        quantity: '0',
        notes: '',
      },
    }),

  addStockEntry: (entry) =>
    set((state) => ({
      history: [
        {
          id: Date.now(),
          date: entry.date,
          product: entry.product,
          type: entry.type,
          quantity: entry.type === 'Masuk' ? `+${entry.quantity}` : `-${entry.quantity}`,
          notes: entry.notes,
        },
        ...state.history,
      ],
      form: {
        date: getCurrentDateString(),
        product: '',
        quantity: '0',
        notes: '',
      },
    })),
}))
