import {useState} from "react";


function SignUpForm({setToken}){

    const [form, setForm]=useState({
        username:"",
        password:""
    })


    const submit = async (event)=>{
        event.preventDefault()
        console.log(form)
        try {
            const response = await fetch(
                "https://fsa-jwt-practice.herokuapp.com/signup",
                {
                    method: "POST",
                    headers:{
                        "Content-Type": "application/json",
                    },
                    body:JSON.stringify({
                        username:form.username,
                        password:form.password
                    })
                }
            );

            const result = await response.json();
            
            setToken(result.token);
        }catch(error){
            console.log(error)
        }
    }

    const setChange = (event)=>{
        const newObj = {...form};
        newObj[event.target.name]=event.target.value;
        setForm(newObj)
        // console.log(form)
    }


    return(
        <>
            <h2>Sign Up Here!</h2>
            <form onSubmit={submit}>
                <input type="text" name={"username"} onChange={setChange} placeholder={"username..."} minLength={"6"}/>
                <input type="password" name={"password"} onChange={setChange} placeholder={"password..."} minLength={"6"}/>
                <input id={"submit"} type="submit" value={"Submit"}/>
            </form>
        </>
    )
}
export default SignUpForm;