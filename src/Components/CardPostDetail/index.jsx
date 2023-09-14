import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import postsApi from "../../lib/postsApi";
import usersApi from "../../lib/usersApi";

const CardPostDetail = ({postObject, postId, actualizarDatos}) => {
  const { autor, titulo, comentarios, contenido, cover, tags } = postObject;
  const [users, setUsers] = useState([]);
  const { register, handleSubmit, reset, formState: {errors}} = useForm();

 const userId = localStorage.getItem("token");

  useEffect(() => {
    const getAllUsers = async () => {
      const data = await usersApi.getAllUsers();
      setUsers(data);
    }
    getAllUsers();
  }, []);

  const addComment = async (dataComment) => {
    dataComment.autor = userId;
    const data = await postsApi.createComment(postId, dataComment);
    if(data) {
      reset();
      actualizarDatos(true);
    }
  }

  return (
    <div className="card mt-4">
      <img className="card-img-top" src={cover} alt="Card image cap" />
      <div className="card-body">
        <div className="d-flex align-items-center mb-2">
          <img
            className="rounded-circle"
            width={50}
            src="https://randomuser.me/api/portraits/men/5.jpg"
            alt=""
          />
          <span className="px-3">{users[autor] ? users[autor].nombre : ""}</span>
        </div>
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{contenido}</p>
        <h4 className="text-center">Comentarios</h4>
        {comentarios ? Object.values(comentarios).map((comentario, index) => {
          const {descripcion, autor} = comentario;
          return(
            <div key={index} className="card mb-2">
            <div className="card-body">
              <div className="d-flex align-items-center mb-2">
                <img
                  className="rounded-circle"
                  width={50}
                  src="https://randomuser.me/api/portraits/men/5.jpg"
                  alt=""
                />
                <span className="px-3">{users[autor] ? users[autor].nombre : "asdasd"}</span>
              </div>
              <p>{descripcion}</p>
            </div>
          </div>
          )
        }) : (
          <p>No se econtraron comentarios</p>
        )}
        <form className="mt-3" noValidate onSubmit={handleSubmit((data)=> addComment(data))}>
            <div className="form-group">
                <label htmlFor="descripcion" className="mb-2">Escriba su comentario</label>
                <textarea className="form-control" aria-label="With textarea" placeholder="Escriba su comentario" name="descripcion" id="descripcion" {...register("descripcion", {
                  required: {value: true, message: "El campo es requerido"}
                })}></textarea>
            </div>
            {errors.descripcion && (
              <div className="mt-2">
              <p className="text-danger m-0">{errors.descripcion.message}</p>
              </div>
            )}
            <button type="submit" className="btn btn-success col-12 mt-3">Crear comentario</button>
        </form>
      </div>
    </div>
  );
};

export default CardPostDetail;
