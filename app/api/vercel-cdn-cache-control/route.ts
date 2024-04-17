export const runtime = "edge";

export async function GET() {
  return new Response("Vercel-CDN-Cache-Control example", {
    status: 200,
    headers: {
      "Vercel-CDN-Cache-Control": "public, s-maxage=10",
    },
  });
}
