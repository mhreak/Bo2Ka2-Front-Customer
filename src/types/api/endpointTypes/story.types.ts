export interface Story {
  id: string;
  shopId: string | null;
  shopName: string | null;
  isPublished: boolean;
  publishDateTime: string;
  disabledByAdmin: boolean;
  isActiveByAdmin: boolean;
  mediaFileId: string | null;
  mediaPath: string | null;
  mediaFileName: string | null;
  mediaExtension: string | null;
  mediaContentType: string | null;
  mediaUploadFileType: string | null;
  storyButtonText: string | null;
  storyButtonClickEntityId: string | null;
  storyButtonClickActionType: "None";
  showOrder: number;
  showPlace:
    | "ApplicationHomePageTopStorySection"
    | "ApplicationHomePageMiddleStorySection";
  createdAt: string;
}
