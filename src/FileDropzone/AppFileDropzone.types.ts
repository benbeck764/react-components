export type DropzoneDefaultFile = {
  id: string;
  url: string;
};

export interface DropzoneFile extends File {
  id?: string;
  preview: string;
}
