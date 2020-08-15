import React from "react";
import PropTypes from "prop-types";

function Movie({id, title, poster, actors, year}) {
    return (
        <h4>{title}</h4>
    );
}

Movie.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    actors: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired
}

export default Movie;