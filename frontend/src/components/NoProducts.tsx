import { Button } from "@/components/ui/button"
import EmptyCart from "@/assets/empty.jfif"
import { Link } from 'react-router-dom'

const NoProducts = () => {
  return (
	<div className=' py-30 flex justify-center items-center '>
		<div>
		<div>
		<img className='size-40 rounded-4xl' src={EmptyCart} alt="" />
		</div>
		<div className='mt-3'>
		<Button className="ml-6 bg-green-500 hover:bg-green-600 duration-200" variant="secondary"><
			Link to="/create">Add Product!</Link>
		</Button>
		</div>
		</div>
	</div>
  )
}

export default NoProducts