import create from 'zustand'

export const useStore = create((set) => ({
    data: [],
    setData: (json) => set({data:json}),
    products: [],
    addProduct: (json) => set({products:json}),
}
))