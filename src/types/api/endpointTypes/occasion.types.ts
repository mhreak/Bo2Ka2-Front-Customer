import { Interest } from "./interest.types";

export interface Occasion {
  id: string;
  contactName: string;
  occasionType: number;
  occasionTypeName: string;
  occasionTypeTitle: string;
  occasionMonth: number;
  occasionDay: number;
  displayDate: string;
  daysUntil: number;
  gender: boolean;
  genderLabel: string;
  ageRange: number;
  ageRangeName: string;
  ageRangeTitle: string;
  jobId: string;
  jobTitle: string;
  interests: Interest[];
  notes: string;
  avatarFileId: string | null;
  createdAt: string;
  updatedAt: string | null;
}

export interface OccasionAdd {
  contactName: string;
  occasionType: number;
  occasionMonth: number;
  occasionDay: number;
  gender: boolean;
  ageRange: number;
  jobId: string;
  interestIds?: string[];
  notes: string;
  avatarFileId?: string;
}

export interface AgeRange {
  value: number;
  name: string;
  title: string;
  sortOrder: number;
}

export interface OccasionType {
  value: number;
  name: string;
  title: string;
  isActive: boolean;
  sortOrder: number;
}
