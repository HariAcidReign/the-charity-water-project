import React from 'react';

function Testimonials() {
  return (
    <section className="relative">

      {/* Illustration behind content */}
      <div className="absolute bottom-0 -mb-32 transform -translate-x-1/2 pointer-events-none left-1/2" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-16">
            <h2 className="mb-4 h2">Backed by over 20,000 donors. Operated by 5000+ local partners</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">Our carefully-chosen local partners have a community-centered approach, excellent reporting practices, and years of experience implementing effective, sustainable water projects in their area.</p><br/>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">This has been made possible only because of our well-wishers and donors, who have helped in raising funds to pay the partners and buy equipment.</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start bg-white border-2 border-gray-200 rounded">

              {/* Testimonial */}
              <div className="px-12 py-8 pt-20 mx-4 text-center md:mx-0">
                <div className="absolute top-0 -mt-8 transform -translate-x-1/2 left-1/2">
                  <img className="relative rounded-full" src={require('../images/testimonial.jpg').default} width="96" height="96" alt="Testimonial 01" />
                </div>
                <blockquote className="mb-4 text-xl font-medium">
                  “  I've seen the effect of dirty water first hand in my native country of Haiti. When I came to America, I wanted to proactively support a mission that focused on solving the water problem, and the Charity Water Project has been doing exactly that “
                </blockquote>
                <cite className="block mb-1 text-lg not-italic font-bold">Angeline Amede</cite>
                <div className="text-gray-600">
                  <span>CEO & Co-Founder</span> <a className="text-blue-600 hover:underline" href="#0">@BigBinary</a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Testimonials;