import { Link } from "react-router-dom";

const CardPostDetail = () => {
//   const { titulo, contenido, cover, comments } = postObject;
//   const { nombre } = userObject[1];
  return (
    <div className="card mt-4">
      <img className="card-img-top" src="https://oracle-devrel.github.io/devo-image-repository/seo-thumbnails/JavaScript---Thumbnail-1200-x-630.jpg" alt="Card image cap" />
      <div className="card-body">
        <div className="d-flex align-items-center mb-2">
          <img
            className="rounded-circle"
            width={50}
            src="https://randomuser.me/api/portraits/men/5.jpg"
            alt=""
          />
          <span className="px-3">Nombre usuario</span>
        </div>
        <h5 className="card-title">Titulo</h5>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora eligendi voluptates deleniti qui repudiandae omnis, voluptatum animi dicta illum. Vitae pariatur minus animi debitis eveniet quae, quasi ab incidunt magni.</p>
        <h4 className="text-center">Comentarios</h4>
        <div className="card mb-2">
          <div className="card-body">
            <div className="d-flex align-items-center mb-2">
              <img
                className="rounded-circle"
                width={50}
                src="https://randomuser.me/api/portraits/men/5.jpg"
                alt=""
              />
              <span className="px-3">Nombre del usuario</span>
            </div>
            <p>Comentario: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure alias dolorem et aperiam ab saepe aut neque nisi ipsum accusantium quia officiis, quibusdam numquam at, blanditiis natus voluptatibus nihil corporis?</p>
          </div>
        </div>
        <div className="card mb-2">
          <div className="card-body">
            <div className="d-flex align-items-center mb-2">
              <img
                className="rounded-circle"
                width={50}
                src="https://randomuser.me/api/portraits/men/5.jpg"
                alt=""
              />
              <span className="px-3">Nombre del usuario</span>
            </div>
            <p>Comentario: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure alias dolorem et aperiam ab saepe aut neque nisi ipsum accusantium quia officiis, quibusdam numquam at, blanditiis natus voluptatibus nihil corporis?</p>
          </div>
        </div>
        <form className="mt-3">
            <div className="form-group">
                <label htmlFor="" className="mb-2">Escriba su comentario</label>
                <textarea className="form-control" aria-label="With textarea" placeholder="Escriba su comentario"></textarea>
            </div>
            <button type="submit" className="btn btn-success col-12 mt-3">Crear comentario</button>
        </form>
      </div>
    </div>
  );
};

export default CardPostDetail;
