import React from "react";

const Cat = () => (
  <img
    width="300px"
    alt="sad cat"
    src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/164719801/original/419251e95b26ea2594bcee9b61aa215bad7e8c8f/paint-your-pet-as-the-cryig-cat-meme.jpg"
  />
);
const Dog = () => (
  <img
    width="300px"
    alt="sad shiba"
    src="https://play-lh.googleusercontent.com/xlnwmXFvzc9Avfl1ppJVURc7f3WynHvlA749D1lPjT-_bxycZIj3mODkNV_GfIKOYJmG"
  />
);

export default { variants: [Cat, Dog] };
