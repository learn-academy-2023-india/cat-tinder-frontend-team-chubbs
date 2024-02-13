import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';


const CatNew = ({createCat}) => {
    const [createFormData, setCatFormData] = useState({
        name: "",
        age: "",
        enjoys: "",
        image: ""
    })

    const navigate = useNavigate()
    const handleChange = (e) => {
        setCatFormData({...createFormData, [e.target.name]: e.target.value})
    }
    const handleSubmit = () => {
        createCat(createFormData)
        navigate("/catindex")
    }

    return (
        <>
            <h1>Create Your Cat Profile</h1>
            <Form className="form">
                <FormGroup>
                    <Label for="name">Enter Your Purry Name</Label>
                    <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        onChange={handleChange}
                        value={createFormData.name}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="age">Enter Your Age</Label>
                    <Input
                        type="number"
                        name="age"
                        id="examplePassword"
                        placeholder="Age"
                        onChange={handleChange}
                        value={createFormData.age}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="enjoys">Type What You Like To Do</Label>
                    <Input
                        type="text"
                        name="enjoys"
                        id="enjoys"
                        placeholder="minimum characters 10"
                        onChange={handleChange}
                        value={createFormData.enjoys}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="image">Enter URL For Your Profile Picture</Label>
                    <Input
                        type="text"
                        name="image"
                        id="image"
                        placeholder="URL Goes Here"
                        onChange={handleChange}
                        value={createFormData.image}
                    />
                </FormGroup>
                <Button onClick={handleSubmit}>Submit</Button>
            </Form>
        </>
    )
}
export default CatNew