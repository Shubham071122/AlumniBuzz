import React, { useState } from 'react';
import Select from 'react-select';

const skillsOptions = [
  // Programming Languages
  { value: 'JavaScript', label: 'JavaScript' },
  { value: 'Python', label: 'Python' },
  { value: 'Java', label: 'Java' },
  { value: 'C++', label: 'C++' },
  { value: 'C#', label: 'C#' },
  { value: 'Go', label: 'Go' },
  { value: 'Ruby', label: 'Ruby' },
  { value: 'PHP', label: 'PHP' },
  { value: 'Swift', label: 'Swift' },
  { value: 'Kotlin', label: 'Kotlin' },
  { value: 'Rust', label: 'Rust' },
  { value: 'TypeScript', label: 'TypeScript' },

  // Frontend Frameworks
  { value: 'React', label: 'React' },
  { value: 'Vue.js', label: 'Vue.js' },
  { value: 'Angular', label: 'Angular' },
  { value: 'Svelte', label: 'Svelte' },
  { value: 'Next.js', label: 'Next.js' },
  { value: 'Nuxt.js', label: 'Nuxt.js' },

  // Backend Frameworks
  { value: 'Node.js', label: 'Node.js' },
  { value: 'Django', label: 'Django' },
  { value: 'Flask', label: 'Flask' },
  { value: 'Spring Boot', label: 'Spring Boot' },
  { value: 'Express', label: 'Express' },
  { value: 'Ruby on Rails', label: 'Ruby on Rails' },
  { value: 'Laravel', label: 'Laravel' },
  { value: 'ASP.NET', label: 'ASP.NET' },

  // Mobile Development
  { value: 'React Native', label: 'React Native' },
  { value: 'Flutter', label: 'Flutter' },
  { value: 'Ionic', label: 'Ionic' },
  { value: 'Xamarin', label: 'Xamarin' },

  // Databases
  { value: 'MySQL', label: 'MySQL' },
  { value: 'PostgreSQL', label: 'PostgreSQL' },
  { value: 'MongoDB', label: 'MongoDB' },
  { value: 'SQLite', label: 'SQLite' },
  { value: 'Redis', label: 'Redis' },
  { value: 'Firebase', label: 'Firebase' },
  { value: 'Oracle', label: 'Oracle' },
  { value: 'Microsoft SQL Server', label: 'Microsoft SQL Server' },

  // DevOps and CI/CD Tools
  { value: 'Docker', label: 'Docker' },
  { value: 'Kubernetes', label: 'Kubernetes' },
  { value: 'Jenkins', label: 'Jenkins' },
  { value: 'GitLab CI', label: 'GitLab CI' },
  { value: 'CircleCI', label: 'CircleCI' },
  { value: 'Travis CI', label: 'Travis CI' },

  // Cloud Platforms
  { value: 'AWS', label: 'AWS' },
  { value: 'Google Cloud', label: 'Google Cloud' },
  { value: 'Azure', label: 'Azure' },
  { value: 'Heroku', label: 'Heroku' },
  { value: 'DigitalOcean', label: 'DigitalOcean' },

  // Data Science and Machine Learning
  { value: 'Data Science', label: 'Data Science' },
  { value: 'Machine Learning', label: 'Machine Learning' },
  { value: 'TensorFlow', label: 'TensorFlow' },
  { value: 'Keras', label: 'Keras' },
  { value: 'PyTorch', label: 'PyTorch' },
  { value: 'Scikit-learn', label: 'Scikit-learn' },
  { value: 'Pandas', label: 'Pandas' },
  { value: 'NumPy', label: 'NumPy' },
  { value: 'Matplotlib', label: 'Matplotlib' },
  { value: 'Tableau', label: 'Tableau' },
  { value: 'Power BI', label: 'Power BI' },

  // Web Technologies
  { value: 'HTML', label: 'HTML' },
  { value: 'CSS', label: 'CSS' },
  { value: 'Sass', label: 'Sass' },
  { value: 'Tailwind CSS', label: 'Tailwind CSS' },
  { value: 'Bootstrap', label: 'Bootstrap' },

  // Testing
  { value: 'Jest', label: 'Jest' },
  { value: 'Mocha', label: 'Mocha' },
  { value: 'Chai', label: 'Chai' },
  { value: 'Cypress', label: 'Cypress' },
  { value: 'Selenium', label: 'Selenium' },

  // Version Control
  { value: 'Git', label: 'Git' },
  { value: 'GitHub', label: 'GitHub' },
  { value: 'GitLab', label: 'GitLab' },
  { value: 'Bitbucket', label: 'Bitbucket' },

  // UI/UX Design
  { value: 'Figma', label: 'Figma' },
  { value: 'Adobe XD', label: 'Adobe XD' },
  { value: 'Sketch', label: 'Sketch' },
  { value: 'InVision', label: 'InVision' },

  // Others
  { value: 'Blockchain', label: 'Blockchain' },
  { value: 'Solidity', label: 'Solidity' },
  { value: 'GraphQL', label: 'GraphQL' },
  { value: 'REST API', label: 'REST API' },
  { value: 'Webpack', label: 'Webpack' },
  { value: 'Gatsby', label: 'Gatsby' },
  { value: 'Three.js', label: 'Three.js' },
];

const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: '8px',
      padding: '6px',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? '#4f46e5' 
        : state.isFocused
        ? '#e0e7ff' 
        : 'white',
      color: state.isSelected ? 'white' : 'black',
      padding: 10,
      cursor: 'pointer',
    }),
  };
  

const AlumniSkills = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleSkillChange = (selectedOptions) => {
    setSelectedSkills(selectedOptions || []);
  };

  return (
    <div>
      <h2 className="text-gray-600 font-medium">Skills</h2>
      <Select
        options={skillsOptions}
        isMulti
        value={selectedSkills}
        onChange={handleSkillChange}
        placeholder="Search and select skills"
        className=""
        styles={customStyles}
      />
    </div>
  );
};

export default AlumniSkills;
