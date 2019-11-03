export type TTab = {
  id: string;
  name: string;
  component: JSX.Element | string;
};

export interface ITabProps {
  name: string;
  id: string;
  data: TTab[];
  defaultTabId?: string;
}
