import { NavLink } from 'react-router-dom';
import brewBiteLogo from '../../assets/images/brewBite_logo.png';
import './nav.css'

const Navbar = () => {
  return (
    <>
      <nav className='bg-slate-700 text-slate-300'>
        <div className="container mx-auto px-5">
            <div>
                <div className='h-16 flex gap-4 items-center justify-between'>
                    <span>
                        <img className='w-48' src={brewBiteLogo} alt="brewBite Express" />
                    </span>
                    <div className='flex-1'>
                        <ul className='flex gap-8 justify-center'>
                            <li>
                                <NavLink to={'/'}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/add-product'}>Add Product</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/cart'}>My Cart</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <button>Login</button>
                    </div>
                </div>
            </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
