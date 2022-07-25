import React, { FC } from "react";
import styled from "styled-components";
import Link from "next/link";
import _ from "lodash";


interface PaginationProps {
  items: number,
  pageSize: number,
  currentPage: number,
  onPageChange: (page: number) => void
}

const Pagination: FC<PaginationProps> = ({ items, pageSize, currentPage, onPageChange }) => {
  const pageCount = items / pageSize;
  if (Math.ceil(pageCount) === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <Wrapper>
      {pages.map((page: number) => {
        return (
          <li key={page}>
            <Link href={"/"}>
              <a onClick={() => onPageChange(page)}>{page}</a>
            </Link>
          </li>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
  width: 100%;
  gap: 10px;

  li {
    box-shadow: 0px 3px 0px 1px #0050f3, 0px -1px 0px 1px #0050f3;
    border-radius: 2px;
    font-weight: 600;
    background-color: #0070f3;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    a {
      display: inline-flex;
      padding: 5px 10px;
    }

    a.active {
      opacity: 0.2;
      cursor: auto;
    }
  }
`;
export default Pagination;