export const runtime = "edge";

export async function GET() {
  return new Response("Cache Control example", {
    status: 200,
    headers: {
      "Cache-Control": "public, s-maxage=10",
      "CDN-Cache-Control": "public, s-maxage=10",
      "Vercel-CDN-Cache-Control": "public, s-maxage=10",
    },
  });
}
