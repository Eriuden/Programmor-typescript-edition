import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux/actions/user.actions";
import UpdatePassword from "./UpdatePassword";

export const UserProfile = (userProps:any) => {

    const userData = useSelector((state: any) => state.userReducer)
    const dispatch = useDispatch

    const [name, setName] = useState(userData.name)
    const [description, setDescription] = useState(userData.description)
    const [usedLanguage, setUsedLanguage] = useState(userData.usedLanguage)
    const [updateForm, setUpdateForm] = useState(false)
  
    const handleUpdate = () => {
      updateUser(userProps, dispatch)
      setUpdateForm(false)
    }
    return (
      <div>
        <h1>Profil de {userData.name}</h1>
        <h3>{userData.description}</h3>
        <h3>{userData.usedLanguage}</h3>
  
        {updateForm === false && (
          <>
            <p onClick={() => setUpdateForm(!updateForm)}>Modifier votre profil</p>
          </>
        )}
  
        {updateForm && (
          <>
            <input type="text" defaultValue={name} onChange={(e)=> setName
            (e.target.value)}/>
            <textarea  placeholder="Si vous désirez apporter de nouvelles informations, faites vous plaisir" 
            defaultValue={description} onChange={(e)=>
            setDescription(e.target.value)}/>
            <textarea placeholder="Dites nous donc votre stack, en détail si ça vous chante"
            defaultValue={usedLanguage} onChange={(e)=>setUsedLanguage(e.target.value)}/>    
            <button onClick={handleUpdate}>Valider les modifications</button>
          </>
        )}
  
        <div>
          <h2>Modifier votre mot de passe</h2>
          <UpdatePassword/>
        </div>
        
      </div>
    )
}
