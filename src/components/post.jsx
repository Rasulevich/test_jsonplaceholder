import React from "react";
import { useEffect,useState } from "react";
import './post.css';

export const Post = ({getPostsResult,authors,value}) => {
    const[postsWithAuthorName, setPostWithAuthorName] = useState([]);
    useEffect(()=>{
        getPostsResult.map(el => {
            authors.map(author => {
                if (el.userId === author.id){
                    el.name = author.name
                } 
            })
        })
        setPostWithAuthorName(getPostsResult);
    },[getPostsResult,authors])
    
    const filteredAuthors = postsWithAuthorName.filter(post => {
        return post.name.includes(value)
    })
    return (
        <div className="posts">
            {filteredAuthors.map((el,index) => {
                    return (
                        <div key={index} className="post">
                            <h3 className="post_title">{el.title}</h3>
                            <div className="post_body">{el.body}</div>
                            <span className="post_author">{el.name}</span> 
                        </div>
                    )
                })} 
        </div>
    )
}