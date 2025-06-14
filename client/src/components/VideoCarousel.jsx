// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const videoSlides = [
//   {
//     src: "/videos/drive1.mp4",
    
//   }
  
// ];

// const VideoCarousel = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 700,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 6000,
//     arrows: false,
//   };

//   return (
//     <Slider {...settings}>
//       {videoSlides.map((item, index) => (
//         <div
//           key={index}
//           className="w-full h-[300px] md:h-[400px] lg:h-[500px] relative"
//         >
//           <video
//             className="w-full h-full object-cover rounded-xl"
//             src={item.src}
//             autoPlay
//             loop
//             muted
//             playsInline
//           />
//           <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
//             <h2 className="text-white text-2xl md:text-4xl font-bold text-center px-4 drop-shadow-lg">
//               {item.caption}
//             </h2>
//           </div>
//         </div>
//       ))}
//     </Slider>
//   );
// };

// export default VideoCarousel;

// src/components/VideoCarousel.jsx
import React from "react";

const VideoCarousel = () => {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] mb-10">
      <video
        className="w-full h-full object-cover rounded-xl"
        src="/videos/drive1.mp4" // ✅ Make sure this is in /public/videos/
        autoPlay
        loop
        muted
        playsInline
      />
      
    </div>
  );
};

export default VideoCarousel;

