
import React, { useState } from "react";
import './component.css';

const Photography = () => {
  const photos = [
    { id: 1, image: "/photos/rosehib.jpg" },
    { id: 2, image: "/photos/helipad.jpg"},
    { id: 3, image: "/photos/moon.jpg"},
    { id: 4, image: "/photos/lamp.jpg"},
    { id: 5, image: "/photos/door.jpg"},
    { id: 6, image: "/photos/build.jpg" },
    { id: 7, image: "/photos/sanpoo.jpg"},
    { id: 8, image: "/photos/flowpot.jpg"},
    { id: 9, image: "/photos/door.jpg"},
    { id: 10, image: "/photos/win.jpg"},
    { id: 8, image: "/photos/agepoo.jpg"},
    { id: 9, image: "/photos/pattern.jpg"},
    { id: 10, image: "/photos/running.jpg"},
    { id: 11, image: "/photos/gate.jpg"},
    { id: 12, image: "/photos/greenor.jpg"},
    { id: 13, image: "/photos/parr.jpg"},
    { id: 14, image: "/photos/parr2.jpg"},
    { id: 15, image: "/photos/parr3.jpg"},
  ];
 const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <section className="photography-section">
      <h2 className="photo-heading">Photography</h2>

      <div className="photo-grid">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="photo-card"
            onClick={() => openModal(photo)}
          >
            <img src={photo.image} alt="" className="photo-img" />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedPhoto && (
        <div className="photo-modal" onClick={closeModal}>
          <div
            className="photo-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedPhoto.image} alt="" />
            <button className="close-btn" onClick={closeModal}>
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Photography;