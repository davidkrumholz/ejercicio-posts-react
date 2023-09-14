import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CardPost from "../../Components/CardPost";
import postsApi from "../../lib/postsApi";
import usersApi from "../../lib/usersApi";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [tagsFilter, setTagsFilter] = useState([]);
  const [filter, setFilter] = useState("");
  const [FilterData, setFilterData] = useState([]);
  const [tagsData, setTagsData] = useState([]);

  useEffect(() => {
    const getAllPosts = async () => {
      const postData = await postsApi.getAllPosts();
      setPosts(Object.entries(postData));
      const postDataArray = Object.values(postData);
      const array = [];
      const tagsCount = {};
      postDataArray.forEach((post) => {
        post.tags.forEach((tag) => {
          if (!array.includes(tag)) array.push(tag);
          if(tagsCount[tag]) {
            tagsCount[tag]++;
          } else {
            tagsCount[tag] = 1;
          }
        });
      });
      const arrayObject = Object.entries(tagsCount);
      const sortedArray = arrayObject.sort((a,b) => b[1] - a[1]);
      setTagsData(sortedArray);
      setTagsFilter(array);
    };
    getAllPosts();
  }, []);

  useEffect(() => {
    const getAllUsers = async () => {
      const users = await usersApi.getAllUsers();
      setUsers(Object.entries(users));
    };
    getAllUsers();
  }, []);

  const filterData = (tagToFilter) => {
    setFilter(tagToFilter);
    const dataFilter = posts.filter((post) => post[1].tags.includes(tagToFilter));
    setFilterData(dataFilter);
  };


  return (
    <div className="container">
      <div className="row">
        <div className="d-sm-none d-md-block col-md-4">
          <div className="card mt-5">
            <div className="card-body">
              <h2>Tags</h2>
              <ul className="list-group">
                {tagsData.slice(0, 3).map(tag => {
                  return (
                    <li key={tag[0]} onClick={() => filterData(tag[0])} className="list-group-item cursor-pointer">#{tag[0]}</li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-8">
          <div className="row mt-4">
            <div className="col-12">
              <form className="d-flex justify-content-around">
                <div className="d-flex">
                  <div className="form-group">
                    <select
                      className="form-select"
                      name="filter"
                      id="filter"
                      onChange={(event) => setFilter(event.target.value)}
                    >
                      <option value="">Selecciona una categoria</option>
                      {tagsFilter &&
                        tagsFilter.map((tag) => {
                          return <option value={tag}>{tag}</option>;
                        })}
                    </select>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary mx-3"
                    onClick={() => filterData(filter)}
                  >
                    Filtrar
                  </button>
                </div>
                <Link to={"/post/create"} className="btn btn-success">
                  Crear post
                </Link>
              </form>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12">
              {FilterData && FilterData.length > 0 ? (
                FilterData.map((post) => {
                  return (
                    <CardPost
                      key={post[0]}
                      postObject={post[1]}
                      postId={post[0]}
                    />
                  );
                })
              ) : posts ? (
                posts.map((post) => {
                  return (
                    <CardPost
                      key={post[0]}
                      postObject={post[1]}
                      postId={post[0]}
                    />
                  );
                })
              ) : (
                <p className="text-danger">No se encontro ningun post</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
