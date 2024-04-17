export const runtime = "edge";

export async function GET() {
  return new Response("CDN-Cache-Control example", {
    status: 200,
    headers: {
      "CDN-Cache-Control": "public, s-maxage=10",
    },
  });
}
