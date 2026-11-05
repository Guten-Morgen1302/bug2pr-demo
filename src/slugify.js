// Turns a post title into a URL slug. v1 clients store these slugs as URLs.
const clean = (s) => s.replace(/^-+|-+$/g, '');
export function slugify(title) {
  const lower = String(title).toLowerCase();
  // v1 behaviour: slugs that already work must stay exactly the same.
  const ascii = clean(lower.replace(/[^a-z0-9]+/g, '-'));
  if (ascii !== '') return ascii;
  // Fallback only when v1 gave an empty slug: keep unicode letters/digits.
  return clean(lower.replace(/[^\p{L}\p{N}]+/gu, '-'));
}
