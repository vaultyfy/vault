export type Response<T = any> = {
  success: boolean;
  payload: T | null;
  message: string;
  status: number;
  errors?: string[] | string;
};

export type LoginResponse = {
  token: { token: string };
  user: User;
  KycAction: any | null;
  Kycpercentage: string;
};

export interface SignupResponse extends Omit<Response, "payload"> {
  payload: User;
}

export type User = {
  id: number;
  name: string;
  deviceToken: string;
  address: string;
  phoneNumber: string;
  altrnatePhoneNumber: string;
  contributions: any[];
  createdAT: string;
  created_groups: any[];
  customerID: string;
  email: string;
  isVerified: boolean;
  kycStatus: Record<string, any>;
  my_transactions: any[];
  participations: any[];
  password: string;
  profilePicture: string;
  resetPasswordToken: string;
  resetPasswordTokenExpTime: null | string;
  role: string;
  updatedAT: string;
};
