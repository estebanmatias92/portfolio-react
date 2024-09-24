import _ from 'lodash';
import PropTypes from 'prop-types';

const Navbar = ({ title, routes }) => {
  const formatRoute = (route) => _.kebabCase(route);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-lg font-bold text-white">{title}</div>

        <ul className="flex space-x-4">
          {routes.map((route, index) => { 
            const formattedRoute = formatRoute(route);

            return(
              <li key={index}>
                <a
                  href={formattedRoute === 'home' ? '/' : `/${formattedRoute}`}
                  className="text-white hover:text-gray-400"
                >
                  {route}
                </a>
              </li>
          )})}
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.string),
};

export default Navbar;
