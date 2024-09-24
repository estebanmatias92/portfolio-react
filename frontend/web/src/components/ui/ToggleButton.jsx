import { useState } from 'react';

const ToggleButton = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <button onClick={handleClick}>{isActive ? 'Activo' : 'Inactivo'}</button>
    </div>
  );
};

export default ToggleButton;
