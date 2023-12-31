import { IMAGES } from "../assets/assets";

export const cultureImages = [
  require("../assets/culture_images/image1.jpeg"),
  require("../assets/culture_images/image2.jpeg"),
  require("../assets/culture_images/image3.jpeg"),
  require("../assets/culture_images/image4.jpeg"),
  require("../assets/culture_images/image5.jpeg"),
];

export const sliderCultureImages = [
  "https://websitevideos2020.s3.ap-south-1.amazonaws.com/career-web-site-immages/IMG_20230803_212056+(1).jpg",
  "https://websitevideos2020.s3.ap-south-1.amazonaws.com/career-web-site-immages/IMG_20230913_125259.jpg",
  "https://websitevideos2020.s3.ap-south-1.amazonaws.com/career-web-site-immages/IMG_20230921_205815.jpg",
  "https://websitevideos2020.s3.ap-south-1.amazonaws.com/career-web-site-immages/IMG_20230921_205843.jpg",
  "https://websitevideos2020.s3.ap-south-1.amazonaws.com/career-web-site-immages/IMG_20231005_103321.jpg",
  "https://websitevideos2020.s3.ap-south-1.amazonaws.com/career-web-site-immages/IMG_20231005_103332.jpg",
  "https://websitevideos2020.s3.ap-south-1.amazonaws.com/career-web-site-immages/IMG_20231005_103341.jpg",
  "https://websitevideos2020.s3.ap-south-1.amazonaws.com/career-web-site-immages/IMG_20231005_103354.jpg",
  "https://websitevideos2020.s3.ap-south-1.amazonaws.com/career-web-site-immages/IMG_20231010_145341.jpg",
  "https://websitevideos2020.s3.ap-south-1.amazonaws.com/career-web-site-immages/IMG_20231010_145353.jpg",
  "https://websitevideos2020.s3.ap-south-1.amazonaws.com/career-web-site-immages/IMG_20231010_145422.jpg",
  "https://websitevideos2020.s3.ap-south-1.amazonaws.com/career-web-site-immages/IMG_20231010_145724.jpg",
  "https://websitevideos2020.s3.ap-south-1.amazonaws.com/career-web-site-immages/IMG_8829.JPG",
  "https://websitevideos2020.s3.ap-south-1.amazonaws.com/career-web-site-immages/IMG_8927.JPG",
  "https://websitevideos2020.s3.ap-south-1.amazonaws.com/career-web-site-immages/Screenshot_2023-10-05-10-51-13-92_1c337646f29875672b5a61192b9010f9.jpg",
  "https://websitevideos2020.s3.ap-south-1.amazonaws.com/career-web-site-immages/IMG_20230803_212056.jpg",
];

const img = (name) => name && require(`../assets/testimonial_images/${name}`);

export const testimonials = [
  {
    id: 1,
    avatar: img("prithwish_chakraborty.jpg") || IMAGES.userImg,
    name: "Prithwish Chakraborty",
    location: "India",
    text: "The work environment is quite cool here. Everyone here is quite supportive and even contributes when you are stuck at your work. It's fun working here. You can also play games here after you are done with your work.",
    stars: 5,
  },
  {
    id: 2,
    avatar: img("samiran_subba.jpg") || IMAGES.userImg,
    name: "Samiran Subba ",
    location: "India",
    text: "FinnovationZ is probably the best place to work, learn and grow.",
    stars: 5,
  },
  {
    id: 3,
    avatar: img("vishwanath_kshirsagar.jpg") || IMAGES.userImg,
    name: "Vishwanath Kshirsagar",
    location: "India",
    text: "Working at Finnovation has been an incredibly rewarding experience. The supportive culture, opportunities for growth, and emphasis on innovation make it an ideal place to build a career. I've had the chance to collaborate with talented colleagues and contribute to impactful projects is great journey, and i am enjoying this journey.",
    stars: 5,
  },
  {
    id: 4,
    avatar: img("ritam_roy.jpeg") || IMAGES.userImg,
    name: "Ritam Roy",
    location: "India",
    text: "I have been a proud member of this company for over two years, and I can confidently say that it's been an incredible journey. This organization has created a nurturing and dynamic environment where employees can thrive. Also the organization's unwavering support, dedication to employee growth, and commitment to innovation have been truly commendable. Moreover, our flat organizational structure, where there is no hierarchy, fosters an atmosphere of openness and encourages everyone's input. That's why I am grateful to be part of a company so here's to many more years of success and growth together!",
    stars: 5,
  },
  {
    id: 5,
    avatar: img("") || IMAGES.userImg,
    name: "omkar korke",
    location: "India",
    text: " A positive and inclusive company culture. A good work-life balance. Organizations foster a culture of innovation and creativity and last one job satisfaction",
    stars: 4,
  },
  {
    id: 6,
    avatar: img("praveen_kumar.jpg") || IMAGES.userImg,
    name: "Praveen Kumar Pilli",
    location: "India",
    text: "I love the work culture the management is handling and it is supportive and respectful. Office culture gives us the best way to handle and  maintain a balance between work and personal life. As an employee I saw good career growth in my work experience. Company provides the benefits and encourages the new talent. ",
    stars: 5,
  },
  {
    id: 7,
    avatar: img("amit_tripathi.jpg") || IMAGES.userImg,
    name: "Amit Tripathi",
    location: "India",
    text: "Working with full freedom and creativity.",
    stars: 5,
  },
  {
    id: 8,
    avatar: img("amir_rizwan.png") || IMAGES.userImg,
    name: "Amir Rizwan",
    location: "India",
    text: "Learning Opportunity, Personal Growth, Stress Free Environment, Supportive Team Member, Value Our Suggestion, Fun with Team Members and many more.",
    stars: 5,
  },
];

export const reasonsToJoin = [
  {
    icon: IMAGES.accomodation,
    title: "Save Your Maximum Salary",
    desc: "Free accomodation.",
  },
  {
    icon: IMAGES.build,
    title: "Join Our “Build From Rural Mission”",
    desc: "Work With Nature.",
  },
  {
    icon: IMAGES.salary,
    title: "Best in the Industry Salary.",
    desc: "Best package in the market.",
  },
  {
    icon: IMAGES.days,
    title: "5 Days Work Week.",
    desc: "Saturday and Sunday off.",
  },
];
