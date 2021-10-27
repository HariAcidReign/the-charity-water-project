import React from 'react';

import Header from '../partials/Header';

function ResetPassword() {
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
								<h1 className="mb-4 h1">Let’s get you back up</h1>
								<p className="text-xl text-gray-600">
									Enter your email, and we’ll send you a link to reset your
									password.
								</p>
							</div>

							{/* Form */}
							<div className="max-w-sm mx-auto">
								<form>
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
									<div className="flex flex-wrap mt-6 -mx-3">
										<div className="w-full px-3">
											<button className="w-full text-white bg-blue-600 btn hover:bg-blue-700">
												Send reset link
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}

export default ResetPassword;
