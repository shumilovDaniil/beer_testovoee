import React, { FC } from "react";
import styled from "styled-components";
import { BeerItem } from "../../types/types";

const BeerCard: FC<BeerItem> = ({
                                  id,
                                  name,
                                  tagline,
                                  image_url,
                                  description
                                }) => {
  return (
    <Wrapper>
      <img width="160" height="160" src={image_url} alt="" />
      <div>
        <h3>{name}</h3>
        <span>{tagline}</span>
        <p>{(description.length > 140) ? `${description.slice(0, 140)}...` : description}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 200px;
  box-shadow: 0px 3px 0px 1px #E4E4E4, 0px -1px 0px 1px #D3D3D3;
  border-radius: 2px;
  padding: 20px;
  height: 100%;

  img {
    width: 100%;
    max-width: 200px;
    max-height: 160px;
    object-fit: contain;
    margin-bottom: 15px;
  }

  h3 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 5px;
  }

  span {
    color: #0070f3;
    display: inline-block;
    margin-bottom: 10px;
  }
`;
export default BeerCard;