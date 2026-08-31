
export const cloudinaryVideos = [
  "https://res.cloudinary.com/k4uklwi4/video/upload/v1788158663/WhatsApp_Video_2026-08-31_at_12.02_v7utal.mp4",
  "https://res.cloudinary.com/k4uklwi4/video/upload/v1788158619/WhatsApp_Video_2026-08-31_at_12.02.17_PM2_hnhaj9.mp4",
  "https://res.cloudinary.com/k4uklwi4/video/upload/v1788158506/WhatsApp_Video_2026-08-31_at_12_qwshng.mp4",
  "https://res.cloudinary.com/k4uklwi4/video/upload/v1788158490/WhatsApp_Video_2026-08-31_at_cgb2jl.mp4",
  "https://res.cloudinary.com/k4uklwi4/video/upload/v1788158487/WhatsApp_Video_2026-08-31_f7inne.mp4",
  "https://res.cloudinary.com/k4uklwi4/video/upload/v1788158485/WhatsApp_Video_2026-08-31_at_12.02.13_PM_xshjvc.mp4",
  "https://res.cloudinary.com/k4uklwi4/video/upload/v1788158475/WhatsApp_Video_2026-08-31_at_12.02.18_PM6_pge9iz.mp4",
  "https://res.cloudinary.com/k4uklwi4/video/upload/v1788158468/WhatsApp_Video_2026-08-31_at_12.02.18_PM5_daf8ko.mp4",
  "https://res.cloudinary.com/k4uklwi4/video/upload/v1788158455/WhatsApp_Video_2026-08-31_at_12.02.13_w9ru1c.mp4",
  "https://res.cloudinary.com/k4uklwi4/video/upload/v1788158454/WhatsApp_Video_2026-08-31_at_12.02.18_PM4_tmcp8c.mp4",
  "https://res.cloudinary.com/k4uklwi4/video/upload/v1788158453/WhatsApp_Video_2026-08-31_at_12.02.13_P_ttogyv.mp4",
  "https://res.cloudinary.com/k4uklwi4/video/upload/v1788158450/WhatsApp_Video_2026-08-31_at_12.02.1_rqk56c.mp4",
  "https://res.cloudinary.com/k4uklwi4/video/upload/v1788158442/WhatsApp_Video_2026-08-31_at_12.02.17_PM3_bnnvex.mp4",
  "https://res.cloudinary.com/k4uklwi4/video/upload/v1788158441/WhatsApp_Video_2026-08-_ivnirz.mp4",
  "https://res.cloudinary.com/k4uklwi4/video/upload/v1788158439/WhatsApp_Video_2026-08-31_at_12.02.17_PM1_w8cwrq.mp4",
  "https://res.cloudinary.com/k4uklwi4/video/upload/v1788158435/WhatsApp_Video_2026-08-31_at_12.02._qun1c0.mp4",
  "https://res.cloudinary.com/k4uklwi4/video/upload/v1788158424/WhatsApp_Video_2026-08-31_at_12.02.12_PM_hst7mf.mp4",
  "https://res.cloudinary.com/k4uklwi4/video/upload/v1788158409/WhatsApp_Video_2026-08-31_at_12.0_vcdyg0.mp4",
  "https://res.cloudinary.com/k4uklwi4/video/upload/v1788158407/WhatsApp_Video_2026-08-31_at_12._hmsgxs.mp4",
  "https://res.cloudinary.com/k4uklwi4/video/upload/v1788158405/WhatsApp_Video_2026-08-31_a_m2uk4t.mp4",
  "https://res.cloudinary.com/k4uklwi4/video/upload/v1788158398/WhatsApp_Video_2026-08-31_at_1_bz3zhu.mp4",
  "https://res.cloudinary.com/k4uklwi4/video/upload/v1788158398/WhatsApp_Video_2026-08_s40psr.mp4",
  "https://res.cloudinary.com/k4uklwi4/video/upload/v1788158388/WhatsApp_Video_2026-08-3_rtkdg3.mp4"
];

export const videoLinks = cloudinaryVideos;

/**
 * Extract JPG frame from Cloudinary video URL at 1s timestamp
 */
export function getVideoPoster(url, { width = 800, height = 450, quality = "auto" } = {}) {
  if (!url || typeof url !== "string") return "";

  if (url.includes("res.cloudinary.com") && url.includes("/video/upload/")) {
    return url
      .replace(
        "/video/upload/",
        `/video/upload/so_1,f_jpg,q_${quality},w_${width},h_${height},c_fill/`
      )
      .replace(/\.(mp4|webm|mov)(\?.*)?$/i, ".jpg");
  }

  return "";
}

export const videoGalleryItems = cloudinaryVideos.map((src, index) => ({
  id: index + 1,
  src,
  poster: getVideoPoster(src),
  title: `Field Operation Video ${index + 1}`
}));