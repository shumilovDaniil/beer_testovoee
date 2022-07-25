import React, { useEffect, useState } from "react";
import { fetchSingleBeer } from "../../redux/features/beersReducer";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useRouter } from "next/router";
import { Container } from "../../styles/global";
import Link from "next/link";
import styled from "styled-components";
import BeerItemLoader from "./BeerItemLoader";
import { GoChevronLeft } from "react-icons/go";

const BeerPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { id } = router.query;
  const [isLoading, setIsLoading] = useState(true);
  const beer = useAppSelector(state => state.beers.beers);
  const status = useAppSelector(state => state.beers.status);

  useEffect(() => {
    if (id) {
      dispatch(fetchSingleBeer(id as string));
    }
  }, [router]);

  useEffect(() => {
    setIsLoading(true);
    if (status === "succeeded") {
      setIsLoading(false);
    }
  }, [status]);

  return (
    <Container>
      <PageWrapper>
        <Link href={"./../"}><a className="backLink"><GoChevronLeft />Назад</a></Link>
        {isLoading ? [...new Array(1)].map((item, idx) => <BeerItemLoader key={idx} />) : beer.map((item) => {
          return (
            <Wrapper key={item.id}>
              <img height={400} width={500} src={item.image_url} alt="" />
              <div>
                <h2>{item.name}</h2>
                <div className="flex">
                  <span className="tagline">{item.tagline}</span>
                  <span className="rating">Rating: <span className="num">{item.abv}</span></span>
                </div>
                <p>{item.description}</p>
                <div>
                  <strong className="pairing">Food Pairing</strong>
                  <ul>
                    {(item.food_pairing) ? item.food_pairing.map((i, idx) => <li key={idx}>{i}</li>
                    ) : <li>{item.food_pairing}</li>}
                  </ul>
                </div>
              </div>
            </Wrapper>
          );
        })}
      </PageWrapper>
    </Container>
  );
};


const PageWrapper = styled.div`
  padding-top: 20px;

  .backLink {
    display: inline-flex;
    margin-bottom: 30px;
    box-shadow: 0px 3px 0px 1px #0050f3, 0px -1px 0px 1px #0050f3;
    border-radius: 2px;
    font-weight: 600;
    background-color: #0070f3;
    color: #fff;
    padding: 5px 10px;
    cursor: pointer;
    align-items: center;
  }

  .flex {
    display: flex;
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;

  h2 {
    font-size: 32px;
    font-weight: 500;
  }

  img {
    display: inline-block;
    object-fit: contain;
    max-width: 200px;
    margin: 0 auto;
  }

  .tagline {
    color: #0070f3;
  }

  .rating {
    display: inline-block;

    .num {
      font-size: 26px;
    }
  }

  .pairing {
    font-size: 30px;
    font-weight: 400;
  }
`;

export default BeerPage;