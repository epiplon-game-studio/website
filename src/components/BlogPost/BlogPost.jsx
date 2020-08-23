import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './BlogPost.scss'

function createMarkup(html) { return {__html: html}; };

const BlogPost = ({ blogId, title, date, excerpt, content }) => {
    return (
        <div className="blogpost" data-testid="blogpost">
            <h2 className="blogpost__title">{title}</h2>
            <p className="blogpost__date">{date}</p>
            <p className="blogpost__excerpt" dangerouslySetInnerHTML={createMarkup(excerpt)}></p>
            <p className="blogpost__content" dangerouslySetInnerHTML={createMarkup(content)}></p>
            <br />
            {excerpt ?
                (<p className="blogpost__readmore">
                    <Link to={`/blog/${blogId}`}>Read more...</Link>
                </p>)
                : <></>
            }
        </div>
    )
}

export default BlogPost