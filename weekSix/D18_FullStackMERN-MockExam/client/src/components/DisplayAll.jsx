import React, { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const DisplayAll = ({ allAlbums, setAllAlbums }) => {
    
    // const [allAlbums, setAllAlbums] = useState([])
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/allAlbums")
            .then((res) => {
                console.log(res.data);
                setAllAlbums(res.data.albums);
            })
            .catch((err) => {
                console.log(err);
            })
	}, [])
    
    
    return (
        <div>
            <h2>DisplayAll</h2>
            <div>
            {
                allAlbums.map((album) => (
                    <div key={ album._id }>
                        <h3>{ album.albumName }</h3>
                        <p>{album.artist}</p>
                        
                        <div style={{display:'flex',justifyContent:'center', gap:'0.5rem'}}>
                            <Link to={`/oneAlbum/${album._id}`}>Details</Link>
                            |
                            <Link to={`/editAlbum/${album._id}`}>Edit</Link>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default DisplayAll