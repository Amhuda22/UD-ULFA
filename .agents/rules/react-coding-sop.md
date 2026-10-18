# React Coding SOP

## Page
Page hanya bertugas menyusun tampilan.

Page dilarang:
- Fetch API langsung
- Import axios langsung
- Menulis business logic
- Validasi manual
- Membuat Zustand store
- Menaruh useEffect/useState/useReducer langsung

Page wajib:
- Menggunakan custom hook untuk logic
- Menggunakan component untuk tampilan

## Component
Component fokus untuk tampilan.

Component dilarang:
- Fetch API langsung
- Import axios langsung
- Validasi manual
- Business logic berat

## Custom Hook
Custom hook adalah tempat logic UI.

Hook boleh:
- useState
- useEffect
- useReducer
- Memanggil service
- Memanggil store

## Service
Service adalah tempat logic API.

Service boleh:
- axios
- fetch
- mapping request/response dasar

Service dilarang:
- JSX
- Logic tampilan

## Store
Global state wajib menggunakan Zustand.

Zustand create hanya boleh berada di:
- src/stores
- src/features/**/stores

## Validation
Validasi form wajib menggunakan schema.

Validasi boleh menggunakan:
- Zod
- Yup
- React Hook Form resolver

Validasi manual di page/component dilarang.
