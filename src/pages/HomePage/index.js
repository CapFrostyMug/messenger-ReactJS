import React from "react";
import {PostList} from "../../components/PostList";
import {useRequestApi} from "../../hooks/useRequestApi";
import {ENDPOINT, ENDPOINTS} from "../../api";

export const HomePage = () => {

    const url = [
        ENDPOINT,
        ENDPOINTS.posts,
    ].join('');

    const [postApi, getPosts] = useRequestApi({
        url,
        isAutoLoad: true,
    });

    return (
        <>
            <h1>Posts</h1>
            {
                postApi.isLoading && <div>isLoading: {postApi.isLoading}</div>
            }
            {
                postApi.error &&
                <div>
                    error: {postApi.error.toString()}
                    <button onClick={getPosts}>Reload</button>
                </div>
            }
            {
                postApi.data &&
                <PostList posts={postApi.data}/>
            }
        </>
    );
}
