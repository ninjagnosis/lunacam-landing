import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { postSchema } from '@ninjainfosys/site-kit/lib/blog-schema';

// Posts are Markdown files in src/content/blog. The build fails on any
// missing or wrong field. No author byline: posts are by LunaCam.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) => postSchema.extend({ cover: image().optional() }),
});

export const collections = { blog };
