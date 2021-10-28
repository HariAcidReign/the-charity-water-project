import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../partials/Header';

function Events() {
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
							
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}

export default Events;
