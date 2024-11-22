import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      featuredImage: image(),
      pubDate: z.coerce.date(),
    }),
});

// const postsCollection = defineCollection({
//   type: "content",
//   schema: ({ image }) =>
//     z.object({
//       title: z.string(),
//       description: z.string(),
//       pubDate: z.coerce.date(),
//       updatedDate: z.coerce.date().optional(),
//       featuredImage: image(),
//     }),
// });

export const collections = {
  diaries: postsCollection,
  projects: postsCollection,
};
