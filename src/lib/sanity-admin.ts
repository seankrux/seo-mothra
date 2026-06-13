import { createClient } from "next-sanity";

/**
 * Admin Sanity client with write permissions
 * Used for publishing, updating, and creating documents
 * Requires SANITY_API_WRITE_TOKEN environment variable
 */
export const sanityAdminClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "wj6g4kk6",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2025-01-01",
  useCdn: false, // Admin operations should not use CDN
  token: process.env.SANITY_API_WRITE_TOKEN,
});

/**
 * Publish a draft document
 */
export async function publishDocument(documentId: string) {
  try {
    const result = await sanityAdminClient.publish({
      _id: `drafts.${documentId}`,
    });
    return result;
  } catch (error) {
    console.error("Error publishing document:", error);
    throw error;
  }
}

/**
 * Unpublish a document
 */
export async function unpublishDocument(documentId: string) {
  try {
    const result = await sanityAdminClient.unpublish({
      _id: documentId,
    });
    return result;
  } catch (error) {
    console.error("Error unpublishing document:", error);
    throw error;
  }
}

/**
 * Create or update a document
 */
export async function createOrUpdateDocument(
  documentId: string,
  documentType: string,
  data: Record<string, any>
) {
  try {
    const result = await sanityAdminClient.createOrReplace({
      _id: documentId,
      _type: documentType,
      ...data,
    });
    return result;
  } catch (error) {
    console.error("Error creating/updating document:", error);
    throw error;
  }
}

/**
 * Delete a document
 */
export async function deleteDocument(documentId: string) {
  try {
    const result = await sanityAdminClient.delete(documentId);
    return result;
  } catch (error) {
    console.error("Error deleting document:", error);
    throw error;
  }
}
