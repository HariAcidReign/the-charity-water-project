import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../partials/Header';

function Donate() {
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
								<h1 className="h2">
									Help bring clean and safe water to every person on the planet.
									Donate today.
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
												Name
											</label>
											<input
												id="name"
												type="text"
												className="w-full text-gray-800 form-input"
												placeholder="Enter your name as on credit card"
												required
											/>
										</div>
									</div>
									<div className="flex flex-wrap mb-4 -mx-3">
										<div className="w-full px-3">
											<div className="flex justify-between">
												<label
													className="block mb-1 text-sm font-medium text-gray-800"
													htmlFor="ccnumber">
													Credit Card Details
												</label>
											</div>
											<input
												id="ccnumber"
												type="number"
												className="w-full text-gray-800 form-input"
												placeholder="16 digit number"
												required
											/>
										</div>
									</div>

									<div class="mb-3 -mx-2 flex items-end">
										<div class="px-2 w-1/3 justify-between">
											<input
												class="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
												placeholder="mm"
												type="number"
												min="01"
												max="12"
											/>
										</div>
										<div class="px-2 w-1/3">
											<input
												class="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
												placeholder="yyyy"
												type="number"
												min="2000"
												max="3000"
											/>
										</div>
										<div class="px-2 w-1/3">
											<input
												class="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
												placeholder="CVV"
												type="number"
												min="000"
												max="999"
											/>
										</div>
									</div>

                                    <div className="flex flex-wrap mb-4 -mx-3">
										<div className="w-full px-3">
											<label
												className="block mb-1 text-sm font-medium text-gray-800"
												htmlFor="amount">
												Amount (USD)
											</label>
											<input
												id="amount"
												type="number"
                                                min="5"
                                                step="5"
												className="w-full text-gray-800 form-input"
												placeholder="Enter amount"
												required
											/>
										</div>
									</div>

									<div className="flex flex-wrap mt-6 -mx-3">
										<div className="w-full px-3">
											<button className="w-full text-white bg-blue-600 btn hover:bg-blue-700">
												Donate
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

export default Donate;
