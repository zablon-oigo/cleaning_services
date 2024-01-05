import React, { useState, useEffect } from 'react';
import ReviewsCard from '../layout/ReviewsCard'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import johnsmith from '../assets/reviews/johnsmith.jpg';
import leah from '../assets/reviews/leah.jpg';
import jane from '../assets/reviews/jane.jpg';
import andrew from '../assets/reviews/andrew.jpg';
import juan from '../assets/reviews/juan.jpg';
import john from '../assets/reviews/john.jpg';

function Reviews() {
  useEffect(() => {
    AOS.init();
 }, []);
    const reviewsData = [
        {
          desc: "Absolutely love Wee Clean Services! The attention to detail in their cleaning is impressive. The team creates a welcoming and hygienic atmosphere that's truly refreshing.",
          img: johnsmith,
          title: 'John Smith'
        },
        {
          desc: "Recently hired Wee Clean Services and couldn't be happier! Their commitment to excellence is evident in every corner of my space. A top-notch cleaning service that I highly recommend.",
          img: john,
          title: 'John Doe'
        },
        {
          desc: "Wee Clean Services is a hidden gem for maintaining a spotless home. The quality of their cleaning is exceptional, making it the ideal place to start your day or relax after work.",
          img: jane,
          title: 'Jane Doe'
        },
        {
          desc: "Becoming a regular with Wee Clean Services was the best decision. The dedicated team, cozy ambiance, and consistently excellent service make it a true haven. A must for cleanliness enthusiasts!",
          img: juan,
          title: 'Juan Peter'
        },
        {
          desc: "Had the best cleaning experience with Wee Clean Services! The attention to detail is remarkable, and the team ensures a pristine and memorable service. Can't wait to schedule more sessions!",
          img: leah,
          title: 'Leah Samwel'
        },
        {
          desc: "Wee Clean Services is my happy place for a clean and organized home. The service is outstanding, the team is impeccable, and the overall vibe is perfect. A must-try for any cleanliness enthusiast!",
          img: andrew,
          title: 'Andrew Kings'
        },
      ];
      const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
      useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
      const gridLayout = (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-aos='fade-left'>
          {reviewsData.map((review, index) => (
            <ReviewsCard key={index} desc={review.desc} img={review.img} title={review.title} />
          ))}
        </div>
      );
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
      
  return (
    <div className="md:min-h-screen min-h-[60vh] md:px-14 md:py-30 px-5 py-5 bg-gradient-to-b from-yellow-600 to-yellow-300">
    <h2 className="md:text-5xl text-center text-3xl font-semibold mt-10 mb-10 text-white">Customer's Reviews</h2>
    {isMobile ? (
      <Slider {...settings}>
        {reviewsData.map((review, index) => (
          <ReviewsCard key={index} desc={review.desc} img={review.img} title={review.title} />
        ))}
      </Slider>
    ) : (
      gridLayout
    )}
  </div>
  )
}

export default Reviews