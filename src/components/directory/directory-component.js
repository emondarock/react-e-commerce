import React from 'react';
import {useState} from "react";
import MenuItemComponent from "../menu-item/menu-item-component";
import './directory.style.scss'

const DirectoryComponent = () => {
    const [sections, setSection] = useState([
        {
            title: 'hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            id: 1
        },
        {
            title: 'jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2
        },
        {
            title: 'sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3
        },
        {
            title: 'womens',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            size: 'large',
            id: 4
        },
        {
            title: 'mens',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            size: 'large',
            id: 5
        }
    ])
    return (
        <div>
            <div className="directory-menu">
                {
                    sections.map(({title, id, imageUrl,size}) => {
                        return <MenuItemComponent key={id} title={title.toUpperCase()} imageUrl={imageUrl} size={size}/>
                    })
                }
            </div>
        </div>
    );
};

export default DirectoryComponent;
