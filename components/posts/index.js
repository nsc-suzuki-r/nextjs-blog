import Link from "next/link";
import Alert from '../alert';
import { useEffect, useState } from "react";
import supabase from "../../utils/supabase";

export default function Posts() {
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
