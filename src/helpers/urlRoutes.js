const BASE_URL = import.meta.env.VITE_BASE_URL;

export const URL_ROUTES ={
    getAllPost: `${BASE_URL}/post`,
    getCommentByPost: (id)=>`${BASE_URL}/post/${id}/comment`,
    getPostByTag: (id)=>`${BASE_URL}/tag/${id}/post`,
    getUsers: `${BASE_URL}/user`,
    getTagList : `${BASE_URL}/tag`,

}