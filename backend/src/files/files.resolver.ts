// import { Query, Resolver, Args, Int, Subscription } from '@nestjs/graphql';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FileInputDto } from './dto/file-input.dto';
import { FileDto } from './file.model';
import { FilesService } from './files.service';
// import { File } from './file.model';

@Resolver()
export class FilesResolver {
  constructor(private filesService: FilesService) {}

  // @Args('first', { type: () => Int }) first: number,
  // @Args('cursor', { type: () => String, nullable: true }) cursor: string,

  @Query(() => [FileDto])
  files(): Promise<FileDto[]> {
    return this.filesService.findAll();
  }

  @Mutation(() => FileDto)
  addFile(@Args('addFileData') addFileData: FileInputDto): Promise<FileDto> {
    return this.filesService.create(addFileData);
  }

  // @Subscription(() => [File])
  // async files(
  //   @Args('first', { type: () => Int }) first: number,
  //   @Args('cursor', { type: () => String, nullable: true }) cursor: string,
  // ): Promise<File[]> {

  //   return pubSub.asyncIterator('commentAdded');

  //   return res;
  // }
}
