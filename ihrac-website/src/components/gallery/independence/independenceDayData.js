export const independenceDayImages = [
  "https://res.cloudinary.com/pmmjjtib/image/upload/v1788155379/WhatsApp_Image_2026-08-31_at_11.12.51_AM_1.jpg",
  "https://res.cloudinary.com/pmmjjtib/image/upload/v1788155378/WhatsApp_Image_2026-08-31_at_11.12.49_AM.jpg",
  "https://res.cloudinary.com/pmmjjtib/image/upload/v1788155377/WhatsApp_Image_2026-08-31_at_11.12.46_AM_1.jpg",
  "https://res.cloudinary.com/pmmjjtib/image/upload/v1788155377/WhatsApp_Image_2026-08-31_at_11.12.41_AM.jpg",
  "https://res.cloudinary.com/pmmjjtib/image/upload/v1788155376/WhatsApp_Image_2026-08-31_at_11.12.41_AM_1.jpg",
  "https://res.cloudinary.com/pmmjjtib/image/upload/v1788155376/WhatsApp_Image_2026-08-31_at_11.12.40_AM.jpg",
  "https://res.cloudinary.com/pmmjjtib/image/upload/v1788155375/WhatsApp_Image_2026-08-31_at_11.13.05_AM.jpg",
  "https://res.cloudinary.com/pmmjjtib/image/upload/v1788155371/WhatsApp_Image_2026-08-31_at_11.13.01_AM_1.jpg",
  "https://res.cloudinary.com/pmmjjtib/image/upload/v1788155371/WhatsApp_Image_2026-08-31_at_11.12.59_AM_3.jpg",
  "https://res.cloudinary.com/pmmjjtib/image/upload/v1788155362/WhatsApp_Image_2026-08-31_at_11.12.54_AM_2.jpg",
  "https://res.cloudinary.com/pmmjjtib/image/upload/v1788155363/WhatsApp_Image_2026-08-31_at_11.12.57_AM.jpg",
  "https://res.cloudinary.com/pmmjjtib/image/upload/v1788155362/WhatsApp_Image_2026-08-31_at_11.12.55_AM.jpg",
  "https://res.cloudinary.com/pmmjjtib/image/upload/v1788155362/WhatsApp_Image_2026-08-31_at_11.12.53_AM_3.jpg",
];


export const getThumb = (url) => {
  if (
    typeof url === "string" &&
    url.includes("res.cloudinary.com") &&
    url.includes("/image/upload/")
  ) {
    return url.replace(
      "/image/upload/",
      "/image/upload/f_auto,q_auto:eco,w_800,c_fill,g_auto/"
    );
  }
  return url;
};