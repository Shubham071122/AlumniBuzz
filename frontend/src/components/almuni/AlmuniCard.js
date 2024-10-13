import React from 'react';
import { NavLink } from 'react-router-dom';

function AlumniCard({
  key,
  name,
  college,
  current_company,
  year_of_passout,
  skills,
  image_url,
}) {
  return (
    <>
      <div className="bg-white border shadow-lg rounded-3xl p-5">
        <img
          src={image_url}
          alt={`${name}'s image`}
          className="rounded-full w-20 h-20 mx-auto object-cover"
        />
        <h3 className="text-xl font-bold text-center mt-4">{name}</h3>
        <p className="text-center text-gray-500">{college}</p>
        <p className="text-center text-gray-700">{current_company}</p>
        <p className="text-center text-gray-400">Passout: {year_of_passout}</p>
        <div className="mt-4">
          <h4 className="font-semibold">Skills:</h4>
          <ul className="list-disc ml-4 text-sm">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className='mt-4 flex items-center justify-end gap-4'>
            <NavLink to={`almuni-profile/${key}`} className="bg-gray-400 text-white px-3 py-2 rounded-full hover:bg-gray-500">
                View
            </NavLink>
            <NavLink className="bg-violet-500 text-white px-3 py-2 rounded-full navani">
                Make Request
            </NavLink>
        </div>
      </div>
    </>
  );
}

export default AlumniCard;
