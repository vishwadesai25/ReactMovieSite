import React from 'react';
import { useNavigate} from "react-router-dom";

const Error = () => {
    const history = useNavigate();
    return (
        <>
            <button onClick={() => history(`/`)} class="button-19" role="button">Back</button>
            <div className='message'>We are sorry but you probably made any mistake !!😓</div>
        </>
    );
};


export default Error;