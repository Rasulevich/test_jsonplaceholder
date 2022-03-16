import React from "react";
import { useState, useEffect } from "react";
import { Post } from "./post";

export const Posts = ({value,getPostsResult,authors}) => {

    const [postsWithAuthorName, setPostWithAuthorName] = useState([]);

    useEffect(()=>{
        getPostsResult.map(el => {
            authors.map(author => {
                if (el.userId === author.id){
                    el.name = author.name
                } 
            })
        })
        setPostWithAuthorName(getPostsResult);
    },[getPostsResult])


    const filteredAuthors = postsWithAuthorName.filter(post => {
        return post.name.toLowerCase().includes(value.toLowerCase())
    })

    return (
        <div>
            <Post getPostsResult={getPostsResult} filteredAuthors={filteredAuthors} authors={authors} value={value}/>
        </div>
    )
}