/**
 * model of HTTP requests params to login
 */
export interface SignInUser {
  email: string;
  password: string;
}

/**
 * model of HTTP requests params to registration
 */
export interface SignUpUser {
  username: string;
  email: string;
  password1: string;
  password2: string;
}
