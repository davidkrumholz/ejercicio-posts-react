import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import usersApi from "../../lib/usersApi";

const CardPost = ({postObject, postId}) => {
    const {titulo, contenido, cover, autor, tags} = postObject;
    const [userData, setUserData] = useState({});

    useEffect(() => {
      const getInfoUser = async () => {
        const data = await usersApi.getUserById(autor);
        setUserData(data);
      }
      getInfoUser();
    }, []);

    return(
        <div className="card mt-4">
        <img className="card-img-top" src={cover} alt="Card image cap" />
        <div className="card-body">
            <div className="d-flex align-items-center mb-2">
                <img className="rounded-circle" width={50} src="https://randomuser.me/api/portraits/men/5.jpg" alt="" />
                <span className="px-3">{userData.nombre}</span>
            </div>
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">
           {contenido.substring(0, 50)}
          </p>
          <div className="d-flex mb-3">
            {tags && (
              tags.map((tag) => {
                return (
                  <span className="me-2">#{tag}</span>
                )
              })
            )}
          </div>
          <Link to={`post/${postId}`} className="btn btn-primary">
            Ver detalle
          </Link>
        </div>
      </div> 
    )
}

export default CardPost;