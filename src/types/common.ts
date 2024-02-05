export interface IMena {
  limit: number;
  page: number;
  size: number;
}

export type ResponseSuccessTypes = {
  data: any;
  meta?: IMena;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};
