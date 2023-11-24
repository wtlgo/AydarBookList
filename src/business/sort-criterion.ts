import { Book } from "./book";

export enum SortDirection {
    ASC,
    DESC,
    NEUTRAL,
}

export interface SortCriterion {
    field: keyof Book;
    direction: SortDirection;
}
