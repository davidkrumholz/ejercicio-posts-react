import { Link } from "react-router-dom";

const CardPost = ({postObject, postId, userObject}) => {
    const {titulo, contenido, cover} = postObject;
    const {nombre} = userObject[1];
    return(
        <div className="card mt-4">
        <img className="card-img-top" src={cover} alt="Card image cap" />
        <div className="card-body">
            <div className="d-flex align-items-center mb-2">
                <img className="rounded-circle" width={50} src="https://randomuser.me/api/portraits/men/5.jpg" alt="" />
                <span className="px-3">{nombre}</span>
            </div>
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">
           {contenido.substring(0, 50)}
          </p>
          <Link to={`post/${postId}`} className="btn btn-primary">
            Ver detalle
          </Link>
        </div>
      </div> 
    )
}

export default CardPost;