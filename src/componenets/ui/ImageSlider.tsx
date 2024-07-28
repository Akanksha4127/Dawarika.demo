import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

const ImageSlider = () => {
  const ImagesForSlider = [
    {
      // demo_image_for_texting_image_slideshow
      id: 0,
      url: "https://res.cloudinary.com/dr5lcwbsx/image/upload/v1711808780/WhatsApp_Image_2024-03-30_at_19.55.33_55cd7e68_aze2fx.jpg",
    },
    {
      // demo_image_for_texting_image_slideshow
      id: 1,
      url: "https://res.cloudinary.com/dr5lcwbsx/image/upload/v1711808780/WhatsApp_Image_2024-03-30_at_19.55.33_82d7df6f_sm2xoj.jpg",
    },
    {
      // demo_image_for_texting_image_slideshow
      id: 2,
      url: "https://res.cloudinary.com/dr5lcwbsx/image/upload/v1708599383/samples/landscapes/girl-urban-view.jpg",
    },
    {
      // demo_image_for_texting_image_slideshow
      id: 3,
      url: "https://res.cloudinary.com/dr5lcwbsx/image/upload/v1708599386/samples/landscapes/architecture-signs.jpg",
    },
    {
      // demo_image_for_texting_image_slideshow
      id: 4,
      url: "https://res.cloudinary.com/dr5lcwbsx/image/upload/v1708599387/samples/landscapes/beach-boat.jpg",
    },
    {
      // demo_image_for_texting_image_slideshow
      id: 5,
      url: "https://res.cloudinary.com/dr5lcwbsx/image/upload/v1708599391/samples/landscapes/nature-mountains.jpg",
    },
    {
      // demo_image_for_texting_image_slideshow
      id: 6,
      url: "https://res.cloudinary.com/dr5lcwbsx/image/upload/v1708599382/samples/sheep.jpg",
    },
    {
      // demo_image_for_texting_image_slideshow
      id: 7,
      url: "https://res.cloudinary.com/dr5lcwbsx/image/upload/v1708599409/samples/coffee.jpg",
    },
    {
      // demo_image_for_texting_image_slideshow
      id: 8,
      url: "https://res.cloudinary.com/dr5lcwbsx/image/upload/v1711951292/20240330113008_IMG_6474_yjdnai.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0 ? true : false;
    const newIndex = isFirstSlide
      ? ImagesForSlider.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide =
      currentIndex === ImagesForSlider.length - 1 ? true : false;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <section
      className={`w-full flex justify-around items-center shadow-md shadow-black hover:shadow-lg hover:shadow-black duration-300 ease-in-out h-96`}
    >
      <div className={`w-full h-[400px] relative group`}>
        <div
          style={{
            backgroundImage: `url(${ImagesForSlider[currentIndex].url})`,
          }}
          className={`w-full h-full bg-center bg-cover duration-500`}
        ></div>
        {/* left arrow */}
        <div
          className={`hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black duration-200 ease-in-out`}
        >
          <ChevronLeft onClick={prevSlide} className={`h-8 w-8`} />
        </div>
        {/* right arrow */}
        <div
          className={`hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black duration-200 ease-in-out`}
        >
          <ChevronRight onClick={nextSlide} className={`h-8 w-8`} />
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
