import { FaInstagram, FaTwitter, FaSquareFacebook, FaLinkedin } from "react-icons/fa6";
function Footer() {
	return (
		<>
			<footer className="flex flex-col bg-gradient-to-b from-[#0A5C36] to-[#1D2E28] px-12 py-6 pb-2">
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mb-10">
					<div className="flex flex-col">
						<h2 className="text-white my-4 text-xl text-center sm:text-left">Follow us on our Socials</h2>
						<div className="flex gap-x-9 px-2 text-xl text-[#82BBA7] justify-center sm:justify-normal">
                            <a href="https://www.instagram.com/_ieeeju/" target="_blank"><FaInstagram /></a>
                            <a href="https://twitter.com/IeeeJadavpur" target="_blank"><FaTwitter /></a>
                            <a href="https://www.facebook.com/ieeejusb" target="_blank"><FaSquareFacebook /></a>
                            <a href="https://www.linkedin.com/company/ieee-ju" target="_blank"><FaLinkedin /></a>
						</div>
					</div>
					<div className="flex flex-col px-6">
						<h2
							className="text-white text-center my-4 text-xl
                        ">
							Quick Links
						</h2>
						<ul className="list-disc text-[#82BBA7] flex flex-col items-center lg:flex-row justify-around text-base">
							<li>
								<a href="#home">Home</a>
							</li>
							<li>
								<a href="#about">About</a>
							</li>
							<li>
								<a href="#register">Register</a>
							</li>
						</ul>
					</div>
					<div className="flex flex-col justify-around grid-span-2">
						<h2 className="text-white text-center md:text-right my-4 text-xl">About IEEE JU</h2>
						<p className="text-center md:text-right text-wrap text-[#82BBA7] text-base">
							The Jadavpur University IEEE student branch, founded in 2010,
							belongs to the Kolkata section of Region 10 of the organization.
							We are a group of enthusiastic students who are promoting
							innovative ideas both within and outside the campus.
						</p>
					</div>
				</div>
				<div className="flex justify-center py-2 border-t-[#c7c1c1] border-t">
					<p className="text-[#B0AAAA]"> All rights reserved &#124; IEEE JU 2024</p>
				</div>
			</footer>
		</>
	);
}

export default Footer;
