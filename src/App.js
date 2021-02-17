import React from "react";
import PropTypes from "prop-types";

// props.name == { name }
function Movie({ name, image }) {
  return <h1>{name}</h1>;
}

Movie.propTypes = {
  name: PropTypes.string.isRequired,
};

const menu = [
  {
    key: 1,
    name: "Sex on the City",
    image: "",
  },
  {
    key: 2,
    name: "Home Alone",
    image: "",
  },
  {
    key: 3,
    name: "Avengers",
    image: "",
  },
  {
    key: 4,
    name: "My Life",
    image: "",
  },
  {
    key: 5,
    name: 12,
    image: "",
  },
];

const renderMovie = (ticket) => {
  return (
    <Movie key={ticket.key} name={ticket.name} image={ticket.image}></Movie>
  );
};

function App() {
  return (
    <div>
      Fuck you !!
      {menu.map(renderMovie)}
    </div>
  );
}

export default App;
