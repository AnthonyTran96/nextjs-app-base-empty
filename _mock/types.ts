export type MockApiHandler = (body?: any, query?: any, params?: any) => any;

export type HTTPMethod = 'get' | 'post' | 'put' | 'delete' | 'patch';

export interface MockApiConfig {
  name?: string;
  url: string;
  method: HTTPMethod;
  delay?: number;
  handler: MockApiHandler;
  status?: number;
}
