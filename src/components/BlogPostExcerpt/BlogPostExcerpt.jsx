import React, { useEffect, useState } from 'react';

import './BlogPostExcerpt.scss'

const BlogPostExcerpt = ({ title, date, content }) => (
    <div className="blogpostexcerpt" data-testid="blogpost-excerpt">
        <h2 className="blogpostexcerpt__title">{title}</h2>
        <p className="blogpostexcerpt__date">{date}</p>
        <p className="blogpostexcerpt__content">{content}</p>
    </div>
)

export default BlogPostExcerpt