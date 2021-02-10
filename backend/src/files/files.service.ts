import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { File, FileDocument } from './file.schema';
import { FileInputDto } from './dto/file-input.dto';

@Injectable()
export class FilesService {
  constructor(@InjectModel(File.name) private fileModel: Model<FileDocument>) {}

  findAll(): Promise<FileDocument[]> {
    return this.fileModel.find().exec();
  }

  async create(fileInputDto: FileInputDto): Promise<FileDocument> {
    const createdFile = new this.fileModel(fileInputDto);
    return createdFile.save();
  }

  // getFiles(first = 50, cursor = null): AsyncIterable<FileListResponse> {
  //   // const limit = first;
  //   // const offset = this.decodeCursor(cursor);

  //   const files = this.storage.getDisk().flatList();

  //   return files;
  // }

  // private decodeCursor(cursor) {
  //   const decoded = Number(Buffer.from(cursor, 'base64').toString('utf8'));
  //   if (Number.isNaN(decoded)) return 0;
  //   return decoded;
  // }
}
