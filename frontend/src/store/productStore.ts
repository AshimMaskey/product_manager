import {create} from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

interface Product{
	name:string,
	price:number,
	image:string,
	_id:string,
}

interface ProductStore{
	products:Product[],
	setProducts:(products:Product[])=>void,
	createProduct:(newProduct:Product)=>Promise<void>,
	getProduct:()=>Promise<void>,
	deleteProduct:(productId:string)=>Promise<void>
}


export const useProductStore=create<ProductStore>((set,get)=>({
	products:[],
	setProducts:(products)=> set({products}),
	createProduct:async(newProduct)=>{
		try {
			const res=await axios.post("/api/products/", newProduct);
			set((state)=>({products:[...state.products,res.data.data]}));
			toast.success("Product added!");
		} catch (error:any) {
			console.error(error.message);
			toast.error("Error Occurred!");
		}
	},
	getProduct:async()=>{
		try{
			const res=await axios.get("/api/products/");
			set({products:res.data.data});
		}catch(error:any){
			console.error(error.message);
			toast.error("Error Occurred!");
		}
	},
	deleteProduct:async(productId)=>{
		try{
			const res=await axios.delete(`/api/products/${productId}`);
			const {products}=get();
			const filteredProducts=products.filter((product)=>product._id!==res.data.data._id);
			set({products:filteredProducts});
			toast.success("Product deleted successfully");			
		}
		catch(error:any){
			console.error(error.message);
			toast.error("Error Occurred!");
		}
	}
}));