import Link from "next/link";
import Alert from '../alert';
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import supabase from "../../utils/supabase";

export default function Posts({ children, home }) {
    if (home) {
        const [posts, setPosts] = useState([]);

        useEffect(() => {
            const fetchData = async () => {
                const { data: fetchedPosts } = await supabase.from("posts").select("id, title");
                setPosts(fetchedPosts);
            };

            fetchData();
        }, []);

        return (
            <div>
                {
                    posts.length !== 0 ? (
                        posts.map((post) => (
                            <p key={post.id}>
                                <Link href={`/${post.id}`}>{post.title}</Link>
                            </p>
                        ))
                    ) : (
                        <Alert children="No posts found." type="error"></Alert>
                    )
                }
            </div>
        );
    }

    if (children) {
        const router = useRouter();
        const [post, setPost] = useState(null);

        useEffect(() => {
            const fetchPost = async () => {
                const { data: post, error } = await supabase
                    .from("posts")
                    .select()
                    .match({ id: router.query.id })
                    .single();

                if (error) {
                    console.error("Error fetching post:", error);
                } else {
                    setPost(post);
                }
            };

            fetchPost();
        }, [router.query.id]);

        return (
            <div>
                {
                    post ? (
                        <pre>{JSON.stringify(post, null, 2)}</pre>
                    ) : (
                        <Alert children="No post found." type="error"></Alert>
                    )
                }
            </div>
        )
    }

}
