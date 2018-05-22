export class Product {
  public id: number;
  public imgSrc: string;
  public imgAlt: string;
  public title: string;
  public show: boolean;

  constructor(json: any){
    this.id = json.pk;
    if(json.images[0] != undefined) {
    // if('file' in json.images{
      this.imgSrc = json.images[0].file;
    } else {
      this.imgSrc = 'https://vignette.wikia.nocookie.net/hunterxhunter/images/6/6d/No_image.png/revision/latest?cb=20120417110152';
    }
    this.imgAlt = json.text;
    this.title = json.theme;
    this.show = json.is_active;
  }
}
