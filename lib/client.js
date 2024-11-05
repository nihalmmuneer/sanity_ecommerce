import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "5vba64yi",
  dataset: "production",
  apiVersion: "2024-11-05",
  useCdn: true,
  token: (process.env.NEXT_PUBLIC_SANITY_API_KEY)
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
