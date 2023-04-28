import React, { useState } from "react";
import { useNavigate} from "react-router-dom";

const SurveyForm = (props) => {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const navigate = useNavigate();
    
    const sendSurvey = (e) => {
        e.preventDefault();
        /* When the user clicks the submit input in the form, we will navigate to the "/results" path */
        navigate("/");
    }
    
    return (
        <form onSubmit={ sendSurvey }>
            <h2>Survey</h2>
            <label>Your Name:</label>
            <input type="text" onChange={ (e) => setName(e.target.value) } value={ name } />
            <label>Your Comment:</label>
            <textarea onChange={ (e) => setComment(e.target.value) } value={ comment }></textarea>
            <input type="submit" value="Submit Survey" />
        </form>
    );
}

export default SurveyForm