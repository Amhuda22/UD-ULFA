import { z } from 'zod'

export const addProductSchema = z.object({
  name: z.string().trim().min(1, 'Nama produk wajib diisi'),
  category: z
    .string()
    .trim()
    .min(1, 'Pilih kategori produk')
    .refine((val) => val !== 'Pilih Kategori', 'Kategori produk wajib dipilih'),
  price: z
    .string()
    .trim()
    .min(1, 'Harga wajib diisi')
    .refine((val) => !isNaN(Number(val.replace(/\D/g, ''))) && Number(val.replace(/\D/g, '')) > 0, {
      message: 'Harga harus berupa angka valid di atas 0',
    }),
  stock: z
    .string()
    .optional()
    .refine((val) => !val || (!isNaN(Number(val)) && Number(val) >= 0), {
      message: 'Stok harus berupa angka minimal 0',
    }),
  description: z.string().optional(),
  image: z.string().optional(),
})
