import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../partials/Header';

function Register() {
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
								<h1 className="h1">Register as a volunteer for this event</h1>
							</div>

							{/* Form */}
							<div className="max-w-sm mx-auto">
								<form>
									<div className="flex flex-wrap mb-4 -mx-3">
										<div className="w-full px-3">
											<label
												className="block mb-1 text-sm font-medium text-gray-800"
												htmlFor="phnumber">
												Phone number <span className="text-red-600">*</span>
											</label>
											<input
												id="phnumber"
												type="number"
												className="w-full text-gray-800 form-input"
												placeholder="Enter your contact number"
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
											<input type="radio" value="male" name="gender" /> &nbsp;
											Male
											<br />
											<input type="radio" value="female" name="gender" /> &nbsp;
											Female
											<br />
											<input type="radio" value="other" name="gender" /> &nbsp;
											Other
										</div>
									</div>
									<div className="flex flex-wrap mb-4 -mx-3">
										<div className="w-full px-3">
											<label
												className="block mb-1 text-sm font-medium text-gray-800"
												htmlFor="helpwith">
												What can you help with?{' '}
												<span className="text-red-600">*</span>
											</label>
											<input type="radio" value="flyer" name="helpwith" />{' '}
											&nbsp; Delivering flyers
											<br />
											<input
												type="radio"
												value="phonecalls"
												name="helpwith"
											/>{' '}
											&nbsp; Taking phone calls
											<br />
											<input
												type="radio"
												value="enterdata"
												name="helpwith"
											/>{' '}
											&nbsp; Entering data
											<br />
											<input type="radio" value="pr" name="helpwith" /> &nbsp;
											Public Relations
											<br />
											<input type="radio" value="door" name="helpwith" /> &nbsp;
											Door to Door
											<br />
										</div>
									</div>
									<div className="flex flex-wrap mb-4 -mx-3">
										<div className="w-full px-3">
											<label
												className="block mb-1 text-sm font-medium text-gray-800"
												htmlFor="why-reason">
												Why do you want to join this event?{' '}
												<span className="text-red-600">*</span>
											</label>
											<input
												id="why-reason"
												type="text"
												className="w-full text-gray-800 form-input"
												placeholder="State your motivation towards volunteering"
												required
											/>
										</div>
									</div>

									<div className="flex flex-wrap mt-6 -mx-3">
										<div className="w-full px-3">
											<button className="w-full text-white bg-blue-600 btn hover:bg-blue-700">
												Submit
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

export default Register;
