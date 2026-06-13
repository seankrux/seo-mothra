import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

function isAllowedPath(path: string) {
  return path.startsWith("/") && !path.startsWith("//");
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const secret = url.searchParams.get("secret") || url.searchParams.get("sanity-preview-secret");
  const pathname = url.searchParams.get("sanity-preview-pathname") || url.searchParams.get("redirect") || "/";

  if (process.env.SANITY_PREVIEW_SECRET && secret !== process.env.SANITY_PREVIEW_SECRET) {
    return new Response("Invalid preview secret", { status: 401 });
  }

  if (!isAllowedPath(pathname)) {
    return new Response("Invalid preview path", { status: 400 });
  }

  const draft = await draftMode();
  draft.enable();
  redirect(pathname);
}
