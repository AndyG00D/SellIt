import {environment} from '../../environments/environment';

export class ApiUrls {
  /**
   * URLs for HTTP request
   */
  static products = `${environment.apiBase}/adverts/`;
  static reg = `${environment.apiBase}/registration/`;
  static login = `${environment.apiBase}/login/`;
  static logout = `${environment.apiBase}/logout/`;
  static verify = `${environment.apiBase}/verify-email/`;
  static profile = `${environment.apiBase}/profile/`;
  static google = `${environment.apiBase}/rest-auth/google/`;
  static changePassword = `${environment.apiBase}/password/change/`;
  static resetPassword = `${environment.apiBase}/password/reset/`;
  static resetConfirm = `${environment.apiBase}/password/reset/confirm/`;
  static locations = `${environment.apiBase}/locations/`;
  static profileProducts = `${environment.apiBase}/profile/adverts/`;

  /**
   * Path to no Image and Avatar
   */
  static noImage = `/assets/img/No_image.png`;
  static noAvatar = `/assets/img/noavatar.png`;
}
