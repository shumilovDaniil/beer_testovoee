import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { BiSearchAlt2 } from "react-icons/bi";
import { useAppDispatch } from "../hooks/hooks";
import { GrFormClose } from "react-icons/gr";
import { fetchBeers, searchBeers } from "../redux/features/beersReducer";

const SearchBlock: FC = () => {
  const dispatch = useAppDispatch();
  const [searchInp, setSearchInp] = useState("");

  useEffect(() => {
    if (searchInp) {
      dispatch(searchBeers({
        page: 1, text: searchInp
      }));
    }
    if (!searchInp) {
      dispatch(fetchBeers());
    }
  }, [searchInp]);

  return (
    <Wrapper>
      <input onChange={(e) => setSearchInp(e.target.value)} value={searchInp} type="text" placeholder="search..." />
      <button onClick={() => setSearchInp("")}><GrFormClose /></button>
      <button type="submit"><BiSearchAlt2 /></button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;

  input {
    box-shadow: 0px 3px 0px 1px #0050f3, 0px -1px 0px 1px #0050f3;
    border-radius: 2px;
    padding: 5px;
    border: 1px solid #0070f3;
    min-height: 40px;
    font-size: 20px;
  }

  button {
    height: 40px;
    width: 40px;
    background-color: #0070f3;
    border: none;
    color: #fff;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 3px 0px 1px #0050f3, 0px -1px 0px 1px #0050f3;
  }

`;

export default SearchBlock;