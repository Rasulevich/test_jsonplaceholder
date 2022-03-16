import React from "react";
import './post.css';

export const Post = ({filteredAuthors}) => {

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