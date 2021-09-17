import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

Album.propTypes = {
  album: PropTypes.object.isRequired,
};

function Album({ album }) {
  return (
    <div className="album">
      <div>
        <img className="image" src={album.image} alt={album.title} />
      </div>
      <p className="title">{album.title}</p>
    </div>
  );
}

export default Album;
