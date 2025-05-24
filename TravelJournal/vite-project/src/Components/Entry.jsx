import React from 'react'
import marker from '../assets/marker.png'





const Entry = (props) => {
    return (

        <div>
            <main className="p-4 mt-4 bg-white shadow-md rounded-lg">
                {/* Container for image and content side by side */}
                <div className="flex flex-col md:flex-row gap-4">

                    {/*  Image */}
                    <img
                        src={props.entry.img.src}
                        alt={props.entry.img.alt}
                        className="w-full md:w-1/4 object-cover rounded-md"
                    />

                    {/* Content */}
                    <div className="flex flex-col justify-between space-y-4">
                        {/* Header with marker and map link */}
                        <div className="flex items-center flex-wrap gap-2">
                            <img src={marker} alt="Marker" className="h-4 w-4" />
                            <h3 className="text-xl text-gray-700">{props.entry.country}</h3>
                            <a
                                href={props.entry.googleMapsLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-blue-600 underline ml-2"
                            >
                                View on Google Maps
                            </a>
                        </div>

                        {/* Title */}
                        <h1 className="font-bold text-lg text-gray-800">{props.entry.title}</h1>

                        {/* Dates */}
                        <div className="text-red-600 font-bold text-sm">
                            <strong>Dates:</strong> {props.entry.dates}
                        </div>

                        {/* Description */}
                        <p className="text-gray-800 leading-relaxed">
                            {props.entry.text}
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Entry;








