import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'; // IMPORT THIS TO LINK BUTTON TO A PAGE

import Header from '../partials/Header';

function Events() {
	let history = useHistory(); // IMPORT THIS TO LINK BUTTON TO A PAGE
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
								<h1 className="h1">Upcoming Events</h1>
								<br />
								<h4>
									Your time is valuable, so spend it well. Attend a Charity
									Water event, and you can change everything.{' '}
									<strong>For everyone. Forever.</strong> Thank you for being a
									champion of safe water and sanitation. We look forward to
									seeing you at an event.
								</h4>
							</div>
							{/* Event Cards */}
							<div class="flex flex-col items-center justify-center gap-5 p-4 antialiased bg-gradient-to-b from-gray-100 to-white md:p-0">
								<div class="flex w-full overflow-hidden text-gray-900 bg-white rounded-lg shadow-lg md:max-w-3xl">
									<img
										src="https://pbs.twimg.com/profile_images/1617782147/Committee_Arizona_400x400.png"
										alt="event-one"
										class="hidden object-cover w-2/6 select-none sm:block"
									/>
									<div class="flex flex-col justify-between w-full p-5">
										<div class="mb-10 break-all">
											<h2 class="mb-3 text-xl font-black leading-tight md:text-2xl md:leading-none">
												Arizona Committee Pints for People
											</h2>
											<p class="leading-relaxed text-gray-700 lg:max-w-md md:truncate">
												Meet experts in the field on how you can volunteer and
												<br class="hidden md:block" />
												make a change in the water crisis in Arizona, USA.
												<br />
												<em>Location: </em>201 E. Main St. Phoenix, AZ
											</p>
										</div>

										<div class="grid w-full grid-flow-row-dense grid-cols-2 gap-3 md:grid-cols-3">
											<button
												onClick={() => {
													history.push('/register'); 
												}}
												// THIS BUTTON IS NOW LINKED TO A PAGE
												class="col-start-2 col-end-4 py-1 font-bold text-white bg-gray-500 rounded-lg md:col-start-3 hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:shadow-outline">
												Register
											</button>
											<span class="self-end font-semibold leading-none text-gray-500">
												November 4 from 4:00 pm to 7:30 pm
											</span>
										</div>
									</div>
								</div>

								<div class="flex w-full overflow-hidden text-gray-900 bg-white rounded-lg shadow-lg md:max-w-3xl">
									<img
										src="https://wateractionhub.org/media/CACHE/images/projects/2018/07/08/WaterAid-logo_0jwm74q/43a4a53c9f1d84708fe4602d2eb45768.jpg"
										alt="event-two"
										class="hidden object-cover w-2/6 select-none sm:block"
									/>
									<div class="flex flex-col justify-between w-full p-5">
										<div class="mb-10 break-all">
											<h2 class="mb-3 text-xl font-black leading-tight md:text-2xl md:leading-none">
												Water Aid Committee Meetup
											</h2>
											<p class="leading-relaxed text-gray-700 lg:max-w-md md:truncate">
												Let us talk about how our work can make a difference
												<br class="hidden md:block" />
												in the parched regions of Africa.
												<br />
												<em>Location: </em>609 G. West Side Boulevard, New York,
												NY
											</p>
										</div>

										<div class="grid w-full grid-flow-row-dense grid-cols-2 gap-3 md:grid-cols-3">
											<button
												onClick={() => {
													history.push('/register');
												}}
												class="col-start-2 col-end-4 py-1 font-bold text-white bg-gray-500 rounded-lg md:col-start-3 hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:shadow-outline">
												Register
											</button>
											<span class="self-end font-semibold leading-none text-gray-500">
												December 10 from 3:00 pm to 8 pm
											</span>
										</div>
									</div>
								</div>
							</div>

							{/* end */}
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}

export default Events;
