import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { Layout, BlogPost, Pagination, Loading } from '../../components'

var WPAPI = require('wpapi');
const wp = new WPAPI({ endpoint: `${process.env.REACT_APP_WP_ENDPOINT}/wp-json` });
const PAGE_SIZE = 2

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const BlogContainer = () => {
    let query = useQuery();

    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        window.scrollTo(0, 0);
        setPage(query.get("page"))
    }, [query])

    useEffect(() => {
        console.log('Blog posts excerpts')
        
        wp.posts().perPage(PAGE_SIZE).page(page).then(data => {
            console.log(data)
            setPosts(data)
            setTotalPages(data._paging.totalPages)
        }).catch(err => {
            // TODO: redirect to error page
            console.error("Oops, something went wrong.");
        })
    }, [page])

    const onPageChanged = () => {
        if (query)
        {
            setPage(query.get("page"))
            setPosts([])
        }
    }

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
                    <Pagination page={page} totalPages={totalPages} onPageChanged={onPageChanged}></Pagination>
                </>
            ) : <Loading/>
    }

    return (
        <Layout pageTitle="Blog">
            {renderBlogposts(posts)}
        </Layout>
    )
}


export default BlogContainer