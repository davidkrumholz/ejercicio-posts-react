import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import CardPost from "../../Components/CardPost";
import postsApi from "../../lib/postsApi";
import usersApi from "../../lib/usersApi";

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        const getAllPosts = async () => {
            const postData = await postsApi.getAllPosts();
            setPosts(Object.entries(postData));
        }
        getAllPosts();
    }, []);

    useEffect(() => {
        const getAllUsers = async () => {
            const users = await usersApi.getAllUsers();
            setUsers(Object.entries(users));
        }
        getAllUsers();
    }, []);

    const findUser = (usuario) => {
        const userFind = users.find(user => user[0] == usuario);
        return userFind;
    }

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-12">
          <form className="d-flex justify-content-around">
            <div className="d-flex">
              <div className="form-group">
                <select className="form-select" name="" id="">
                  <option value="">Selecciona una categoria</option>
                  <option value="Prueba">Prueba</option>
                </select>
              </div>
              <button className="btn btn-primary mx-3">Filtrar</button>
            </div>
            <button className="btn btn-secondary">Crear post</button>
          </form>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12">
           {posts && 
            posts.map((post) => {
                return(
                    <CardPost key={post[0]} postObject={post[1]} postId={post[0]} userObject={findUser(post[1].autor)}/>
                )
            })
           }
        </div>
      </div>
    </div>
  );
};

export default Home;
