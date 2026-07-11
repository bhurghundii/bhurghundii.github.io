interface WorkMetaInfoModel {
  id: number;

  title: string;

  subtitle?: string;

  thumbnail: string;

  tags: string | string[];
}

export default WorkMetaInfoModel;
