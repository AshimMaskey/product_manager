import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useProductStore } from "@/store/productStore";
import React, { useState } from "react";
import { MdOutlineBrowserUpdated } from "react-icons/md";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
}

interface UpdateDialogProps {
  product: Product;
}

const UpdateDialog: React.FC<UpdateDialogProps> = ({ product }) => {
  const { updateProduct } = useProductStore();
  const [productData, setProductData] = useState<Product>({
    _id: product._id,
    name: product.name,
    price: product.price,
    image: product.image,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProduct(productData);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <MdOutlineBrowserUpdated className="size-8 hover:cursor-pointer" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Product</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            {/* Name Input */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                onChange={handleChange}
                value={productData.name}
                className="col-span-3"
                required
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Price
              </Label>
              <Input
                id="price"
                name="price"
                type="number"
                onChange={handleChange}
                value={productData.price}
                className="col-span-3"
                required
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="image" className="text-right">
                Image URL
              </Label>
              <Input
                id="image"
                name="image"
                type="text"
                onChange={handleChange}
                value={productData.image}
                className="col-span-3"
                required
              />
            </div>
          </div>

          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateDialog;
