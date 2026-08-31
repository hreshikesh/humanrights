// src/components/videoGallery/independenceDay/independenceDayVideoData.js

export const independenceDayVideos = [
  {
    id: 1,
    src: "https://res.cloudinary.com/k4uklwi4/video/upload/v1788159577/WhatsApp_Video_2026-08-31_at_12.2_wlhrai.mp4",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/k4uklwi4/video/upload/v1788159587/WhatsApp_Video_2026-08-31_at_12.26.43_PM_nxe21y.mp4",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/k4uklwi4/video/upload/v1788159590/WhatsApp_Video_2026-08-31_at_12.27.22_PM_jfpdtb.mp4",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/k4uklwi4/video/upload/v1788159606/WhatsApp_Video_2026-08-31_at_12.27.40_PM_l5b4fg.mp4",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/k4uklwi4/video/upload/v1788159617/WhatsApp_Video_2026-08-31_at_12.27.41_k9rdbh.mp4",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/k4uklwi4/video/upload/v1788159619/WhatsApp_Video_2026-08-31_at_12.27.23_PM_iexscq.mp4",
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/k4uklwi4/video/upload/v1788159621/WhatsApp_Video_2026-08-31_at_12.27.4_w0k6up.mp4",
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/k4uklwi4/video/upload/v1788159624/WhatsApp_Video_2026-08-31_at_12.27._hgmw06.mp4",
  },
  {
    id: 9,
    src: "https://res.cloudinary.com/k4uklwi4/video/upload/v1788159628/WhatsApp_Video_2026-08-31_at_12.27.40_P_bdwgtj.mp4",
  },
  {
    id: 10,
    src: "https://res.cloudinary.com/k4uklwi4/video/upload/v1788159628/WhatsApp_Video_2026-08-31_at_12.27.42_PM_u8m00z.mp4",
  },
  {
    id: 11,
    src: "https://res.cloudinary.com/k4uklwi4/video/upload/v1788159636/WhatsApp_Video_2026-08-31_at_12_mgdafx.mp4",
  },
  {
    id: 12,
    src: "https://res.cloudinary.com/k4uklwi4/video/upload/v1788159674/WhatsApp_Video_2026-08-31_at_nxgtn5.mp4",
  },
  {
    id: 13,
    src: "https://res.cloudinary.com/k4uklwi4/video/upload/v1788159871/WhatsApp_Video_2026-08-31_pvqbbf.mp4",
  },
];

export function getVideoPoster(url) {
  if (!url || typeof url !== "string") return "";
  if (url.includes("res.cloudinary.com") && url.includes("/video/upload/")) {
    return url
      .replace(
        "/video/upload/",
        "/video/upload/so_0,w_800,h_450,c_fill,q_auto,f_auto/"
      )
      .replace(/\.(mp4|webm|mov)(\?.*)?$/i, ".jpg");
  }
  return "";
}

export function getVideoSrc(url) {
  if (!url || typeof url !== "string") return url;
  if (url.includes("res.cloudinary.com") && url.includes("/video/upload/")) {
    if (/\/upload\/[^/]*q_auto/.test(url)) return url;
    return url.replace(
      "/video/upload/",
      "/video/upload/f_auto,q_auto:eco,vc_auto/"
    );
  }
  return url;
}