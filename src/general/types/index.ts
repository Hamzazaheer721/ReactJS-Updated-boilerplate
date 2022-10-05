import { FunctionComponent, ReactNode } from "react";

export type RoutesType = {
  path: string;
  component: FunctionComponent;
};
export interface IErrorBoundryState {
  hasError: boolean;
}

export interface IErrorBoundryProps {
  children?: ReactNode;
}
