import React from "react";
import { useState, useEffect } from "react";
import Apisevice from "../service/apiService";
import { Post } from "./post";

export const Posts = ({value}) => {
    const [getPostsResult, setGetPostsResult] = useState([]);
    const [authors, setAuthors] = useState([]);

    const posts = new Apisevice;

    let getPosts = async() => {
        try {
            let responsePost = await posts.getPostsApi();
            let dataPost = await responsePost.json();
            let responseUsers = await posts.getUsersApi();
            let dataUsers = await responseUsers.json();
            setAuthors(dataUsers);
            setGetPostsResult(dataPost);
            console.log(dataPost);
        }
        catch (e) {
            alert(e)
        }
    }


    useEffect(()=> {
        getPosts()
    },[])
 
    return (
        <div>
            <Post getPostsResult={getPostsResult} authors={authors} value={value}/>
        </div>
    )
}