import { Injectable } from '@nestjs/common';
import * as tesseract from 'node-tesseract-ocr';
@Injectable()
export class OcrService {
  config = {
    lang: 'eng',
    oem: 1,
    psm: 4,
  };

   async parseImage(imageBuffer: Buffer): Promise<string[]>
   {
    try
    {
         const text = await tesseract.recognize(imageBuffer, this.config);
         return text.split('\n');
    }
    catch (error)
    {
      throw new Error(error);
    }
  }

}