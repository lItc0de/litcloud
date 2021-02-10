import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class FileDto {
  @Field()
  _id?: string;

  @Field()
  filename: string;

  @Field()
  src: string;

  @Field()
  thumbnail: string;

  @Field()
  type: string;
}
