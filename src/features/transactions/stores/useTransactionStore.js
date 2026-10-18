import { create } from 'zustand'

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
]

export const useTransactionStore = create((set) => ({
  cartItems: initialCartItems,
  customer: 'Umum',
  paymentMethod: 'Tunai',
  searchQuery: '',

  setSearchQuery: (query) => set({ searchQuery: query }),
  setCustomer: (customer) => set({ customer }),
  setPaymentMethod: (method) => set({ paymentMethod: method }),

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

  resetCart: () =>
    set({
      cartItems: initialCartItems,
      customer: 'Umum',
      paymentMethod: 'Tunai',
      searchQuery: '',
    }),
}))
