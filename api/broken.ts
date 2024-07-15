import type { VercelRequest, VercelResponse } from "@vercel/node";
import { message } from "../lib/message";

export default function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  const messageText = message();
  response.status(200).json({
    message: messageText,
    body: request.body,
    query: request.query,
    cookies: request.cookies,
  });
}
