import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../partials/Header';

function SignUp() {
	return (
		<div className="flex flex-col min-h-screen overflow-hidden">
			{/*  Site header */}
			<Header />

			{/*  Page content */}
			<main className="flex-grow">
				<section className="bg-gradient-to-b from-gray-100 to-white">
					<div className="max-w-6xl px-4 mx-auto sm:px-6">
						<div className="pt-32 pb-12 md:pt-40 md:pb-20">
							{/* Page header */}
							<div className="max-w-3xl pb-12 mx-auto text-center md:pb-20">
								<h1 className="h1">
									Welcome. We exist to make human lives easier. Join us.
								</h1>
							</div>

							{/* Form */}
							<div className="max-w-sm mx-auto">
								<form>
									<div className="flex flex-wrap mb-4 -mx-3">
										<div className="w-full px-3">
											<label
												className="block mb-1 text-sm font-medium text-gray-800"
												htmlFor="name">
												Name <span className="text-red-600">*</span>
											</label>
											<input
												id="name"
												type="text"
												className="w-full text-gray-800 form-input"
												placeholder="Enter your name"
												required
											/>
										</div>
									</div>
									<div className="flex flex-wrap mb-4 -mx-3">
										<div className="w-full px-3">
											<label
												className="block mb-1 text-sm font-medium text-gray-800"
												htmlFor="email">
												Email <span className="text-red-600">*</span>
											</label>
											<input
												id="email"
												type="email"
												className="w-full text-gray-800 form-input"
												placeholder="Enter your email address"
												required
											/>
										</div>
									</div>
									<div className="flex flex-wrap mb-4 -mx-3">
										<div className="w-full px-3">
											<label
												className="block mb-1 text-sm font-medium text-gray-800"
												htmlFor="password">
												Password <span className="text-red-600">*</span>
											</label>
											<input
												id="password"
												type="password"
												className="w-full text-gray-800 form-input"
												placeholder="Enter your password"
												required
											/>
										</div>
									</div>
									<div className="flex flex-wrap mb-4 -mx-3">
										<div className="w-full px-3">
											<label
												className="block mb-1 text-sm font-medium text-gray-800"
												htmlFor="gender">
												Gender <span className="text-red-600">*</span>
											</label>
											<input type="radio" value="male" name="gender" /> &nbsp; Male
											<br />
											<input type="radio" value="female" name="gender" /> &nbsp; Female
											<br />
											<input type="radio" value="other" name="gender" /> &nbsp; Other
										</div>
									</div>
									<div className="flex flex-wrap mb-4 -mx-3">
										<div className="w-full px-3">
											<label
												className="block mb-1 text-sm font-medium text-gray-800"
												htmlFor="address">
												Address <span className="text-red-600">*</span>
											</label>
											<input
												id="name"
												type="text"
												className="w-full text-gray-800 form-input"
												placeholder="Enter your address"
												required
											/>
										</div>
									</div>

									<div className="flex flex-wrap mt-6 -mx-3">
										<div className="w-full px-3">
											<button className="w-full text-white bg-blue-600 btn hover:bg-blue-700">
												Sign up
											</button>
										</div>
									</div>
									<div className="mt-3 text-sm text-center text-gray-500">
										By creating an account, you agree to the{' '}
										<a className="underline" href="#0">
											terms & conditions
										</a>
										, and our{' '}
										<a className="underline" href="#0">
											privacy policy
										</a>
										.
									</div>
								</form>
								<div className="mt-6 text-center text-gray-600">
									Already joined?{' '}
									<Link
										to="/signin"
										className="text-blue-600 transition duration-150 ease-in-out hover:underline">
										Sign in
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}

export default SignUp;
