const Footer = () => {
  let date = new Date();

  return (
    <footer className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-center">
        <span className="text-gray-400">Copyright @{date.getFullYear()}</span>
      </div>
    </footer>
  );
};

export default Footer;
