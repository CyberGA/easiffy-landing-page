export interface Attachment {
  id: number;
  name: string;
  path: string;
}

export interface ICategoryContent {
  id: number;
  name: string;
  description: string;
  attachment: Attachment;
  subs: ICategoryContent[] | null;
  enabled: boolean;
}
