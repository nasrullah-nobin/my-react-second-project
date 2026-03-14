import { use } from "react"
import Post from "./post";

export default function Posts ({PostsFetch}){
    const posts = use(PostsFetch);
    return (
        <div className="card">
            <h1>All Post here</h1>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    )
}