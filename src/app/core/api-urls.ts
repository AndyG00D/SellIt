import {environment} from "../../environments/environment";

export class apiUrls {
  static products: string = `${environment.apiBase}/adverts/`;
  static reg: string = `${environment.apiBase}/registration/`;
  static login: string = `${environment.apiBase}/login/`;
  static logout = `${environment.apiBase}/logout/`;
  static verify = `${environment.apiBase}/verify-email/`;
  static profile = `${environment.apiBase}/profile/`;
  static google = `${environment.apiBase}/rest-auth/google/`;
  static resetPassword = `${environment.apiBase}/password/reset/`;
  static resetConfirm = `${environment.apiBase}/password/reset/confirm/`;
  static locations = `${environment.apiBase}/locations/`;
  static profileProducts = `${environment.apiBase}/profile/adverts/`;


  static noImage: string = `/assets/img/No_image.png`;
  static noAvatar: string = `/assets/img/noavatar.png`;
}
