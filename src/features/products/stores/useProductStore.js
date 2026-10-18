import { create } from 'zustand'

export const initialProducts = [
  {
    id: 1,
    no: '1.',
    name: 'Buku Tulis',
    category: 'ATK',
    price: 3000,
    priceDisplay: 'Rp 3.000',
    stock: 57,
    image: '/products/buku-tulis.png',
  },
  {
    id: 2,
    no: '2.',
    name: 'Kain Kafan',
    category: 'Perlengkapan kematian',
    price: 45000,
    priceDisplay: 'Rp 45.000',
    stock: 23,
    image: '/products/kain-kafan.png',
  },
  {
    id: 3,
    no: '3.',
    name: 'Seragam SD',
    category: 'Perlengkapan Sekolah',
    price: 125000,
    priceDisplay: 'Rp 125.000',
    stock: 18,
    image: '/products/seragam-sd.png',
  },
  {
    id: 4,
    no: '4.',
    name: 'Bolpoin',
    category: 'ATK',
    price: 5000,
    priceDisplay: 'Rp 5.000',
    stock: 180,
    image: '/products/bolpoin.png',
  },
  {
    id: 5,
    no: '5.',
    name: 'Kapur barus',
    category: 'Perlengkapan kematian',
    price: 3000,
    priceDisplay: 'Rp 3.000',
    stock: 57,
    image: '/products/kapur-barus.png',
  },
  {
    id: 6,
    no: '6.',
    name: 'kapas',
    category: 'Perlengkapan kematian',
    price: 5000,
    priceDisplay: 'Rp 5.000',
    stock: 30,
    image: '/products/kapas.png',
  },
  {
    id: 7,
    no: '7.',
    name: 'Nisan Besar',
    category: 'Perlengkapan kematian',
    price: 5000,
    priceDisplay: 'Rp 5.000',
    stock: 30,
    image: '/products/nisan-besar.png',
  },
]

export const useProductStore = create((set) => ({
  products: initialProducts,
  searchQuery: '',
  selectedCategory: 'Semua',

  setSearchQuery: (query) => set({ searchQuery: query }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),

  deleteProduct: (id) =>
    set((state) => ({
      products: state.products.filter((p) => p.id !== id),
    })),

  addProduct: (newProduct) =>
    set((state) => ({
      products: [
        ...state.products,
        {
          ...newProduct,
          id: Date.now(),
          no: `${state.products.length + 1}.`,
        },
      ],
    })),
}))
