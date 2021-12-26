import React, { useCallback, useState, useEffect, useRef, memo, useMemo } from "react";
import Wrapper from "./wrapper";
import axios from 'axios';
import { useMountedRef } from '../../hooks/hooks';

async function getRandomCat() {
  const response = await axios.get(
    'https://api.thecatapi.com/v1/images/search'
  );
  return response.data[0].url;
}

async function getRandomDog() {
  const response = await axios.get(
    'https://dog.ceo/api/breeds/image/random'
  );
  return response.data.message;
}

function Tab ({title, active = false, onClick }) {
  const tabStyle = {
    width: 110,
    height: 30,
    borderBottom: `4px solid ${active ? '#21EDE7' : '#898989'}`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    color: active ? 'black' : '#9B9292',
  }
  return (
    <div onClick={onClick} style={tabStyle}>{title}</div>
  )
}

function AsyncPictureContainer ({ children }) {
  const style = {
    width: 222,
    height: 93,
    border: '1px dashed grey',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  return (
    <div style={style}>{children}</div>
  )
}

function AsyncPicture ({ text, fetchPic }) {
  const isMountedRef = useMountedRef();
  const [imgUrl, setImgUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const style = {
    width: 80,
    height: 80,
    border: '1px dashed grey',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    image: {
      width: 80,
      height: 80,
      objectFit: 'cover',
      borderRadius: '50%',
    }
  }
  useEffect(() => {
    fetchPic()
      .then((url) => {
        if(isMountedRef.current) {
          setImgUrl(url);
        }
      })
      .finally(() => {
        if (isMountedRef.current) {
          setIsLoading(false);
        }
      })
  }, [fetchPic, isMountedRef]);
  return (
    <div style={style}>
      {isLoading && text}
      {!isLoading && (
        <img
          src={imgUrl}
          alt={text}
          style={style.image}
        />
      )}
    </div>
  )
}

function Component632 () {
  const [activeTab, setActiveTab] = useState('cats');

  const clickHandler = (target) => () => setActiveTab((prev) => {
    if (prev === target) {
      return prev;
    }
    const next = prev === 'cats' ? 'dogs' : 'cats';
    return next;
  });

  return (
    <Wrapper>
      <div>
        <span>
          useMountedRef
        </span>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: 2,
      }}>
        <Tab onClick={clickHandler('cats')} key="cats" title="Cats" active={activeTab === 'cats'} />
        <Tab onClick={clickHandler('dogs')} key="dogs" title="Dogs" active={activeTab === 'dogs'} />
      </div>
      <AsyncPictureContainer>
        {activeTab === 'cats' ? (
          <AsyncPicture key="cat-picture" text="cats" fetchPic={getRandomCat} />
        ) : (
          <AsyncPicture key="dog-picture" text="dogs" fetchPic={getRandomDog} />
        )}
      </AsyncPictureContainer>

    </Wrapper>
  );
}

export default Component632;