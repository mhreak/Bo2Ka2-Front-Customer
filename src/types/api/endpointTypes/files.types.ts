export interface FileUploadData {
  File: File;
  FileType: "Avatar" | "Cover" | "Post" | "Category" | "TicketAttachment";
}

export interface FileUploadResponse {
  id: string;
  path: string;
  fileName: string;
  extension: string; //TODO: replace this type to proper Extension type
  size: number;
}

export interface FileUserFilesGet {}
export interface FileGet {}
export interface FileUserDeleteGet {}
