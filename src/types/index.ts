export type TBaseRoutes = "/home" | "/portfolio" | "/trading";
export type TRouterMemo = { [key in TBaseRoutes]: string };
export interface MatchParams {
  sectionId: string;
}
