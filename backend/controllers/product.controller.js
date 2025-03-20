import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const handleShowProduct=async(req,res)=>{
	try {
		const products=await Product.find({});
		res.status(200).json({success:true, data:products});		
	} catch (error) {
		console.error(`Error in product show controller: ${error.message}`);
		res.status(500).json({success:false, message:"Internal server error"});
	}
}

export const handleCreateProduct=async(req,res)=>{
	const {name, price, image}=req.body;
	if(!name || !price || !image) return res.status(400).json({success:false, message:"All fields are required."});

	const newProduct=new Product({
		name,
		price,
		image,
	});

	try{
		await newProduct.save();
		res.status(201).json({success:true, data:newProduct});
	}catch(error){
		console.error(`Error in product create controller: ${error.message}`);
		res.status(500).json({success:false, message:"Internal server error"});
	}
}

export const handleDeleteProduct=async(req,res)=>{
	const {id}=req.params;
	
	try {
		const deletedDocument=await Product.findByIdAndDelete(id);
		if(!deletedDocument) return res.status(404).json({success:false, message:"Product doesn't exist"});
		res.status(200).json({success:true, data: deletedDocument});
	} catch (error) {
		console.error(`Error in product delete controller: ${error.message}`);
		res.status(500).json({success:false, message:"Internal server error"});
	}
}

export const handleUpdateProduct=async(req,res)=>{
	const {id:productId} = req.params;
	const product=req.body;

	if(!mongoose.Types.ObjectId.isValid(productId)) return res.status(404).json({success:false, message: "Product id does't exist"});

	try {
		const updatedProduct=await Product.findByIdAndUpdate(productId, product, {new:true});
		res.status(200).json({success:true, data:updatedProduct});
	} catch (error) {
		console.error(`Error in product update controller: ${error.message}`);
		res.status(500).json({success:false, message:"Internal server error"});		
	}
}