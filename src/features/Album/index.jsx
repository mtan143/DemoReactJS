import React from "react";
import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      title: "NHẠC TRẺ",
      image:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/e/d/e/5/ede5a886defe9557862c03a8d23b534b.jpg",
    },
    {
      id: 2,
      title: "NHẠC BOLERO",
      image:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/2/d/d/d/2ddd93814aa2fb28a103f3e3eea5cde3.jpg",
    },
    {
      id: 3,
      title: "NHẠC CÁCH MẠNG",
      image:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/d/1/2/3/d12364acdd8c4bec57629d3bd281c66f.jpg",
    },
    {
      id: 4,
      title: "NHẠC SỐNG",
      image:
        "https://photo-playlist-zmp3.zadn.vn/s2/dailymix?src=HavwqN7EvKCI1oYSFOdq0r9DR9njYVO30bG-XslPg0412sE1FTB-LrqCDTCmq_rG3G5Wrco9zmKR22dIOC-b3b1AO8ehc-nP7GOdcsk9fayTK2URQz_j6LO5SSiwY-P2KbSgmZgFiX40Kol3O8wtG5jHBfGxbEfK1LrenZ3Vg1rQ5ZoFO9BaMajMBiKXahHQ6bP-sNVVuLyPLoxSTjZZ3XnMA8vtsxTV5m0hYY_Uibb30ZA3Qew-7n49US4ZqFLBM5WqZMJ1jLuI7JJRPCQr20eOAuXZnxSF2nKetZ6RlrrVHdFKCipiLLeU8T8snRzC1Lvstdq&cv=1&size=thumb/240_240",
    },
  ];

  return <AlbumList albumList={albumList} />;
}

export default AlbumFeature;
