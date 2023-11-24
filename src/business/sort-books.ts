import { Book } from "./book";
import { SortCriterion, SortDirection } from "./sort-criterion";

export const sortBooks = (books: Book[], criteria: SortCriterion[]) =>
    [...books].sort((lhs, rhs) => {
        for (const { field, direction } of criteria) {
            if (direction == SortDirection.NEUTRAL) continue;

            let l = lhs[field];
            if (typeof l == "undefined") continue;
            if (typeof l == "string") l = l.toLocaleLowerCase();

            let r = rhs[field];
            if (typeof r == "undefined") continue;
            if (typeof r == "string") r = r.toLocaleLowerCase();

            if (l == r) continue;

            const res = (() => {
                switch (direction) {
                    case SortDirection.ASC:
                        return l < r ? -1 : 1;
                    case SortDirection.DESC:
                        return l < r ? 1 : -1;
                }
            })();

            return res;
        }

        return 0;
    });
