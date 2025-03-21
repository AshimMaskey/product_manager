import express from "express";
import { handleCreateProduct, handleDeleteProduct, handleShowProduct, handleUpdateProduct } from "../controllers/product.controller.js";

const router=express.Router();

router.post("/", handleCreateProduct);
router.delete("/:id", handleDeleteProduct);
router.get("/", handleShowProduct);
router.put("/:id", handleUpdateProduct);

export default router;