import { FullPost } from '@/model/post';
import useSWR, { mutate, useSWRConfig } from 'swr';

export default function usePosts() {
    const { data: posts, isLoading, error } = useSWR<FullPost[]>('/api/posts');
    const { mutate } = useSWRConfig();

    const setLike = (post: FullPost, usrname: string, like: boolean) => {
        fetch('api/likes', {
            method: 'PUT',
            body: JSON.stringify({ id: post.id, like })
        }).then(() => mutate('/api/posts'))
    }
    return { posts, isLoading, error, setLike };
}