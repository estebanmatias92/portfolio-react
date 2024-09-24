import PropTypes from 'prop-types';
import { useState } from 'react';
import ProjectItem from './ProjectItem';
// Getting the project data from the mocked db
import { projects } from './__test__/db.mock.json';

const ProjectGallery = ({ initialItemsCount = 3, totalItemsCount = 9 }) => {
  const [visibleCount, setVisibleCount] = useState(initialItemsCount);

  const handleShowMore = () => {
    setVisibleCount((prevCount) =>
      prevCount === initialItemsCount ? totalItemsCount : initialItemsCount,
    );
  };

  return (
    <section className="bg-white p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, visibleCount).map((item) => (
            <ProjectItem key={item.id} project={item} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <button
            onClick={handleShowMore}
            className="rounded bg-gray-800 px-4 py-2 text-white hover:bg-gray-700"
          >
            {visibleCount === initialItemsCount ? 'Show More' : 'Show Less'}
          </button>
        </div>
      </div>
    </section>
  );
};

// Type validation
ProjectGallery.propTypes = {
  initialItemsCount: PropTypes.number.isRequired,
  totalItemsCount: PropTypes.number.isRequired,
};

// Default Value for ProjectGallery arguments
ProjectGallery.defaultProps = {
  initialItemsCount: 3,
  totalItemsCount: 9,
};

export default ProjectGallery;
