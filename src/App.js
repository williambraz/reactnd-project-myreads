import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBook from './SearchBook'
import ListBooks from './ListBooks'
import {Route} from 'react-router'

class BooksApp extends React.Component {
  state = {}
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={ListBooks}/>
        <Route path="/search" component={SearchBook}/>
      </div>
    )
  }
}

export default BooksApp
