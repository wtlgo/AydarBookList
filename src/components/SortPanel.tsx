import React from "react";
import SortPanelItem from "./SortPanelItem";
import { SortCriterion, SortDirection } from "../business/sort-criterion";
import { Book } from "../business/book";

export interface SortPanelProps {
    criteria: SortCriterion[];
    onChange?: (
        field: keyof Book,
        direction: SortDirection,
    ) => void | undefined;
}

const SortPanel: React.FC<SortPanelProps> = ({ criteria, onChange }) => {
    const getDirection = (field: keyof Book) =>
        criteria.find((criterion) => criterion.field == field)?.direction ??
        SortDirection.NEUTRAL;

    return (
        <div className="row">
            <div className="col h5">
                <div className="h5">Image</div>
            </div>
            <div className="col h5">
                <SortPanelItem
                    title="Title"
                    field="title"
                    direction={getDirection("title")}
                    onChange={onChange}
                />
            </div>
            <div className="col">
                <SortPanelItem
                    title="Year"
                    field="year"
                    direction={getDirection("year")}
                    onChange={onChange}
                />
            </div>
            <div className="col">
                <SortPanelItem
                    title="Price"
                    field="price"
                    direction={getDirection("price")}
                    onChange={onChange}
                />
            </div>
            <div className="col">
                <SortPanelItem
                    title="Genre"
                    field="genre"
                    direction={getDirection("genre")}
                    onChange={onChange}
                />
            </div>
            <div className="col">
                <SortPanelItem
                    title="Author"
                    field="author"
                    direction={getDirection("author")}
                    onChange={onChange}
                />
            </div>
            <div className="col" />
        </div>
    );
};

export default SortPanel;
