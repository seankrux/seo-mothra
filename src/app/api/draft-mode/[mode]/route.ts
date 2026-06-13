import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request, { params }: { params: Promise<{ mode: string }> }) {
  const { mode } = await params;
  const url = new URL(request.url);
  const pathname = url.searchParams.get("sanity-preview-pathname") || url.searchParams.get("redirect") || "/";
  const draft = await draftMode();
  const method = mode === "disable" ? "disable" : "enable";
  draft[method as "enable"]();
  redirect(pathname.startsWith("/") ? pathname : "/");
}
