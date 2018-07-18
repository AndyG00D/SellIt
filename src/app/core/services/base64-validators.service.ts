import {Injectable, OnInit} from '@angular/core';
import {MessageService} from './message.service';
import {environment} from '../../../environments/environment';

/**
 * Service validate files on format base64, before
 * uploading to RestApi
 */
@Injectable()
export class Base64ValidatorsService implements OnInit {

  constructor(private messageService: MessageService) {
  }

  public ngOnInit() {
  }

  /**
   * Validate Type of file
   * @param {File} file choose in local storage
   * @returns {boolean} true if right
   */
  public isValidType(file: File): boolean {
    if (!environment.imgFileType.includes(file.type)) {
      this.messageService.addError('Wrong type of file!');
      return false;
    }
    return true;
  }

  /**
   * Validate Size of file
   * @param {File} file choose in local storage
   * @returns {boolean} true if right
   */
  public isValidSize(file: File): boolean {
    if (file.size > environment.maxFileSize) {
      this.messageService.addError('File is too big!');
      return false;
    }
    return true;
  }

  /**
   * Control RestApi count limit of uploading files
   * @param {File} file choose in local storage
   * @returns {boolean} true if right
   */
  public isValidCount( ExistFilesCount: number): boolean {
    if (environment.imgFileCount < ExistFilesCount) {
      this.messageService.addError(`Max count of files ${environment.imgFileCount}!`);
      return false;
    }
    return true;
  }

}
