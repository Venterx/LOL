

export default function Search({handleChange}) {
    
    return(
        <>
            <input type="text" placeholder="Поиск" onChange={handleChange} style={{padding:"10px", border:"1px solid #0009ea", borderRadius:"5px"}}/>
        </>
    )

}