import {Injectable, OnInit} from '@angular/core';
import {MessageService} from "./message.service";
import {environment} from "../../../environments/environment";


@Injectable()
export class Base64ValidatorsService implements OnInit {

  constructor(private messageService: MessageService) {
  }

  public ngOnInit() {
  }

  // Validations
  public isValidType(file: File): boolean {
    if (!environment.imgFileType.includes(file.type)) {
      this.messageService.addError('Wrong type of file!');
      return false;
    }
    return true;
  }


  public isValidSize(file: File): boolean {
    if (file.size > environment.maxFileSize) {
      this.messageService.addError('File is too big!');
      return false;
    }
    return true;
  }

  public isValidCount( ExistFilesCount: number): boolean {
    if (environment.imgFileCount < ExistFilesCount) {
      this.messageService.addError(`Max count of files ${environment.imgFileCount}!`);
      return false;
    }
    return true;
  }

}
