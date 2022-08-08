import React, { useEffect, useState } from "react";
import { postApi } from "../../utils/Api/Api";
import useToken from "../../hooks/useToken";
import { storage } from "../../utils/firebase/firebase";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
const AddBook = () => {
  const [select, setSelect] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [token] = useToken();
  const handlePost = (e) => {
    e.preventDefault();

    const {
      book_name,
      book_author,
      book_ganre,
      book_status,
      book_select,
      book_language,
      book_price,
      book_desc,
    } = e.target.elements;

    const obj = {
      book_title: book_name.value,
      book_author: book_author.value,
      book_ganre: book_ganre.value,
      book_status: book_status.value,
      book_select: book_select.value,
      book_language: book_language.value,
      book_price: book_price ? book_price.value : null,
      book_img: imageUrl,
      book_desc: book_desc.value,
      token,
    };
    fetch(`http://localhost:9009/addbook`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: token,
      },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    e.target.reset();
  };

  const handleImg = (e) => {
    e.preventDefault();

    const imageUpload = e.target.files[0];

    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snaphsot) => {
      getDownloadURL(snaphsot.ref).then((url) => {
        setImageUrl(url);
      });
    });
  };
  return (
    <div>
      <div className="modal1 my-5">
        <form action="" className="" onSubmit={(e) => handlePost(e)}>
          <label htmlFor="inputEmail" className="form-label mt-4">
            kitob nomini kiriting
          </label>
          <input
            required
            name="book_name"
            type="text"
            className="form-control w-50"
            id="inputEmail"
          />
          <label htmlFor="inputEmail1" className="form-label mt-4">
            kitob yozuvchisini kiriting
          </label>
          <input
            required
            name="book_author"
            type="text"
            className="form-control w-50"
            id="inputEmail1"
          />
          <label htmlFor="inputEmail2" className="form-label mt-4">
            kitob janerini kiriting
          </label>
          <input
            required
            name="book_ganre"
            type="text"
            className="form-control w-50"
            id="inputEmail2"
          />
          <label htmlFor="inputEmail3" className="form-label mt-4">
            kitob holatini kiriting
          </label>
          <select name="book_status" id="" className="form-select w-50">
            <option value="yangi">Yangi</option>
            <option value="o'rta">O'rta</option>
            <option value="eski">Eski</option>
          </select>
          <label htmlFor="inputEmail3" className="form-label mt-4">
            kitob joylash turi
          </label>
          <select
            name="book_select"
            id=""
            className="form-select w-50"
            onChange={(e) => setSelect(e.target.value)}
          >
            <option value="hadya qolaman">hadya qolaman</option>
            <option value="kitob almashaman">kitob almashaman</option>
            <option value="sotaman">sotaman</option>
          </select>
          <label htmlFor="inputEmail3" className="form-label mt-4">
            kitob tilini talang
          </label>
          <select name="book_language" id="" className="form-select w-50">
            <option value="uz">uz</option>
            <option value="ru">ru</option>
            <option value="en">en</option>
          </select>
          {select == "sotaman" ? (
            <>
              <label htmlFor="inputEmail3" className="form-label mt-4">
                kitob Narhini kiriting
              </label>
              <input
                required
                name="book_price"
                type="text"
                className="form-control w-25"
                id="inputEmail3"
              />
            </>
          ) : null}
          <label htmlFor="inputEmail4" className="form-label mt-4">
            Kitobga oid rasimni kiriting
          </label>
          <input
            required
            name="book_img"
            type="file"
            className="form-control w-25"
            id="inputEmail4"
            onChange={(e) => handleImg(e)}
          />
          <label htmlFor="inputEmail5" className="form-label mt-4">
            kitob haqida qo’shimcha ma’lumot kiriting
          </label>
          <textarea
            name="book_desc"
            className="form-control w-50"
            type="text"
            id="inputEmail5"
            colmn="10"
            rows="8"
          />
          <div className="w-50 my-3 mx-1 row justify-content-end">
            <button
              disabled={imageUrl ? false : true}
              className={`btn btn-color w-25  `}
            >
              E’loni joylash
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
