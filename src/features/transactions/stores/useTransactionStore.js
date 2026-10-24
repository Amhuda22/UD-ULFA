import { create } from 'zustand'

export const initialCatalogProducts = [
  {
    id: 1,
    name: 'Buku Tulis',
    price: 3000,
    priceDisplay: 'Rp 3.000',
    image: '/products/buku-tulis.jpg',
  },
  {
    id: 2,
    name: 'Bolpoin',
    price: 5000,
    priceDisplay: 'Rp 5.000',
    image: '/products/bolpoin.jpg',
  },
  {
    id: 3,
    name: 'Seragam SD',
    price: 125000,
    priceDisplay: 'Rp 125.000',
    image: '/products/seragam-sd.jpg',
  },
  {
    id: 4,
    name: 'Kapas',
    price: 5000,
    priceDisplay: 'Rp 5.000',
    image: '/products/kapas.jpg',
  },
  {
    id: 5,
    name: 'Pensil 2B',
    price: 2500,
    priceDisplay: 'Rp 2.500',
    image: '/products/pensil-2b.jpg',
  },
  {
    id: 6,
    name: 'Penghapus Joyko',
    price: 2000,
    priceDisplay: 'Rp 2.000',
    image: '/products/penghapus-joyko.jpg',
  },
  {
    id: 7,
    name: 'Penggaris 30cm',
    price: 4000,
    priceDisplay: 'Rp 4.000',
    image: '/products/penggaris-30cm.jpg',
  },
]

export const initialCartItems = [
  {
    id: 1,
    no: '1.',
    name: 'Buku Tulis',
    price: 3000,
    priceDisplay: 'Rp 3.000',
    quantity: 4,
    subtotal: 12000,
    subtotalDisplay: 'Rp 12.000',
  },
  {
    id: 2,
    no: '2.',
    name: 'Bolpoin',
    price: 5000,
    priceDisplay: 'Rp 5.000',
    quantity: 2,
    subtotal: 10000,
    subtotalDisplay: 'Rp 10.000',
  },
  {
    id: 3,
    no: '3.',
    name: 'Seragam SD',
    price: 125000,
    priceDisplay: 'Rp 125.000',
    quantity: 1,
    subtotal: 125000,
    subtotalDisplay: 'Rp 125.000',
  },
  {
    id: 4,
    no: '4.',
    name: 'Kapas',
    price: 5000,
    priceDisplay: 'Rp 5.000',
    quantity: 1,
    subtotal: 5000,
    subtotalDisplay: 'Rp 5.000',
  },
  {
    id: 5,
    no: '5.',
    name: 'Pensil 2B',
    price: 2500,
    priceDisplay: 'Rp 2.500',
    quantity: 2,
    subtotal: 5000,
    subtotalDisplay: 'Rp 5.000',
  },
  {
    id: 6,
    no: '6.',
    name: 'Penghapus Joyko',
    price: 2000,
    priceDisplay: 'Rp 2.000',
    quantity: 3,
    subtotal: 6000,
    subtotalDisplay: 'Rp 6.000',
  },
  {
    id: 7,
    no: '7.',
    name: 'Penggaris 30cm',
    price: 4000,
    priceDisplay: 'Rp 4.000',
    quantity: 1,
    subtotal: 4000,
    subtotalDisplay: 'Rp 4.000',
  },
  {
    id: 8,
    no: '8.',
    name: 'Tipe-X Kertas',
    price: 6000,
    priceDisplay: 'Rp 6.000',
    quantity: 2,
    subtotal: 12000,
    subtotalDisplay: 'Rp 12.000',
  },
  {
    id: 9,
    no: '9.',
    name: 'Spidol Snowman',
    price: 8500,
    priceDisplay: 'Rp 8.500',
    quantity: 2,
    subtotal: 17000,
    subtotalDisplay: 'Rp 17.000',
  },
  {
    id: 10,
    no: '10.',
    name: 'Rautan Pensil',
    price: 3000,
    priceDisplay: 'Rp 3.000',
    quantity: 1,
    subtotal: 3000,
    subtotalDisplay: 'Rp 3.000',
  },
  {
    id: 11,
    no: '11.',
    name: 'Kertas HVS A4',
    price: 45000,
    priceDisplay: 'Rp 45.000',
    quantity: 1,
    subtotal: 45000,
    subtotalDisplay: 'Rp 45.000',
  },
  {
    id: 12,
    no: '12.',
    name: 'Map Folio',
    price: 2000,
    priceDisplay: 'Rp 2.000',
    quantity: 5,
    subtotal: 10000,
    subtotalDisplay: 'Rp 10.000',
  },
]

export const useTransactionStore = create((set) => ({
  catalogProducts: initialCatalogProducts,
  cartItems: initialCartItems,
  customer: 'Umum',
  paymentMethod: 'Tunai',
  searchQuery: '',
  paidAmount: 300000,

  setSearchQuery: (query) => set({ searchQuery: query }),
  setCustomer: (customer) => set({ customer }),
  setPaymentMethod: (method) => set({ paymentMethod: method }),
  setPaidAmount: (amount) => set({ paidAmount: amount }),

  removeCartItem: (id) =>
    set((state) => {
      const updated = state.cartItems
        .filter((item) => item.id !== id)
        .map((item, index) => ({
          ...item,
          no: `${index + 1}.`,
        }))
      return { cartItems: updated }
    }),

  updateQuantity: (id, newQty) =>
    set((state) => {
      const qty = Math.max(1, Number(newQty) || 1)
      const updated = state.cartItems.map((item) => {
        if (item.id === id) {
          const subtotal = item.price * qty
          return {
            ...item,
            quantity: qty,
            subtotal,
            subtotalDisplay: `Rp ${subtotal.toLocaleString('id-ID')}`,
          }
        }
        return item
      })
      return { cartItems: updated }
    }),

  incrementQuantity: (id) =>
    set((state) => {
      const updated = state.cartItems.map((item) => {
        if (item.id === id) {
          const qty = item.quantity + 1
          const subtotal = item.price * qty
          return {
            ...item,
            quantity: qty,
            subtotal,
            subtotalDisplay: `Rp ${subtotal.toLocaleString('id-ID')}`,
          }
        }
        return item
      })
      return { cartItems: updated }
    }),

  decrementQuantity: (id) =>
    set((state) => {
      const updated = state.cartItems.map((item) => {
        if (item.id === id) {
          const qty = Math.max(1, item.quantity - 1)
          const subtotal = item.price * qty
          return {
            ...item,
            quantity: qty,
            subtotal,
            subtotalDisplay: `Rp ${subtotal.toLocaleString('id-ID')}`,
          }
        }
        return item
      })
      return { cartItems: updated }
    }),

  addCartItem: (product) =>
    set((state) => {
      const existing = state.cartItems.find((item) => item.id === product.id)
      if (existing) {
        const qty = existing.quantity + 1
        const subtotal = existing.price * qty
        return {
          cartItems: state.cartItems.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantity: qty,
                  subtotal,
                  subtotalDisplay: `Rp ${subtotal.toLocaleString('id-ID')}`,
                }
              : item
          ),
        }
      }

      const qty = 1
      const subtotal = product.price * qty
      const newItem = {
        id: product.id || Date.now(),
        no: `${state.cartItems.length + 1}.`,
        name: product.name,
        price: product.price,
        priceDisplay: `Rp ${product.price.toLocaleString('id-ID')}`,
        quantity: qty,
        subtotal,
        subtotalDisplay: `Rp ${subtotal.toLocaleString('id-ID')}`,
      }

      return { cartItems: [...state.cartItems, newItem] }
    }),

  cancelTransaction: () =>
    set({
      cartItems: [],
      customer: 'Umum',
      paymentMethod: 'Tunai',
      paidAmount: 0,
      searchQuery: '',
    }),

  resetCart: () =>
    set({
      cartItems: initialCartItems,
      customer: 'Umum',
      paymentMethod: 'Tunai',
      paidAmount: 300000,
      searchQuery: '',
    }),
}))
