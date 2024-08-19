import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ClothesList = () => {
    const [clothes, setClothes] = useState([]);
    const [searchColor, setSearchColor] = useState("");
    const [searchSize, setSearchSize] = useState("");

    useEffect(() => {
        getClothes();
    }, []);

    const getClothes = async () => {
        const response = await axios.get("http://localhost:5000/clothes");
        setClothes(response.data);
    };

    const deleteClothes = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/clothes/${id}`);
            getClothes();
        } catch (error) {
            console.log(error);
        }
    };

    const sortedClothes = clothes
        .filter((item) =>
            (searchColor ? item.color === searchColor : true) &&
            (searchSize ? item.size === searchSize : true)
        )
        .sort((a, b) => {
            if (a.stock === 0) return -1;
            if (b.stock === 0) return 1;
            if (a.stock < 5) return -1;
            if (b.stock < 5) return 1;
            return 0;
        });

    return (
        <div className='columns mt-5 is-centered'>
            <div className='column is-full' style={{ paddingLeft: '20px' }}>
                <h1 className='title has-text-centered'>Sagara Store</h1>
                <div className='has-text-centered mb-4'>
                    <Link to="/add" className="button is-primary">
                        Add New Clothes
                    </Link>
                </div>
                <div className="field is-grouped">
                    <div className="control">
                        <div className="select">
                            <select value={searchColor} onChange={(e) => setSearchColor(e.target.value)}>
                                <option value="">All Colors</option>
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
                    <div className="control">
                        <div className="select">
                            <select value={searchSize} onChange={(e) => setSearchSize(e.target.value)}>
                                <option value="">All Sizes</option>
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
                <div className="columns is-multiline">
                    {sortedClothes.map((item, index) => (
                        <div className="column is-one-quarter" key={item.id}>
                            <div className="card">
                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-content">
                                            <p className="title is-4">{item.name}</p>
                                            <p className="subtitle is-6">{item.color}, {item.size}</p>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p>Price: {item.price}</p>
                                        <p>Stock: {item.stock}
                                            {item.stock < 5 && item.stock > 0 && (
                                                <span className="tag is-danger ml-2">Low Stock</span>
                                            )}
                                            {item.stock === 0 && (
                                                <span className="tag is-danger ml-2" style={{ backgroundColor: 'red' }}>Out of Stock</span>
                                            )}
                                        </p>
                                        <div className="buttons">
                                            <Link to={`edit/${item.id}`} className="button is-info">Edit</Link>
                                            <button onClick={() => deleteClothes(item.id)} className="button is-danger">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ClothesList;
