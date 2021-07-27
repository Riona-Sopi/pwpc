import React, { useState, useEffect } from 'react'

const defaultImageSrc = '/img/image_placeholder.png'

const initialFieldValues = {
    productID: 0,
    productTitle: '',
    productDescription: '',
    maximumThickness: '',
    minimumThickness: '',
    maximumWidth: '',
    minimumWidth: '',
    maximumLength: '',
    minimumLength: '',
    imageSrc: defaultImageSrc,
    imageFile: null
}

export default function Product(props) {

    const { addOrEdit, recordForEdit } = props

    const [values, setValues] = useState(initialFieldValues)
    const [errors, setErrors] = useState({})


    useEffect(() => {
        if (recordForEdit != null)
            setValues(recordForEdit);
    }, [recordForEdit])

    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const showPreview = e => {
        if (e.target.files && e.target.files[0]) {
            let imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = x => {
                setValues({
                    ...values,
                    imageFile,
                    imageSrc: x.target.result
                })
            }
            reader.readAsDataURL(imageFile)
        }
        else {
            setValues({
                ...values,
                imageFile: null,
                imageSrc: defaultImageSrc
            })
        }
    }

    const validate = () => {
        let temp = {}
        temp.productTitle = values.productTitle == "" ? false : true;
        temp.imageSrc = values.imageSrc == defaultImageSrc ? false : true;
        setErrors(temp)
        return Object.values(temp).every(x => x == true)
    }

    const resetForm = () => {
        setValues(initialFieldValues)
        document.getElementById('image-uploader1').value = null;
        setErrors({})
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        if (validate()) {
            const formData = new FormData()
            formData.append('productID', values.productID)
            formData.append('productTitle', values.productTitle)
            formData.append('productDescription', values.productDescription)
            formData.append('maximumThickness', values.maximumThickness)
            formData.append('minimumThickness', values.minimumThickness)
            formData.append('maximumWidth', values.maximumWidth)
            formData.append('minimumWidth', values.minimumWidth)
            formData.append('maximumLength', values.maximumLength)
            formData.append('minimumLength', values.minimumLength)
            formData.append('imageName', values.imageName)
            formData.append('imageFile', values.imageFile)
            addOrEdit(formData, resetForm)
        }
    }

    const applyErrorClass = field => ((field in errors && errors[field] == false) ? ' invalid-field' : '')

    return (
        <>
            <div className="container text-center">
                <p className="lead">Product</p>
            </div>
            <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
                <div className="card">
                    <img src={values.imageSrc} className="card-img-top" />
                    <div className="card-body">
                        <div className="form-group">
                            <input type="file" accept="image/*" className={"form-control-file" + applyErrorClass('imageSrc')}
                                onChange={showPreview} id="image-uploader1" />
                        </div>
                        <div className="form-group">
                            <input className={"form-control" + applyErrorClass('productTitle')} placeholder="Product Title" name="productTitle"
                                value={values.productTitle}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Product Description" name="productDescription"
                                value={values.productDescription}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Maximum Thickness" name="maximumThickness"
                                value={values.maximumThickness}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Minimum Thickness" name="minimumThickness"
                                value={values.minimumThickness}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Maximum Width" name="maximumWidth"
                                value={values.maximumWidth}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Minimum Width" name="minimumWidth"
                                value={values.minimumWidth}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Maximum Length" name="maximumLength"
                                value={values.maximumLength}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Minimum Length" name="minimumLength"
                                value={values.minimumLength}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form-group text-center">
                            <button type="submit" className="btn btn-light">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
