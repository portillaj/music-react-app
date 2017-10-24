import React, { Component } from 'react';

//component
import Banner from './banner';
import ArtistsList from './artistList';

//STORE API LINK IN VARIABLE
const URL_ARTISTS = 'http://localhost:3004/artists';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            artists: ''
        }
    }

       //fetch API
       componentDidMount() {
           fetch(URL_ARTISTS, {
               method: 'GET'
           })
           .then(response => response.json())
           .then(json => {
               console.log(json);
               this.setState({
                   artists: json
               })
           });
       }

    render() {
        return (
            <div>
                <Banner />
                <ArtistsList allArtists={this.state.artists}/>
            </div>
        )
    }

}

export default Home;