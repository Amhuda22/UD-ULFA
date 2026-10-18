import { create } from 'zustand'

export const initialStockHistory = [
  {
    id: 1,
    date: '01-10-2026',
    product: 'Buku Tulis',
    type: 'Masuk',
    quantity: '+50',
    notes: 'Restock mingguan dari distributor',
  },
  {
    id: 2,
    date: '01-10-2026',
    product: 'Seragam SD',
    type: 'Masuk',
    quantity: '+14',
    notes: 'Tambahan stok ukuran M dan L',
  },
  {
    id: 3,
    date: '01-10-2026',
    product: 'Bolpoin',
    type: 'Masuk',
    quantity: '+70',
    notes: 'Masuk 7 lusin',
  },
  {
    id: 4,
    date: '01-10-2026',
    product: 'Kapas',
    type: 'Masuk',
    quantity: '+30',
    notes: 'Perlengkapan kematian',
  },
]

export const productOptions = [
  'Buku Tulis',
  'Bolpoin',
  'Seragam SD',
  'Kapas',
  'Pensil 2B',
  'Penghapus Joyko',
  'Baju Pramuka',
  'Kain Kafan Super',
]

export const useStockStore = create((set) => ({
  history: initialStockHistory,
  activeTab: 'Masuk', // 'Masuk' | 'Keluar'
  form: {
    date: '01-10-2026',
    product: '',
    quantity: '0',
    notes: '',
  },

  setActiveTab: (tab) => set({ activeTab: tab }),

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
        date: '01-10-2026',
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
        date: '01-10-2026',
        product: '',
        quantity: '0',
        notes: '',
      },
    })),
}))
