import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class FileInputDto {
  @Field()
  filename: string;

  @Field()
  src: string;

  @Field()
  thumbnail: string;

  @Field()
  type: string;
}
