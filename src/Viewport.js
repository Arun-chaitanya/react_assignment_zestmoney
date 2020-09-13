import React from 'react'
import Tile from './Tile'
import './Viewport.css'

function Viewport({items,showDetails}) {
    return (
        <div className = 'viewport'>
            {
                items.map(item => (
                    <div className = 'tile__div' key = {item.id} onClick = {() => showDetails(item)}>
                        <Tile  item = {item} />
                    </div>                    
                ))
            }
        </div>
    )
}

export default Viewport;

