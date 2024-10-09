import React from 'react';
import MaxwidthXL from '../../ScreenSizes/MaxwidthXL.js';
import AlmuniCard from '../../components/almuni/AlmuniCard.js';

const alumniData = [
  {
    name: 'John Doe',
    college: 'MIT',
    current_company: 'Google',
    year_of_passout: 2018,
    skills: ['Machine Learning', 'AI', 'Python', 'TensorFlow'],
    image_url: 'https://img.freepik.com/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148138.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1728432000&semt=ais_hybrid',
  },
  {
    name: 'Jane Smith',
    college: 'Stanford University',
    current_company: 'Facebook',
    year_of_passout: 2017,
    skills: ['Full Stack Development', 'React', 'Node.js', 'JavaScript'],
    image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcXhe1rMe5dD93dgKsPNuKd1KlE-bxSMYv56eRRaSh2KjdCO4e56vSPQrAsEFFXIDuyjE&usqp=CAU',
  },
  {
    name: 'Michael Brown',
    college: 'Harvard University',
    current_company: 'Microsoft',
    year_of_passout: 2019,
    skills: ['Cloud Computing', 'Azure', 'DevOps', 'Kubernetes'],
    image_url: 'https://t4.ftcdn.net/jpg/02/45/56/35/360_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg',
  },
  {
    name: 'Emily Johnson',
    college: 'California Institute of Technology',
    current_company: 'Amazon',
    year_of_passout: 2020,
    skills: ['Data Science', 'Python', 'R', 'SQL'],
    image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTilq9Pygb0dFdkwuRmkrkF0_HBOOF2B2Gajg&s',
  },
  {
    name: 'David Lee',
    college: 'University of California, Berkeley',
    current_company: 'Tesla',
    year_of_passout: 2016,
    skills: ['Embedded Systems', 'C++', 'Robotics', 'Electronics'],
    image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO4Buvn1Tug8KuPhYAAREN1EWKRCq3vniiBg&s',
  },
  {
    name: 'Sophia Wilson',
    college: 'Carnegie Mellon University',
    current_company: 'Apple',
    year_of_passout: 2021,
    skills: ['iOS Development', 'Swift', 'UI/UX', 'Mobile Apps'],
    image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU04_BMZwlN0onqJVp4KBXJ8rTjsJ9pdK2pA&s',
  },
  {
    name: 'James Davis',
    college: 'Princeton University',
    current_company: 'Netflix',
    year_of_passout: 2015,
    skills: ['Big Data', 'Hadoop', 'Spark', 'Data Engineering'],
    image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4xcnTzEA3Fv59eq5rqNrxXZ2BdlzX468I5w&s',
  },
  {
    name: 'Olivia Martinez',
    college: 'University of Chicago',
    current_company: 'Airbnb',
    year_of_passout: 2022,
    skills: ['Backend Development', 'Django', 'PostgreSQL', 'Python'],
    image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy5Kp7mr110eb2v36-XoZf1OMOqkDhYgfjhA&s',
  },
];

function AlumniSection() {
  return (
    <>
      <MaxwidthXL>
        <div>
          <h3 className="text-lg font-semibold">
            29 millions of almuni evaluated ⭐⭐⭐⭐⭐
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {alumniData.map((alumni, index) => (
              <AlmuniCard
                key={index}
                name={alumni.name}
                college={alumni.college}
                current_company={alumni.current_company}
                year_of_passout={alumni.year_of_passout}
                skills={alumni.skills}
                image_url={alumni.image_url}
              />
            ))}
          </div>
        </div>
      </MaxwidthXL>
    </>
  );
}

export default AlumniSection;
