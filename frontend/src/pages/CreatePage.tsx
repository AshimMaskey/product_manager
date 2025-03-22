import ProductForm from '@/components/ProductForm'
const CreatePage = () => {
  return (
	<div className='px-20 mt-10 max-w-3xl '>
    <div className='mb-5 text-center'>
      <h1 className='text-3xl border-2 bg-gray-200 dark:bg-gray-700 rounded-lg'>Add Product</h1>
    </div>
    <ProductForm/>
  </div>
  )
}

export default CreatePage