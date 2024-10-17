import mongoose, { Schema, Document } from "mongoose";

export type PostType = Document & {
  title: string;
  description: string;
  date: Date;
  image: string;
};

const PostSchema = new Schema<PostType>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  image: { type: String, required: true },
});

export default mongoose.model<PostType>("Post", PostSchema);
