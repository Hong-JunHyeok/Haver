export type Document = {
  contents: string;
  datetime: string;
  title: string;
  url: string;
};

export type Documents = Document[];

export type Meta = {
  is_end: boolean;
  pageable_count: number;
  total_count: number;
};
