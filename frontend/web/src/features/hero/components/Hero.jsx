// Getting the project data from the mocked db
import { skills } from './__test__/db.mock.json';

const Hero = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 flex flex-col items-center justify-center mb-8 lg:mb-0">
          <h1 className="text-4xl font-bold">Matias Esteban</h1>
          <p className="text-xl text-gray-700">Desarrollador Web</p>
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Sobre mí</h2>
          <p className="mb-8">Soy un desarrollador web con experiencia en ...</p>
          <h3 className="text-xl font-bold mb-4">Habilidades</h3>
          <ul className="flex flex-wrap justify-center lg:justify-start space-x-4">
            {skills.map((skill) => (
              <li key={skill.id} className="bg-gray-200 px-4 py-2 rounded mb-2">
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
