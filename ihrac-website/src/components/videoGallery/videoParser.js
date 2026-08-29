// videoParser.js
export function parseVideoLink(url, index) {
  let videoId = "";
  let embedUrl = url;
  let thumbnailUrl = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800";
  let platform = "Direct Stream";

  // YouTube Parser
  const ytReg = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/;
  const ytMatch = url.match(ytReg);

  if (ytMatch) {
    videoId = ytMatch[1];
    embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    // Fallback if maxres is missing
    const img = new Image();
    img.src = thumbnailUrl;
    if (img.width === 120) {
      thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    }
    platform = "YouTube";
  } else {
    // Vimeo Parser
    const vimeoReg = /vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
    const vimeoMatch = url.match(vimeoReg);
    if (vimeoMatch) {
      videoId = vimeoMatch[1];
      embedUrl = `https://player.vimeo.com/video/${videoId}?autoplay=1`;
      thumbnailUrl = `https://vumbnail.com/${videoId}.jpg`;
      platform = "Vimeo";
    }
  }

  // Curated Sector generation
  const sectors = [
    "Healthcare Field Operations",
    "Eco Restoration Drive",
    "Digital Education Camp",
    "Women's Leadership Summit",
    "Rural Clean Water Initiative",
    "Community Nutrition Outreach"
  ];
  const sector = sectors[index % sectors.length];

  return {
    id: `video-${index}`,
    originalUrl: url,
    embedUrl,
    thumbnailUrl,
    platform,
    title: `${sector}: Ground Briefing`,
    category: index % 2 === 0 ? "Impact Documentary" : "Awareness Campaign",
    date: `Action Dossier #${100 + index + 1}`
  };
}