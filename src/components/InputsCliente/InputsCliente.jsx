import { useState } from "react";

const InputsCliente = () => {
        const {inputName, setInputName} = useState ('');
        const {address, setAddress} = useState ('');
        const {email, setEmail} = useState ('');

        return(
            <form>
                <div>
                    <label>Nombre</label>
                    <input 
                    type="text"
                    required
                    value={inputName}
                    onChange={(e)=>setInputName(e.target.value)} />
                </div>
                <div>
                    <label>Dirección</label>
                    <input 
                    type="text"
                    required
                    value={address}
                    onChange={(e)=>setAddress(e.target.value)} />
                </div>
                <div>
                    <label>Correo Electrónico</label>
                    <input 
                    type="text"
                    required
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)} />
                </div>
            </form>
        )
}

export default InputsCliente;