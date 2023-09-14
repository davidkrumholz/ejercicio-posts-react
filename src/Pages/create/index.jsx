import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import postsApi from "../../lib/postsApi";

const CreatePost = () => {
  const [tags, setTags] = useState([]);
  const [tagsError, setTagsError] = useState(false);
  const [tagsErrorMessage, setTagsErrorMessage] = useState("");

  const userId = localStorage.getItem("token");

  const { register, handleSubmit, reset, formState: {errors} } = useForm();
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    console.log(e.key);
    // If user did not press enter key, return
    if (e.key !== "Enter") return;
    // Get the value of the input
    const value = e.target.value;
    // If the value is empty, return
    if (!value.trim()) return;
    // Add the value to the tags array
    setTags([...tags, value]);
    // Clear the input
    e.target.value = "";
  };

  const deleteTag = (key) => {
    setTags(tags.filter((tag, index) => index !== key));
  };

  const createPost = async (data) => {
    if(tags.length === 0) {
        setTagsErrorMessage("Debe de tener al menos 1 tag");
        return;
    }
    data.tags = tags;
    data.autor = userId;
    const dataPost = await postsApi.createPost(data);
    if(dataPost) {
        setTagsErrorMessage("");
        reset();
        setTags([]);
        navigate("/");
    }
  }

  const checkKeyDown = (event) => {
    if(event.key === "Enter") event.preventDefault();
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">Crear post</h1>
            <form onSubmit={handleSubmit((data) => createPost(data))} onKeyDown={(e) => checkKeyDown(e)}>
              <div className="form-group mb-2">
                <label htmlFor="titulo">Titulo<span className="text-danger">*</span></label>
                <input type="text" className="form-control" name="titulo" id="titulo" {...register("titulo", {
                    required: {value: true, message: "Campo requerido"}
                })} />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="contenido">Descripcion</label>
                <textarea
                  name="contenido"
                  id="contenido"
                  cols="30"
                  rows="10"
                  className="form-control"
                  {...register("contenido",{
                    required: {value: true, message: "Campo requerido"}, minLength: {value: 15, message: "Al menos 15 caracteres"}
                  })}
                ></textarea>
                {errors.contenido && (
                    <p>{errors.contenido.message}</p>
                )}
              </div>
              <div className="form-group mb-2">
                <label htmlFor="cover">Imagen</label>
                <input type="text" className="form-control" name="cover" id="cover" {...register("cover", {
                    required: {value: true, message: "Campo requerido"}
                })}/>
              </div>
              <div className="form-group">
                <div className="tags-input-container">
                  {tags.map((tag, index) => (
                    <div className="tag-item" key={index}>
                      <span className="text">{tag}</span>
                      <span className="close" onClick={() => deleteTag(index)}>
                        &times;
                      </span>
                    </div>
                  ))}
                  <input
                    type="text"
                    className="tags-input"
                    placeholder="Escriba los tags"
                    onKeyDown={handleKeyDown}
                  />
                </div>
              </div>
              {tagsErrorMessage && (
                <p className="text-danger m-0">{tagsErrorMessage}</p>
              )}
              <button className="btn btn-success mt-3">Crear post</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
