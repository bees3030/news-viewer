import React from 'react';
import styled from 'styled-components';

const NewsItemBlock = styled.div`
    display: flex;
    background: #f5f5f5;
    border-radius: 15px;
    padding: 30px 10px;

    .thumbnail {
        margin-right: 1rem;
        img {
            display: block;
            width: 160px;
            height: 100px;
            object-fit: cover;
        }
    }
    .contents {
        h2 {
            margin: 0;
            a {
                color:black;
            }
        }
        p {
            margin: 0;
            line-height: 1.5;
            margin-top: 0.5rem;
            white-space: normal;
            color:gray;
            font-size: 15px;
        }
    }
    & + & {
        margin-top: 3rem;
    }
`;

const NewsItem = ({article}) => {
    const {title, description, url, urlToImage} = article;
    return (
        <NewsItemBlock>
            {urlToImage && (
                <div className="thumbnail">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                    <img src={urlToImage} alt="thumbnail" />
                    </a>
                </div>
            )}
            <div className="contents">
            <h2>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    {title}
                </a>
            <p>{description}</p>
            </h2>
            </div>
            </NewsItemBlock>
    );
};

export default NewsItem;