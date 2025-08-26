import path from 'path';

const CONTENT_DIRECTORIES = {
  BLOG: path.join(process.cwd(), 'public/blog'),
  DOCS: path.join(process.cwd(), 'public/docs'),
  TUTORIALS: path.join(process.cwd(), 'public/tutorials'),
} as const;

export const BLOG_DIRECTORY = CONTENT_DIRECTORIES.BLOG;
export const DOCS_DIRECTORY = CONTENT_DIRECTORIES.DOCS;
export const TUTORIALS_DIRECTORY = CONTENT_DIRECTORIES.TUTORIALS;