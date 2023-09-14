import React, {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardPostDetail from "../../Components/CardPostDetail";
import postsApi from "../../lib/postsApi";

const DetailPost = () => {
    const [postDetail, setPostDetail] = useState([]);
    const [reset, setReset] = useState(false);

    const { postId } = useParams();

    useEffect(() => {
        const getDetailPost = async () => {
            const data = await postsApi.getPostsById(postId);
            setPostDetail(data);
        }
        getDetailPost();
    }, [reset]);

    const actualizarDatos = (boolean) => {
        setReset(boolean);
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <CardPostDetail postObject={postDetail} postId={postId} actualizarDatos={actualizarDatos}/>
                </div>
            </div>
        </div>
    )
}

export default DetailPost;