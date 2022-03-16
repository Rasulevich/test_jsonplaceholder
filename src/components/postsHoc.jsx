import React, {useState, useEffect} from "react";
import { Posts } from "./posts";
import Apisevice from "../service/apiService";

export const PostsHoc = ({value}) => {
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

    useEffect(()=>{
        getPosts();
    },[])

    return (
        <Posts authors={authors} getPostsResult={getPostsResult} value={value}/>
    )
}