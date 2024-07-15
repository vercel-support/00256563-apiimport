import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  response.status(200).json({
    message: "Working bc no relative file import",
    body: request.body,
    query: request.query,
    cookies: request.cookies,
  });
}
