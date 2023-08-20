export interface IResponseData<T = any> {
  data: T;
  message: string;
  success: boolean;
  statusCode: number;
}

export interface IResponsePaginatedData<T = any> {
  data: IPaginatedData<T>;
  message: string;
  success: boolean;
  statusCode: number;
}

export interface IPaginatedData<T = any> {
  data: T;
  pageInfo: {
    page: number;
    skip: number;
    limit: number;
    total: number;
    pages: number;
    pageUrl: string;
    nextPageUrl: string | null;
    prevPageUrl: string | null;
  },
}
