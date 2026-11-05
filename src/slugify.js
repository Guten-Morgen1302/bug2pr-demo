// Turns a post title into a URL slug. v1 clients store these slugs as URLs.
export function slugify(title) {
  return String(title)
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '');
}
