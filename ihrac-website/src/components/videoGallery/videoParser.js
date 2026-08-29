// src/components/videoGallery/videoParser.js

/**
 * Builds a Cloudinary thumbnail from a video URL when possible.
 * Falls back to a solid navy poster if not a Cloudinary URL.
 */
function getCloudinaryThumbnail(url) {
  if (!url || typeof url !== "string") return null;

  // video/upload/.../file.mp4  →  image/upload/so_0/.../file.jpg
  if (url.includes("res.cloudinary.com") && url.includes("/video/upload/")) {
    return url
      .replace("/video/upload/", "/image/upload/so_0,w_800,h_500,c_fill,q_auto,f_auto/")
      .replace(/\.(mp4|webm|mov)(\?.*)?$/i, ".jpg");
  }

  return null;
}

export function parseVideoLink(url, index) {
  const sectors = [
    "Healthcare Field Operations",
    "Eco Restoration Drive",
    "Digital Education Camp",
    "Women's Leadership Summit",
    "Rural Clean Water Initiative",
    "Community Nutrition Outreach",
  ];

  const sector = sectors[index % sectors.length];
  const thumbnailUrl =
    getCloudinaryThumbnail(url) ||
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop";

  return {
    id: `video-${index}`,
    videoUrl: url, // direct Cloudinary mp4/webm
    thumbnailUrl,
    title: `${sector}: Field Briefing`,
    category: index % 2 === 0 ? "Impact Documentary" : "Awareness Campaign",
  };
}