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
    image: '/products/buku-tulis.jpg',
  },
  {
    id: 2,
    no: '2.',
    name: 'Kain Kafan',
    category: 'Perlengkapan Kematian',
    price: 45000,
    priceDisplay: 'Rp 45.000',
    stock: 23,
    image: '/products/kain-kafan.jpg',
  },
  {
    id: 3,
    no: '3.',
    name: 'Seragam SD',
    category: 'Perlengkapan Sekolah',
    price: 125000,
    priceDisplay: 'Rp 125.000',
    stock: 18,
    image: '/products/seragam-sd.jpg',
  },
  {
    id: 4,
    no: '4.',
    name: 'Bolpoin',
    category: 'ATK',
    price: 5000,
    priceDisplay: 'Rp 5.000',
    stock: 180,
    image: '/products/bolpoin.jpg',
  },
  {
    id: 5,
    no: '5.',
    name: 'Kapur Barus',
    category: 'Perlengkapan Kematian',
    price: 3000,
    priceDisplay: 'Rp 3.000',
    stock: 57,
    image: '/products/kapur-barus.jpg',
  },
  {
    id: 6,
    no: '6.',
    name: 'Kapas',
    category: 'Perlengkapan Kematian',
    price: 5000,
    priceDisplay: 'Rp 5.000',
    stock: 30,
    image: '/products/kapas.jpg',
  },
  {
    id: 7,
    no: '7.',
    name: 'Nisan Besar',
    category: 'Perlengkapan Kematian',
    price: 5000,
    priceDisplay: 'Rp 5.000',
    stock: 30,
    image: '/products/nisan-besar.jpg',
  },
  {
    id: 8,
    no: '8.',
    name: 'Pensil 2B',
    category: 'ATK',
    price: 2500,
    priceDisplay: 'Rp 2.500',
    stock: 75,
    image: '/products/pensil-2b.jpg',
  },
  {
    id: 9,
    no: '9.',
    name: 'Penghapus Joyko',
    category: 'ATK',
    price: 2000,
    priceDisplay: 'Rp 2.000',
    stock: 50,
    image: '/products/penghapus-joyko.jpg',
  },
  {
    id: 10,
    no: '10.',
    name: 'Penggaris 30cm',
    category: 'ATK',
    price: 4000,
    priceDisplay: 'Rp 4.000',
    stock: 40,
    image: '/products/penggaris-30cm.jpg',
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

  updateProduct: (updatedProduct) =>
    set((state) => ({
      products: state.products.map((p) =>
        p.id === updatedProduct.id ? { ...p, ...updatedProduct } : p
      ),
    })),

  addProduct: (newProduct) =>
    set((state) => ({
      products: [
        {
          ...newProduct,
          id: Date.now(),
          createdAt: Date.now(),
        },
        ...state.products,
      ],
    })),
}))
