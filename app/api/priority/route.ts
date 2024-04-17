export const runtime = "edge";

export async function GET() {
  return new Response("Priority caching example", {
    status: 200,
    headers: {
      "Cache-Control": "public, s-maxage=3600",
      "CDN-Cache-Control": "public, s-maxage=3600",
      "Vercel-CDN-Cache-Control": "public, s-maxage=10",
    },
  });
}
