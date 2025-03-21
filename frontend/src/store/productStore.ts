import {create} from "zustand";

interface Product{
	name:string,
	price:number,
	image:string
}

interface ProductStore{
	products:Product[],
	setProducts:(products:Product[])=>void
}


export const useProductStore=create<ProductStore>((set)=>({
	products:[],
	setProducts:(products)=> set({products}),
}));