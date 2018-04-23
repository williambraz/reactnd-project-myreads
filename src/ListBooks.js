import React, {Component} from 'react'
import Bookshelf from './Bookshelf'
import {Link} from 'react-router-dom'

class ListBooks extends Component{
    render(){
        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf title="Current Reading"/>
                        <Bookshelf title="Want to Read"/>
                        <Bookshelf title="Read"/>
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default ListBooks