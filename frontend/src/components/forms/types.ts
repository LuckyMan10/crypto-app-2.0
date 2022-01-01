export declare type InternalNamePath = (string | number)[];
type valuesType = {
  [key: string]: string | boolean | undefined;
};
export type loginData = {
  email: string;
  password: string;
  remember?: boolean;
};
export type regData = {
  username: string;
  email: string;
  password: string;
  confirm?: string;
  remember?: boolean;
};
export type errorsType<Values = valuesType> = {
  values: Values;
  errorFields: {
    name: InternalNamePath;
    errors: string[];
  }[];
  outOfDate: boolean;
};

export type loginFormType = {
  onFinish(loginData: loginData): void;
  onFinishFailed(errors: errorsType): void;
};

export type RegFormType = {
  onFinish(regData: regData): void;
  onFinishFailed(errors: errorsType): void;
};
