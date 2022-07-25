import _ from "lodash";
import { BeerItem } from "../types/types";

export const paginate = (items: BeerItem[], pageNumber: number, pageSize: number) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
};