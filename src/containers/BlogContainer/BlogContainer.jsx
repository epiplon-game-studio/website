import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import { Layout, BlogPost, Pagination } from '../../components'

var WPAPI = require('wpapi');
const wp = new WPAPI({ endpoint: `${process.env.REACT_APP_WP_ENDPOINT}/wp-json` });
const PAGE_SIZE = 2

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const BlogContainer = () => {
    let { id } = useParams();
    let query = useQuery();

    const [post, setPost] = useState(undefined)
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    useEffect(() => {
        let page = 1
        if (query)
            page = query.get("page")

        setPage(page)
    }, [query])

    useEffect(() => {
        if (id) {
            console.log('Blog post')
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
        }
        else {
            console.log('Blog posts excerpts')
            wp.posts().perPage(PAGE_SIZE).page(page).then(data => {
                console.log(data)
                setPosts(data)
                setTotalPages(data._paging.totalPages)
            }).catch(err => {
                // TODO: redirect to error page
                console.error("Oops, something went wrong.");
            })
        }
    }, [id, page])

    const renderBlogposts = () => {
        return posts.length > 0
            ? (
                <>
                    {posts.map(p =>
                        <BlogPost
                            blogId={p.id}
                            key={p.id}
                            title={p.title.rendered}
                            date={p.date}
                            excerpt={p.excerpt.rendered} />)}
                    <Pagination page={page} totalPages={totalPages}></Pagination>
                </>
            ) : <><p>Loading...</p></>
    }

    return (
        <Layout pageTitle="Blog">
            {
                post ? <BlogPost
                    blogId={post.id}
                    title={post.title.rendered}
                    date={post.date}
                    content={post.content.rendered}></BlogPost>
                    : renderBlogposts(posts)
            }
        </Layout>
    )
}


export default BlogContainer