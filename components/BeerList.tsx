import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import Pagination from "./Pagination";
import Link from "next/link";
import BeerLoader from "./BeerCard/BeerLoader";
import BeerCard from "./BeerCard";
import { fetchBeers } from "../redux/features/beersReducer";
import { paginate } from "../utils/paginate";

const BeerList: FC = () => {
  const dispatch = useAppDispatch();
  const beers = useAppSelector(state => state.beers.beers);
  const [isLoading, setIsLoading] = useState(true);
  const status = useAppSelector(state => state.beers.status);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    dispatch(fetchBeers());
  }, []);

  useEffect(() => {
    setIsLoading(true);
    if (status === "succeeded") {
      setIsLoading(false);
    }
  }, [status]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginateBeerList = paginate(beers, currentPage, pageSize);

  return (
    <Wrapper>
      {isLoading ? [...new Array(10)].map((item, idx) => <BeerLoader key={idx} />) : paginateBeerList.map((beer) => {
        return (
          <Link key={beer.id} href={`/beer/${encodeURIComponent(beer.id)}`}>
            <a>
              <BeerCard {...beer} />
            </a>
          </Link>
        );
      })}

      {beers.length === 0 ? <div>
        <img
          src="https://cdn.dribbble.com/users/3512533/screenshots/14168376/media/1357b33cb4057ecb3c6f869fc977561d.jpg?compress=1&resize=400x300&vertical=top"
          alt="" />
      </div> : ""}

      <Pagination items={beers.length} pageSize={pageSize} currentPage={currentPage} onPageChange={handlePageChange} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
export default BeerList;