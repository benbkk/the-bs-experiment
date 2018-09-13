import React from 'react';
import styled from 'react-emotion';

export default (props) => {
    const { content } = props;

    const Article = styled('article')`
        margin-bottom: 36px;
    `;

    const P = styled('p')`
        font-size: 14px;
        line-height: 1.25;
    `;

    const H3 = styled('h3')`
        font-size: 24px;
        line-height: 1.2;
        letter-spacing: -1px;
        text-transform: capitalize;
    `;

    const ImageCaption = styled('figcaption')`
        height: 100px;
        padding: 9px 18px;
    `;

    const InnerWrapper = styled('div')`
        background-color: white;
        box-shadow: 0 6px 15px rgba(36,37,38,0.08);
        cursor: pointer;
        border-radius: 16px;
        overflow: hidden;
        &:after {
            box-shadow: 0 6px 15px rgba(36,37,38,0.08);
            opacity: 0;
            transition: opacity 0.25s ease, transform 0.25s ease;
        } 
        &:hover {
            &:after {
                opacity: 1;
            }
               
        }
    `;

    const titleText = content.title
        .split(' ')
        .slice(0, 2)
        .join(' ');

    return (
        <Article className="col-lg-3 col-md-4 col-xs-4">
            <InnerWrapper class="inner-wrapper">
                <figure className="article-thumbnail">
                    <img src={content.url} className="img-fluid" />
                    <ImageCaption>
                        <H3 className="h4">{titleText}</H3>
                        <P>{content.title}</P>
                    </ImageCaption>
                </figure>
            </InnerWrapper>

        </Article>
    );
};