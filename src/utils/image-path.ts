/**
 * Helper function to get the correct image path considering basePath
 * For production (GitHub Pages), it includes the basePath
 * For development, it returns the path as is
 */
export function getImagePath(path: string): string {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  // Check if we're in production and basePath is configured
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  // Return path with basePath if in production
  return basePath ? `${basePath}/${cleanPath}` : `/${cleanPath}`;
}
