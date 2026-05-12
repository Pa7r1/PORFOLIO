/**
 * Converts any YouTube URL to a privacy-enhanced embed URL.
 * Accepts: watch?v=, youtu.be/, /embed/, /shorts/
 * Returns null if the URL is not a recognized YouTube format.
 */
export function toYoutubeEmbed(url: string): string | null {
  try {
    const u = new URL(url);

    let videoId: string | null = null;

    if (u.hostname === "youtu.be") {
      videoId = u.pathname.slice(1).split("?")[0];
    } else if (
      u.hostname === "www.youtube.com" ||
      u.hostname === "youtube.com" ||
      u.hostname === "www.youtube-nocookie.com"
    ) {
      if (u.pathname.startsWith("/embed/")) {
        videoId = u.pathname.replace("/embed/", "").split("?")[0];
      } else if (u.pathname.startsWith("/shorts/")) {
        videoId = u.pathname.replace("/shorts/", "").split("?")[0];
      } else {
        videoId = u.searchParams.get("v");
      }
    }

    if (!videoId) return null;
    return `https://www.youtube-nocookie.com/embed/${videoId}`;
  } catch {
    return null;
  }
}
