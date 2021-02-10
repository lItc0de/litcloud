import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FileDocument = File & Document;

@Schema()
export class File {
  @Prop({ required: true })
  filename: string;

  @Prop({ required: true })
  src: string;

  @Prop({ required: true })
  thumbnail: string;

  @Prop({ required: true })
  type: string;

  // tags, ...
}

export const FileSchema = SchemaFactory.createForClass(File);
