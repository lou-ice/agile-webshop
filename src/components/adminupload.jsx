import React, { useRef, useState, useEffect } from "react";
import { firestore } from "../firebase";
import "../css/adminupload.css";
import { addDoc, collection, getDocs } from "@firebase/firestore";

function AdminUpload() {
  const [product, setProduct] = useState([]);
  const kategori = useRef();
  const pname = useRef();
  const info = useRef();
  const pic = useRef();
  const ref = collection(firestore, "products");
  const handleSave = async (e) => {
    e.preventDefault();

    let data = {
      kategori: kategori.current.value,
      produktnamn: pname.current.value,
      info: info.current.value,
      bild: pic.current.value,
    };

    try {
      addDoc(ref, data);
    } catch (e) {
      console.log(e);
    }
  };
  const fetchPost = async () => {
    await getDocs(collection(firestore, "products")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProduct(newData);
      console.log(newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div className="body">
      <form className="form" onSubmit={handleSave}>
        <fieldset className="border p-4">
          <legend className="float-none w-auto">Lägg till produkt</legend>
          <label className="form-label" htmlFor="">
            Kategori
          </label>
          <input className="form-control" type="text" ref={kategori} />
          <label className="form-label" htmlFor="">
            Produktnamn
          </label>
          <input className="form-control" type="text" ref={pname} />
          <label className="form-label" htmlFor="">
            Info
          </label>
          <textarea className="form-control" type="text" ref={info} />
          <label className="form-label" htmlFor="">
            Bildlänk
          </label>
          <input className="form-control" type="text" ref={pic} />
          <button className="btn btn-primary submit" type="submit">
            Submit
          </button>
        </fieldset>
      </form>

      <hr />
      <div className="">
        {product?.map((product, i) => (
          <p key={i}>
            {product.kategori}: {product.produktnamn}
            <br /> {product.info} <br />
            <img className="image" src={product.bild} alt="" width={"100px"} />
          </p>
        ))}
      </div>
    </div>
  );
}

export default AdminUpload;
