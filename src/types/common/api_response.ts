export interface CommonResponse<T> {
  resultCode: string;
  message: string;
  data: T;
}
