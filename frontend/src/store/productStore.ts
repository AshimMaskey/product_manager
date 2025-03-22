import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

interface Product {
  name: string;
  price: number;
  image: string;
  _id?: string;
}

interface ProductStore {
  products: Product[];
  isAdding: boolean;
  setProducts: (products: Product[]) => void;
  createProduct: (newProduct: Product) => Promise<void>;
  getProduct: () => Promise<void>;
  deleteProduct: (productId: string) => Promise<void>;
  updateProduct: (product: Product) => Promise<void>;
}

export const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  isAdding: false,
  setProducts: (products) => set({ products }),
  createProduct: async (newProduct) => {
    set({ isAdding: true });
    try {
      const res = await axios.post("/api/products/", newProduct);
      set((state) => ({ products: [...state.products, res.data.data] }));
      toast.success("Product added!");
    } catch (error: any) {
      console.error(error.message);
      toast.error("Error Occurred!");
    } finally {
      set({ isAdding: false });
    }
  },
  getProduct: async () => {
    try {
      const res = await axios.get("/api/products/");
      set({ products: res.data.data });
    } catch (error: any) {
      console.error(error.message);
      toast.error("Error Occurred!");
    }
  },
  deleteProduct: async (productId) => {
    try {
      const res = await axios.delete(`/api/products/${productId}`);
      const { products } = get();
      const filteredProducts = products.filter(
        (product) => product._id !== res.data.data._id
      );
      set({ products: filteredProducts });
      toast.success("Product deleted successfully");
    } catch (error: any) {
      console.error(error.message);
      toast.error("Error Occurred!");
    }
  },
  updateProduct: async (product) => {
    try {
      const res = await axios.put(`/api/products/${product._id}`, product);
      set((state) => ({
        products: state.products.map((prodct) =>
          prodct._id === product._id ? res.data.data : prodct
        ),
      }));
      toast.success("Product updated successfully");
    } catch (error: any) {
      console.error(error.message);
      toast.error("Error Occurred!");
    }
  },
}));
