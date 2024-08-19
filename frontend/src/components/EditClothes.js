import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditClothes = () => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("Red");
  const [size, setSize] = useState("S");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getClothesById();
  }, []);

  const updateClothes = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/clothes/${id}`, {
        name,
        color,
        size,
        price,
        stock,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getClothesById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/clothes/${id}`);
      setName(response.data.name);
      setColor(response.data.color);
      setSize(response.data.size);
      setPrice(response.data.price);
      setStock(response.data.stock);
    } catch (error) {
      console.log(error);
    }
  };

  const incrementStock = () => setStock(stock + 1);
  const decrementStock = () => setStock(stock > 0 ? stock - 1 : 0);

  const goBack = () => navigate("/");

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateClothes}>
          <div className="field">
            <label className="label">Name <span className="has-text-danger">*</span></label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Color <span className="has-text-danger">*</span></label> 
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  required
                >
                  <option value="Beige">Beige</option>
                  <option value="Black">Black</option>
                  <option value="Blue">Blue</option>
                  <option value="Brown">Brown</option>
                  <option value="Coral">Coral</option>
                  <option value="Cyan">Cyan</option>
                  <option value="Gold">Gold</option>
                  <option value="Gray">Gray</option>
                  <option value="Green">Green</option>
                  <option value="Indigo">Indigo</option>
                  <option value="Lavender">Lavender</option>
                  <option value="Magenta">Magenta</option>
                  <option value="Maroon">Maroon</option>
                  <option value="Navy">Navy</option>
                  <option value="Olive">Olive</option>
                  <option value="Orange">Orange</option>
                  <option value="Pink">Pink</option>
                  <option value="Purple">Purple</option>
                  <option value="Red">Red</option>
                  <option value="Yellow">Yellow</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Size <span className="has-text-danger">*</span></label> 
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  required
                >
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                  <option value="XXXL">XXXL</option>
                  <option value="XXXXL">XXXXL</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Price <span className="has-text-danger">*</span></label> 
            <div className="control">
              <input
                type="number"
                className="input"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Stock <span className="has-text-danger">*</span></label>
            <div className="control">
              <div className="is-flex is-align-items-center">
                <button
                  type="button"
                  className="button is-small is-info"
                  onClick={decrementStock}
                >
                  -
                </button>
                <input
                  type="number"
                  className="input mx-2"
                  value={stock}
                  onChange={(e) => setStock(Number(e.target.value))}
                  required
                />
                <button
                  type="button"
                  className="button is-small is-info"
                  onClick={incrementStock}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button type="submit" className="button is-success">
                Update
              </button>
            </div>
            <div className="control">
              <button type="button" className="button is-link" onClick={goBack}>
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditClothes;
