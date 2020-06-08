import React from 'react';
import './DemoSlideShow.css';
import SlideshowGallery from './GallerySlideShow';

// import img1 from './imgSlide/background2.jpg';
// import img2 from './imgSlide/background3.jpg';
// import img3 from './imgSlide/background4.jpg';
// import img4 from './imgSlide/background5.jpg';
// import img5 from './imgSlide/background-ngang1.jpg';
// import img6 from './imgSlide/background-dark2.jpg';

class DemoSlideShow extends React.Component {
  render() {
    const { product } = this.props;
    // console.log(product);
    const img1 = product.imageSlide1;
    const img2 = product.imageSlide2;
    const caption1 = product.name;
    const collection = [
      { src: img1, caption: caption1 },
      { src: img2, caption: caption1 },
      // { src: img3, caption: "Caption three" },
      // { src: img4, caption: "Caption four" },
      // { src: img5, caption: "Caption five" },
      // { src: img6, caption: "Caption six" },
    ];
    return (
      <div className="demoSlide">
        <SlideshowGallery
          input={collection}
          ratio={`3:2`}
          mode={`manual`}
        />

        {/* <SlideshowGallery
          input={collection}
          ratio={`3:2`}
          mode={`automatic`}
          timeout={`3000`}
        /> */}
      </div>
    );
  }
}

export default DemoSlideShow;