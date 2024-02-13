import React, { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

const CatEdit = ({updateCatProfile, cats}) => {

        const { id } = useParams();
        const currentCat = cats.find((item) => item.id === +id)
    const [updateFormData, setCatFormData] = useState({
        name: "",
        age: "",
        enjoys: "",
        image: ""
    })
    const navigate = useNavigate()
    const handleChange = (e) => {
        setCatFormData({ ...updateFormData, [e.target.name]: e.target.value })
    }
    const handleSubmit = () => {
        updateCatProfile(updateFormData, currentCat.id)
        navigate("/catindex")
    }
    return (
        <>
            <h1 className="EditCat">Edit Your Cat profile</h1>
            <Form className="form">
                <FormGroup>
                    <Label for="enjoys">Change What You Like To Do</Label>
                    <Input
                        type="text"
                        name="enjoys"
                        id="enjoys"
                        placeholder="minimum characters 10"
                        onChange={handleChange}
                        value={updateFormData.enjoys}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="image">Change Your Profile Picture</Label>
                    <Input
                        type="text"
                        name="image"
                        id="image"
                        placeholder="New URL Goes Here"
                        onChange={handleChange}
                        value={updateFormData.image}
                    />
                </FormGroup>
                <Button onClick={handleSubmit}>Submit</Button>
            </Form >
        </>
    )
}
export default CatEdit