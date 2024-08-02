// import React from 'react'
import {FaInstagram, FaTwitter, FaSquareFacebook, FaLinkedin} from 'react-icons/fa6'
function Footer() {
	return (
		<>
			<footer className="flex flex-col bg-gradient-to-b from-[#0A5C36] via-[#0F5132] to-[#18392b] px-12 py-6 pb-2">
				<div className="flex justify-around gap-5 mb-10">
					<div className="flex flex-col flex-1 px-6">
						<h2 className="text-white my-4">Follow us on our socials</h2>
						<div className='flex gap-7 text-green-300'>
                        <FaInstagram/>
                        <FaTwitter />
                        <FaSquareFacebook/>
                        <FaLinkedin />
                        </div>
					</div>
					<div className="flex flex-col flex-1 px-6">
						<h2 className="text-white text-center my-4
                        ">Quick Links</h2>
						<ul className='list-disc text-green-200 flex justify-around'>
                            <li><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Register</a></li>
                        </ul>
					</div>
					<div className="flex flex-col justify-around flex-1 px-6">
						<h2 className="text-white text-right my-4">About IEEE JU</h2>
						<p className="text-right text-wrap text-green-200 text-[14px]">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
							explicabo rem facere quasi! Deleniti facere officiis nostrum.
							Amet, tempore atque.
						</p>
					</div>
				</div>
				<div className="flex justify-center items-center py-2 border-t-gray-200 border-t">
					<p className="text-white"> All rights reserved &#124; IEEE JU 2024</p>
				</div>
			</footer>
		</>
	);
}

export default Footer;
