const Footer = ({ name }) => {
  return (
    <div>
      {name && `My name is ${name}, and `}
      today I'm learning about react
    </div>
  );
};

export default Footer;
