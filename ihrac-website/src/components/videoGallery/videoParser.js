import { getVideoPoster } from "./videoGalleryData";

export function parseVideoLink(link, index) {
  if (typeof link === "object" && link !== null) {
    return {
      id: link.id || index + 1,
      videoUrl: link.src || link.videoUrl || "",
      thumbnailUrl: link.poster || link.thumbnailUrl || getVideoPoster(link.src || link.videoUrl),
      title: link.title || `Field Record #${index + 1}`
    };
  }

  return {
    id: index + 1,
    videoUrl: link,
    thumbnailUrl: getVideoPoster(link),
    title: `Field Record #${index + 1}`
  };
}