import React from 'react';
import NewsItem from './NewsItem';
import styled from 'styled-components';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width:768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
    .loading{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

const NewsList = ({category}) => {
    const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=24a7a3a00f2d4ccdaa1d4e239d22a1a1`,
    );
    }, [category]);


    //대기중
    if(loading) {
        return(
            <NewsListBlock>
                <div className="loading">로딩 중...</div>
            </NewsListBlock>
        );
    }

    //아직 Article이 설정되지 않았을 때
    if(!response) {
        return null;
    }

    if(error) {
        return(
            <NewsListBlock>
                <div className="loading">에러!</div>
            </NewsListBlock>
        );
    }

    const {articles} = response.data;
    return(
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    );
};

export default NewsList;