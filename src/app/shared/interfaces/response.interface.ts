export interface Response<T> {
  code_status: string;
  message: string;
  data: T;
}
