import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path";
import "dotenv/config";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const FOLDER = "images"; // ← your folder path
const OUT_FILE = path.resolve("src/components/gallery/galleryPageData.js");

async function fetchAllInFolder(folder) {
  const urls = [];
  let nextCursor = undefined;

  do {
    const res = await cloudinary.search
      .expression(`folder:${folder} AND resource_type:image`)
      .sort_by("public_id", "asc")
      .max_results(500)
      .next_cursor(nextCursor)
      .execute();

    for (const r of res.resources) {
      // Full delivery URL
      urls.push(r.secure_url);
      // Or build yourself:
      // urls.push(
      //   cloudinary.url(r.public_id, { resource_type: "image", secure: true })
      // );
    }

    nextCursor = res.next_cursor;
    console.log(`Fetched ${urls.length} so far...`);
  } while (nextCursor);

  return urls;
}

async function main() {
  const urls = await fetchAllInFolder(FOLDER);

  const file = `// AUTO-GENERATED — run: node scripts/fetchCloudinaryImages.js
// Folder: ${FOLDER}
// Count: ${urls.length}

export const independenceDayImages = ${JSON.stringify(urls, null, 2)};

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
`;

  fs.writeFileSync(OUT_FILE, file, "utf8");
  console.log(`\\n✓ Wrote ${urls.length} URLs → ${OUT_FILE}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});