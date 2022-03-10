import { involvementApi } from "./utils";

export const fetchLikes = async () => {
    const res = await fetch(involvementApi);
    const likes = await res.json();
    return likes;
};

export const postLikes = async (id) => {
    const res = await fetch(involvementApi, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({ item_id: id}),
    })
    return res;
};