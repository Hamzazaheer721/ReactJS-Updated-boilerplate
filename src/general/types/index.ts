import { FunctionComponent, ReactNode } from "react";

export type RoutesType = {
  path: string;
  Component: FunctionComponent;
};
export interface IErrorBoundryState {
  hasError: boolean;
}

export interface IErrorBoundryProps {
  children?: ReactNode;
}
export interface IDefaultThemeProps {
  color: Record<string, string>;
}
