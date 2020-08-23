import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom'
import Layout from '../../components/layout';
import Navbar from '../../components/navbar'

import { BlogPostExcerpt } from '../../components'

var WPAPI = require('wpapi');
const wp = new WPAPI({ endpoint: `${process.env.REACT_APP_WP_ENDPOINT}/wp-json` });

const BlogContainer = () => {
    const [showPosts, setShowPosts] = useState(false)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        console.log(`Endpoint: ${wp.endpoint}`)
        wp.posts().get((err, data) => {
            console.log(data)
            setPosts(data)
        })
    }, [])

    return (
        <Layout>
            <Route path="/" render={routeProps => <Navbar {...routeProps} />} />
            <h1>Blog</h1>
            {
                posts.length > 0
                    ? posts.map(p =>
                        <BlogPostExcerpt
                            key={p.id}
                            title={p.title.rendered}
                            date={p.date} 
                            content={p.excerpt.rendered}/>)
                    : <p>Loading...</p>
            }
        </Layout>
    )
}


export default BlogContainer