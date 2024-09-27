import PropTypes from 'prop-types';
import { useState } from 'react';

const ProjectItem = ({ project: { id, title, description, image, skills } = {} }) => {
  // eslint-disable-next-line no-unused-vars
  const [hoveredId, setHoveredId] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  return (
    <article
      key={id}
      className="bg-gray-100 p-4 rounded shadow-md transform transition duration-200 hover:scale-105"
      onMouseEnter={() => handleMouseEnter(id)}
      onMouseLeave={handleMouseLeave}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      <img src={image} alt={title} className="mb-4 rounded" />
      <ul className="list-disc list-inside">
        {skills.map((skill, idx) => (
          <li key={idx} className="mb-1">{skill}</li>
        ))}
      </ul>
    </article>
  );
};

// Type validation
ProjectItem.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ProjectItem;
