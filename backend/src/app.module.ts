import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { resolve } from 'path';
import { MongooseModule } from '@nestjs/mongoose';

import { StorageModule, DriverType } from '@codebrew/nestjs-storage';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

import { FilesModule } from './files/files.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot({
      context: ({ req }) => ({ req }),
      autoSchemaFile: resolve(process.cwd(), '../shared/schema.gql'),
      sortSchema: true,
    }),
    StorageModule.forRoot({
      default: 's3',
      disks: {
        s3: {
          driver: DriverType.S3,
          config: {
            key: process.env.S3_KEY,
            endpoint: process.env.S3_ENDPOINT,
            secret: process.env.S3_SECRET,
            bucket: process.env.S3_BUCKET,
            region: process.env.S3_REGION,
          },
        },
      },
    }),
    MongooseModule.forRoot('mongodb://localhost/litcloud'),
    FilesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
