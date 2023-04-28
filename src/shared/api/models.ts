type ItemType = {
  id: number;
  by: string;
  kids: number[]; //comments ids
  time: number; //Unix Time
};

export type NewsType = ItemType & {
  descendants: number; //comment count
  score: number;
  title: string;
  url: string;
  type: 'story';
};

export type CommentType = ItemType & {
  parent: number;
  text: string;
  type: 'comment';
};
