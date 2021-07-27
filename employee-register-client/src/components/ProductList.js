import React, { useState, useEffect } from 'react'
import Product from './Product'
import axios from "axios";

export default function ProductList() {
    const [productList, setProductList] = useState([])
    const [recordForEdit, setRecordForEdit] = useState(null)

    useEffect(() => {
        refreshProductList();
    }, [])

    const productAPI = (url = process.env.REACT_APP_API_URL + '/Product/') => {
        return {
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    }

    function refreshProductList() {
        productAPI().fetchAll()
            .then(res => {
                setProductList(res.data)
            })
            .catch(err => console.log(err))
    }

    const addOrEdit = (formData, onSuccess) => {
        if (formData.get('productID') == "0")
            productAPI().create(formData)
                .then(res => {
                    onSuccess();
                    refreshProductList();
                })
                .catch(err => console.log(err))
        else
            productAPI().update(formData.get('productID'), formData)
                .then(res => {
                    onSuccess();
                    refreshProductList();
                })
                .catch(err => console.log(err))

    }

    const showRecordDetails = data => {
        setRecordForEdit(data)
    }

    const onDelete = (e, id) => {
        e.stopPropagation();
        if (window.confirm('Are you sure to delete this record?'))
            productAPI().delete(id)
                .then(res => refreshProductList())
                .catch(err => console.log(err))
    }

    const imageCard = data => (
        <div className="card" onClick={() => { showRecordDetails(data) }}>
            <img src={data.imageSrc} className="card-img-top rounded-circle" />
            <div className="card-body">
                <h5>{data.productTitle}</h5>
                <span>{data.productDescription}</span> <br />
                <span>{data.maximumThickness}</span> <br />
                <span>{data.minimumThickness}</span> <br />
                <span>{data.maximumWidth}</span> <br />
                <span>{data.minimumWidth}</span> <br />
                <span>{data.maximumLength}</span> <br />
                <span>{data.minimumLength}</span> <br />
                <button className="btn btn-light delete-button" onClick={e => onDelete(e, parseInt(data.productID))}>
                    <i className="far fa-trash-alt"></i>
                </button>
            </div>
        </div>
    )


    return (
        <div className="row">
            <div className="col-md-12">
                <div className="jumbotron jumbotron-fluid py-4">
                    <div className="container text-center">
                        <h1 className="display-4">Product Register</h1>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <Product
                    addOrEdit={addOrEdit}
                    recordForEdit={recordForEdit}
                />
            </div>
            <div className="col-md-8">
                <table>
                    <tbody>
                        {
                            //tr > 3 td
                            [...Array(Math.ceil(productList.length / 3))].map((e, i) =>
                                <tr key={i}>
                                    <td>{imageCard(productList[3 * i])}</td>
                                    <td>{productList[3 * i + 1] ? imageCard(productList[3 * i + 1]) : null}</td>
                                    <td>{productList[3 * i + 2] ? imageCard(productList[3 * i + 2]) : null}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
