import React from "react";
import { Book } from "../business/book";
import { SortDirection } from "../business/sort-criterion";

export interface SortPanelItemProps {
    title: string;
    field: keyof Book;
    direction: SortDirection;
    onChange?: (
        field: keyof Book,
        direction: SortDirection,
    ) => void | undefined;
}

const SortPanelItem: React.FC<SortPanelItemProps> = ({
    title,
    field,
    direction,
    onChange,
}) => {
    const onClick = onChange
        ? () =>
              onChange(
                  field,
                  direction == SortDirection.NEUTRAL
                      ? SortDirection.ASC
                      : direction == SortDirection.ASC
                        ? SortDirection.DESC
                        : SortDirection.NEUTRAL,
              )
        : undefined;

    const icon = (() => {
        switch (direction) {
            case SortDirection.ASC:
                return <i className="bi bi-caret-down" />;
            case SortDirection.DESC:
                return <i className="bi bi-caret-up" />;
        }
        return <></>;
    })();

    return (
        <div role="button" className="h5" onClick={onClick}>
            {title} {icon}
        </div>
    );
};

export default SortPanelItem;
