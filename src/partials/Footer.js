import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<footer>
			<div className="max-w-6xl px-4 mx-auto sm:px-6">
				{/* Bottom area */}
				<div className="py-4 border-t border-gray-200 md:flex md:items-center md:justify-between md:py-8">
					{/* Social links */}
					<ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
						<li>
							<Link
								to="#"
								className="flex items-center justify-center text-gray-600 transition duration-150 ease-in-out bg-white rounded-full shadow hover:text-gray-900 hover:bg-white-100"
								aria-label="Twitter">
								<svg
									className="w-8 h-8 fill-current"
									viewBox="0 0 32 32"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
								</svg>
							</Link>
						</li>

						<li className="ml-4">
							<Link
								to="#"
								className="flex items-center justify-center text-gray-600 transition duration-150 ease-in-out bg-white rounded-full shadow hover:text-gray-900 hover:bg-white-100"
								aria-label="Facebook">
								<svg
									className="w-8 h-8 fill-current"
									viewBox="0 0 32 32"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
								</svg>
							</Link>
						</li>
					</ul>

					{/* Copyrights note */}
					{/* Logo */}
					<Link to="/" className="inline-block">
						<svg
							className="w-8 h-8"
							viewBox="0 0 32 32"
							xmlns="http://www.w3.org/2000/svg">
							<defs>
								<radialGradient
									cx="21.152%"
									cy="86.063%"
									fx="21.152%"
									fy="86.063%"
									r="79.941%"
									id="footer-logo">
									<stop stopColor="#4FD1C5" offset="0%" />
									<stop stopColor="#81E6D9" offset="25.871%" />
									<stop stopColor="#338CF5" offset="100%" />
								</radialGradient>
							</defs>
							<rect
								width="32"
								height="32"
								rx="16"
								fill="url(#footer-logo)"
								fillRule="nonzero"
							/>
						</svg>
					</Link>

					<div className="mr-4 text-sm text-gray-600">
						Made by Team 13 for NCP. All rights reserved.
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
