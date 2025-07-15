import React, { useState } from "react";

export const Gallery = () => {
  const images = [
  "/gallery1.jpeg",
  "/gallery2.jpeg",
  "/gallery3.jpeg",
  "/gallery4.jpeg",
  "/gallery5.jpeg",
  "/gallery6.jpeg",
  "/gallery7.jpeg",
  "/gallery8.jpeg",
  "/gallery9.jpeg",
  "/gallery10.jpeg",
  "/gallery11.jpeg",
  "/gallery12.jpeg",
  "/gallery13.jpeg",
  "/gallery14.jpeg",
  "/gallery15.jpeg",
  "/gallery16.jpeg",
  "/gallery17.jpeg",
  "/gallery18.jpeg",
  "/gallery19.jpeg",
  "/gallery20.jpeg",
];


  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-8">
          Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow hover:shadow-lg transition cursor-pointer"
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-3xl w-full px-4">
              <img
                src={selectedImage}
                alt="Enlarged"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
    