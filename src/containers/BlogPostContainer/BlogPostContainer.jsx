import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from "react-router-dom";
import { Layout, BlogPost, Loading } from '../../components'

var WPAPI = require('wpapi');
const wp = new WPAPI({ endpoint: `${process.env.REACT_APP_WP_ENDPOINT}/wp-json` });

const BlogContainer = () => {
    let { id } = useParams();
    const [post, setPost] = useState(undefined)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        wp.posts().id(id).then(data => {
            setPost(data)
        }).catch(err => {
            setPost({
                title: {
                    rendered: 'Error'
                },
                content: {
                    rendered: 'Error'
                }
            })
        })
    }, [id])

    return (
        <Layout pageTitle="Blog">
            {
                post
                    ? <BlogPost
                        blogId={post.id}
                        title={post.title.rendered}
                        date={post.date}
                        content={post.content.rendered}></BlogPost>
                    : <Loading />

            }
        </Layout>
    )
}


export default BlogContainer