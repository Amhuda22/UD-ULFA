import { create } from 'zustand'

export const initialProducts = []

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
