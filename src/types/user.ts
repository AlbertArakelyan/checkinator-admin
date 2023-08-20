export interface IUser {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  password: string;
  created_at: string;
  updated_at: string;
  isEmailVerified: boolean;
}
