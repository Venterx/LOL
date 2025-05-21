import React, { useEffect, useState } from "react"
import Search from "../../components/Search/Search"
import { products } from "../../products"

export default function PostPage() {

    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState();

    const [find, setFind] = useState('');
    const filtered = users.filter(item => item.name.toLowerCase().includes(find.toLowerCase()))
    
    // const filtered = posts.filter(item => item.name.toLowerCase().include(find.toLowerCase()))
    
    
    

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        fetch('https://jsonplaceholder.typicode.com/users'), {
            method: "POST",
            body: formData
        }
        e.target.reset();
        setMessage('Форма отправлена')

    }


    async function fetchPosts() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const posts = await response.json()
        setUsers(posts)
    }
    
    useEffect(() => {
        fetchPosts()
    }, [])



    

    return(
        <>
            <div className="container">

                <div className="search" style={{margin:"auto", width:"600px", marginTop:"30px"}}>

                    <Search handleChange={(e) => setFind(e.target.value)} />
                </div>

                <form onSubmit={handleSubmit} style={{padding:"15px",  marginBottom:"20px", }}>
                    <div className="form__inner" style={{width:"600px",margin:"auto", display:"flex", flexDirection:"column",  gap:"10px"}}>

                        <input type="text" name="name" placeholder="Введите имя" style={{padding:"10px"}}/>
                        <input type="text" name="id" placeholder="Введите id" style={{padding:"10px"}}/>
                        <button style={{padding:"10px"}} type="submit">Отправить</button>
                        <p style={{color:'#0009ea'}} >{message}</p>
                    </div>
                </form>
               

                { filtered.length ?
                        filtered.map(user=><div className="post" style={{padding:"15px", border:"1px solid black", marginBottom:"20px"}}>

                            <p>{user.id}</p>
                            <p>{user.name}</p>
                    </div>)
                : <p style={{padding:"10px"}}>{find} not founded</p>}
            </div>
        </>
    )

}