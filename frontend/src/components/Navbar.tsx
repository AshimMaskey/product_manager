import { CiShoppingCart } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";
import { ModeToggle } from "./mode-toggle";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
	<div className='flex justify-between  px-20 mx-auto '>
		<div className='flex flex-row py-4 hover:cursor-pointer'>
			<Link className="flex flex-row" to='/'>
			<div>
			<h1 className='hidden sm:block uppercase font-semibold text-2xl'>product manager</h1>
			<h1 className='block sm:hidden uppercase font-semibold text-2xl'>pm</h1>
			</div>
			<div>
			<CiShoppingCart className='size-8' />
			</div>
			</Link>
		</div>
		<div className='py-4 flex flex-row gap-5'>
		<NavLink className={({isActive})=>(isActive?'text-cyan-500':'')} to='/create'>
		<div className="py-0.5">
		<IoIosAddCircleOutline className='size-8 hover:cursor-pointer' />
		</div>
		</NavLink>
		<div>
			<ModeToggle/>
		</div>
		</div>
	</div>
  )
}

export default Navbar