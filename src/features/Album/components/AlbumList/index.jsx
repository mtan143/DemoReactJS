import React from "react";
import Album from "./../Album/index";
import "./style.scss";

AlbumList.propTypes = {};

function AlbumList({ albumList }) {
  return (
    <div>
      <ul className="albumList">
        {albumList.map((album) => (
          <li key={album.id}>
            <Album album={album} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlbumList;
