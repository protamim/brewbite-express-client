import moment from 'moment';
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa6'


const Footer = () => {
    return (
        <>
            <footer className='bg-slate-700 text-slate-200 py-8 mt-12'>
                <div className=' flex flex-col gap-5 justify-center items-center'>
                    <ul className='flex gap-8 text-2xl'>
                        <li>
                            <Link> <FaFacebook /> </Link>
                        </li>
                        <li>
                            <Link> <FaTwitter /> </Link>
                        </li>
                        <li>
                            <Link> <FaInstagram /> </Link>
                        </li>
                        <li>
                            <Link> <FaPinterest /> </Link>
                        </li>
                        <li>
                            <Link> <FaYoutube /> </Link>
                        </li>
                    </ul>
                    <p>
                    Copyright © {moment().format('YYYY')} BrewBite Express
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;