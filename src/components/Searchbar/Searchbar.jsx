import React, { Component } from 'react';
import './_searchbar.css';
import MaterialIcon, {colorPalette} from 'material-icons-react';

class Searchbar extends Component {
    render() {
        return (
            <div className='searchbar'>
                <input className='search-input' type='text' placeholder='Search'/>
                <button className='search-button'>
                    <MaterialIcon icon="search" />
                </button>

                <button className='voice-button'>
                    <MaterialIcon icon="mic" />
                </button>
            </div>

        );
    }
}

export default Searchbar;