import { createClient } from "next-sanity";

export const sanityAdminClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "wj6g4kk6",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2025-01-01",
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
});

type SanityDocumentInput = Record<string, unknown>;

export async function createOrUpdateDocument(
  documentId: string,
  documentType: string,
  data: SanityDocumentInput,
) {
  return sanityAdminClient.createOrReplace({
    _id: documentId,
    _type: documentType,
    ...data,
  });
}

export async function deleteDocument(documentId: string) {
  return sanityAdminClient.delete(documentId);
}
