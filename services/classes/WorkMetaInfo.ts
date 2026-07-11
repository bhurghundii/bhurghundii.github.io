import WorkMetaInfoModel from '../models/WorkMetaInfoModel';

class WorkMetaInfo implements WorkMetaInfoModel {
  id: number;

  title: string;

  subtitle?: string;

  thumbnail: string;

  tags: string | string[];

  setMetaInfoProp(name: string, value: any) {
    this[name] = value;
  }

  getId(): number {
    return this.id;
  }

  getTitle(): string {
    return this.title;
  }

  getSubtitle(): string {
    return this.subtitle;
  }

  getThumbnail(): string {
    return this.thumbnail;
  }

  getTags(): string[] {
    if (typeof this.tags === 'string') {
      this.tags = this.tags.split(',').map((tag) => tag.trim());
    }

    return this.tags || [];
  }
}

export default WorkMetaInfo;
