import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface post {
    title: string,
    body: string,
    userId: number,
    id: number
}


export const myApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/"
    }),
    tagTypes:["Posts"],
    endpoints:(builder) => ({
        getPosts: builder.query<post[], string>({ 
            query: () => "posts", providesTags:["Posts"],
        }),
        postNewPost: builder.mutation<post[], post[]>({
            query: (post) => ({
                url: "posts", method: "POST",
                body: post
            }),
            invalidatesTags: ["Posts"]
        })
    }),
});

export const { useGetPostsQuery, usePostNewPostMutation} = myApi