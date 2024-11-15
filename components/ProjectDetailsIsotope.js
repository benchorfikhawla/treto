"use client";
import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";

const ProjectDetailsIsotope = ({ images }) => {
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".mil-portfolio-grid", {
        itemSelector: ".mil-grid-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".mil-grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 500);
  }, []);

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: "*" })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  return (
    <div className="mil-portfolio-grid mil-mb-60">
      <div className="grid-sizer" />
      {images.map((image, index) => (
        <div key={index} className={`mil-grid-item ${image.category}`}>
          <div className="mil-project-img mil-square mil-mb-30">
            <a href={image.url} className="mfp-image">
            <img key={index} src={`${apiUrl}${image}`}  alt="image of poject"/> 
             {console.log(image)}  {/* Ensure image path is correct */}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectDetailsIsotope;
