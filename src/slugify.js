// Turns a post title into a URL slug. v1 clients store these slugs as URLs.
// Titles that already produce a non-empty ASCII slug must keep that exact output;
// only titles that would have produced '' fall back to a unicode-aware slug.
const trim = (s) => s.replace(/^-+|-+$/g, '');
export function slugify(title) {
  const t = String(title).toLowerCase();
  const ascii = trim(t.replace(/[^a-z0-9]+/g, '-'));
  if (ascii !== '') return ascii;
  return trim(t.replace(/[^\p{L}\p{N}]+/gu, '-'));
}
