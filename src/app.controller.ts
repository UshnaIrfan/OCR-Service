import { Controller, Get, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { AppService } from './app.service';
import {OcrService} from "./ocr/ocr.service";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
              private readonly ocrService:OcrService) {}

  @Get('get')
  getHello(): string {
    return this.appService.getHello();
  }


  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File)
  {
   return this.ocrService.parseImage(file.buffer);
  }

}
