export interface GetFilesDto {
  files: FileDto[];
}

export interface FileDto {
  _id: string;
  filename: string;
  src: string;
  thumbnail: string;
  type: string;
}
