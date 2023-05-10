import React, { useRef } from "react";
import { firestore } from "../firebase";
import { addDoc, collection } from "@firebase/firestore";
import ProductCard from "../components/ProductCard";
import "../css/adminupload.css";

function AdminUpload({ product, onAdd }) {
  const kategori = useRef();
  const pname = useRef();
  const info = useRef();
  const pic = useRef();
  const ref = collection(firestore, "products");
  const time = { date: new Date() };
  //console.log(time);
  const number = product.length + 100001;
  //console.log(number);

  const handleSave = async (e) => {
    e.preventDefault();

    let data = {
      kategori: kategori.current.value,
      produktnamn: pname.current.value,
      info: info.current.value,
      bild: pic.current.value,
      articlenumber: number,
    };

    try {
      addDoc(ref, data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="body">
      <form className="form mt-5" onSubmit={handleSave}>
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

          <button className="btn btn-dark submit" type="submit">
            Submit
          </button>
        </fieldset>
      </form>

      <hr />
      <div className="d-flex justify-content-center h5">
        Tillagda produkter:
      </div>
      <div className="display-products">
        {product?.map((product) => (
          <ProductCard key={product.id} product={product} onAdd={onAdd} />
        ))}
      </div>
    </div>
  );
}

export default AdminUpload;
