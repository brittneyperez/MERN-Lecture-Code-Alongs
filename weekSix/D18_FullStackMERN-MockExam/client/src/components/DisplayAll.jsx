import React, { useEffect } from 'react'
import axios from 'axios'

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
                        <p>{album.releaseYear} • {album.artist}</p>
                        <p>Explicit?</p>
                        { album.explicit ? <p>Yes</p> : <p>No</p> }
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default DisplayAll