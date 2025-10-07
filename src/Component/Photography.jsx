import React from "react";
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
    { id: 9, image: "/photos/me2.jpg"},
    { id: 10, image: "/photos/pattern.jpg"},
    { id: 11, image: "/photos/running.jpg"},
    { id: 12, image: "/photos/gate.jpg"},
    { id: 13, image: "/photos/pattern.jpg"},
  ];

  return (
    <section className="photography-section">
      <h2 className="photo-heading">Photography</h2>
      <div className="photo-grid">
        {photos.map((photo) => (
          <div key={photo.id} className="photo-card">
            <img src={photo.image} alt={photo.title} className="photo-img" />
            <p className="photo-title">{photo.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Photography;
