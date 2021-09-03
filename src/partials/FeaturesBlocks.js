import React from 'react';

function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-900 pointer-events-none top-1/2 md:mt-24 lg:mt-0" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 right-0 w-px h-20 p-px m-auto transform translate-y-1/2 bg-gray-200"></div>

      <div className="relative max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-20">
            <h2 className="mb-4 h2">How We Work</h2>
            <p className="text-lg text-gray-600">Eight out of ten people without access to improved water sources live in rural areas. From the start, that’s where we’ve focused our efforts. We work with carefully-chosen local partner organizations to bring clean water to remote areas with the greatest needs and most vulnerable populations.</p>
          </div>

          {/* Items */}
          <div className="grid items-start max-w-sm gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3 md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <h4 className="mb-1 text-xl font-bold leading-snug tracking-tight">Building Wells</h4>
              <p className="text-center text-gray-600">Skilled laborers dig up to 15 meters by hand to reach aquifers below. If the water table is too deep, a drilling team drills deep into the earth to reach fresh aquifers.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <h4 className="mb-1 text-xl font-bold leading-snug tracking-tight">Transportation</h4>
              <p className="text-center text-gray-600">Gutters on rooftops direct the flow of rainfall into a sanitary holding tank. From there, the force of gravity feeds water into a community from an elevated source.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <h4 className="mb-1 text-xl font-bold leading-snug tracking-tight">Purification</h4>
              <p className="text-center text-gray-600">Installed treatment systems remove contaminants from existing systems. If there is no electricity, we use layers of sand and microbacterial film to filter out contaminants.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
