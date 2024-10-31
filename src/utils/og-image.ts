import { getImage } from "astro:assets";
import type { ImageMetadata } from "astro";

export async function processOgImage(
  featuredImage: string | undefined,
  baseUrl: string,
): Promise<string> {
  if (!featuredImage) return "";

  try {
    // Remove the @ symbol if it exists at the start of the path
    const imagePath = featuredImage.startsWith("@")
      ? featuredImage.slice(1)
      : featuredImage;

    // Dynamic import of the image
    const image = await import(`../assets/placeholder-square.webp`);

    // Process the image
    const optimizedImage = await getImage({
      src: image.default,
      width: 1200, // recommended OG image width
      height: 630, // recommended OG image height
      format: "png", // OG images work best with PNG
    });

    // Create full URL for the image
    const imageUrl = new URL(optimizedImage.src, baseUrl).href;
    return imageUrl;
  } catch (error) {
    console.error("Error processing OG image:", error);
    return "";
  }
}
