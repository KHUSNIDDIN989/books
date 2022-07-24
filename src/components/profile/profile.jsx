import React from "react";
import { useState } from "react";
import { postApi, putApi, deleteApi, getApi } from "../../utils/Api/Api";
import useToken from "../../hooks/useToken";
import { useEffect } from "react";

import "./profile.css";
const Profile = () => {
  const [profile, setProfile] = useState(true);
  const [user, setUser] = useState([]);
  const [data, setData] = useState([]);
  const [userBook, setUserBook] = useState([]);
  const [deleteBook, setDeleteBook] = useState([]);
  const [token] = useToken();

  useEffect(() => {
    postApi(`profile/${token}`).then((data) => setData(data.data));
    getApi(`userBook/${token}`).then((res) => setUserBook(res.data));
  }, [user, deleteBook]);

  const handleForm = (e) => {
    e.preventDefault();
    const { name, tel, password } = e.target;

    const obj = {
      name: name.value,
      tel: tel.value,
      password: password.value,
      token: token,
    };
    putApi(`updateUser`, obj).then((data) => setUser(data));
    e.target.reset();
  };

  const handleDelete = (e) => {
    e.preventDefault();

    if (window.confirm("Hisoningiz O'chib ketishi mumkin")) {
      deleteApi(`deleteUser/${token}`).then((res) => {
        if (res) {
          window.localStorage.removeItem("token");
          window.location.reload();
        }
      });
    }
  };

  const handleDeleteBook = (e) => {
    e.preventDefault();
    deleteApi(`deleteUserBook/${e.target.id}`).then((res) =>
      setDeleteBook(res)
    );
  };

  console.log(userBook);
  return (
    <div className="row">
      <div className="col-4 my-5">
        <div className="card p-4">
          <div className="d-flex justify-content-between px-3 align-items-center">
            <i className="bi bi-person-circle fs "></i>
            <div className="">
              {data?.map((e) => (
                <div key={e.user_id}>
                  <p>{e.user_name}</p>
                  <p>{e.user_phone}</p>
                </div>
              ))}
            </div>
          </div>
          <button
            className="btn hover my-2 mt-4"
            onClick={(e) => setProfile(true)}
          >
            Men qo’ygan e’lonlar
          </button>
          <button
            className="btn hover my-2"
            onClick={(e) => {
              setProfile(false);
            }}
          >
            Hisobni sozlash
          </button>

          <div className="d-flex justify-content-evenly w-100 mt-3">
            <div className="cursor bg-secondary text-light rounded-circle px-2 py-1 d-flex justify-content-center align-items-center">
              <i className="bi bi-telephone index"></i>
            </div>

            <div className="cursor bg-secondary text-light rounded-circle px-2 py-1 d-flex justify-content-center align-items-center">
              <i className="bi bi-telegram index"></i>
            </div>

            <div className="cursor bg-secondary text-light rounded-circle px-2 py-1 d-flex justify-content-center align-items-center">
              <i className="bi bi-instagram index"></i>
            </div>
          </div>
        </div>
      </div>
      {profile ? (
        <div className="col-8 my-5">
          <div className="card p-4 scrol">
            {userBook &&
              userBook.map((e) => (
                <div key={e.book_id}>
                  <img
                    src={e.book_img}
                    className="img-fluid w-25 my-3"
                    alt=""
                  />
                  <p>Kitob mualifi: {e.book_athor}</p>
                  <p>Kitob nomi: {e.book_title}</p>
                  <p>Kitob janri: {e.book_ganre}</p>
                  <p>Kitob holati: {e.book_status}</p>
                  <p>Kitob statusi: {e.book_select}</p>
                  <p>Kitob narxi: {e.book_price}</p>
                  <p>Kitob tili: {e.book_language}</p>
                  <p>Kitob haqida: {e.book_desc}</p>
                  <button
                    className="btn btn-danger my-3"
                    id={e.book_id}
                    onClick={(e) => handleDeleteBook(e)}
                  >
                    Kitobni O'chirish
                  </button>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <div className="col-8 my-5">
          <form
            className="card p-4 form-control"
            onSubmit={(e) => handleForm(e)}
          >
            <label htmlFor="">Ismni O'zgatrish</label>
            <input
              className="form-control my-3"
              type="text"
              name="name"
              id=""
            />
            <label htmlFor="">Tel nomerni O'zgartirish</label>
            <input className="form-control my-3" type="tel" name="tel" id="" />
            <label htmlFor="">Parolni O'zgartirish</label>
            <input
              className="form-control my-3"
              type="password"
              name="password"
              id=""
            />
            <button className="btn btn-primary">Qushish</button>
            <button
              className="btn btn-danger my-3"
              onClick={(e) => handleDelete(e)}
            >
              Hisobni O'chirish
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Profile;
