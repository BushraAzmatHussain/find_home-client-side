import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {
	FaHeart,
	FaRegHeart,
	FaFacebook,
	FaGooglePlusSquare,
	FaTelegram,
	FaViber,
} from 'react-icons/fa';

const Footer = () => {
	return (
		<footer>
			<div className='row'>
				<div className='col'>
					<img
						src='https://www.pngfind.com/pngs/m/352-3521494_svg-black-and-white-library-logo-house-green.png'
						className='logo'
					/>
					<p>
						Find Edmonton Apartments For Rent! The Best Resources.
						Always Facts. Privacy Friendly. Unlimited Access.
						Results & Answers. Completely Secure. Services: Best
						Results, Explore Now, New Sources, Best in Search.
					</p>
				</div>
				<div className='col'>
					<h3>
						OFFiCE ADDRESS
						<div className='underline'>
							<span></span>
						</div>
					</h3>
					<p>Shubidbajar</p>
					<p>Exel Tower</p>
					<p>Sylhet, 3100, Bangladesh</p>
					<p className='email-id'>rental@gmail.com</p>
					<h4>01707773890</h4>
				</div>
				<div className='col'>
					<h3>
						IMPORTANT LINKS
						<div className='underline'>
							<span></span>
						</div>
					</h3>
					<ul>
						<li>
							<Link to=''>Home</Link>
						</li>
						<li>
							<Link to=''>Categories</Link>
						</li>
						<li>
							<Link to=''>Featured</Link>
						</li>
						<li>
							<Link to=''>About Us</Link>
						</li>
						<li>
							<Link to=''>Contact Us</Link>
						</li>
					</ul>
				</div>
				<div className='col'>
					<h3>
						NEWSLETTER
						<div className='underline'>
							<span></span>
						</div>
					</h3>
					<form>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6 envelope'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z'
							/>
						</svg>

						<input
							type='email'
							placeholder='Enter Your Email'
							required
						/>
						<button type='submit'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-6 h-6 form-button'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5'
								/>
							</svg>
						</button>
					</form>
					<div className='social-icons'>
						{/* <i class='fa-thin fa-user'></i>
						<i class='fa-thin fa-user'></i>
						<i class='fa-thin fa-user'></i>
						<i class='fa-thin fa-user'></i> */}

						<FaFacebook className='facebook'></FaFacebook>
						<FaGooglePlusSquare className='google'></FaGooglePlusSquare>
						<FaTelegram className='telegram'></FaTelegram>
						<FaViber className='viver'></FaViber>
						{/* <FaRegHeart className='footer-icon' />
						<FaRegHeart className='footer-icon' />
						<FaRegHeart className='footer-icon' /> */}
					</div>
				</div>
			</div>
			<hr />
			<p className='copy-right'>CopyRight@2022 - All are reserved</p>
		</footer>
	);
};

export default Footer;
