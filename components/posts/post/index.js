import Alert from '../../alert';
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import supabase from "../../../utils/supabase";

export default function Post() {
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
