import { useProductStore } from "@/store/productStore";
import React from "react";
import { MdDeleteForever } from "react-icons/md";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import UpdateDialog from "./UpdateDialog";

interface Product {
  name: string;
  price: number;
  image: string;
  _id?: string;
}

interface ProductCardProps {
  products: Product[];
}

const ProductCard: React.FC<ProductCardProps> = ({ products }) => {
  const { deleteProduct } = useProductStore();
  return (
    <div className="flex flex-row gap-5 flex-wrap">
      {products.map((product) => (
        <div
          key={product._id}
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
        >
          <img
            className="w-full h-48 object-cover rounded-t-lg"
            src={product.image}
            alt=""
          />
          <div className="p-5">
            <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {product.name}
            </h5>
            <h5 className="mb-2 text-md italic tracking-tight text-gray-900 dark:text-white">
              Price: Rs. {product.price}
            </h5>
            <div className="flex flex-row justify-between">
              <UpdateDialog product={product} />

              {/* Delete functionality */}
              <AlertDialog>
                <AlertDialogTrigger>
                  <MdDeleteForever className="size-8 hover:cursor-pointer" />
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Delete Product?</AlertDialogTitle>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => deleteProduct(product._id ?? "")}
                    >
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
