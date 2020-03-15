import React , { Component } from 'react';

import axios from 'axios';
import { 
    RICKMORTY_API,
    HEROKU_BYPASS_CORS,
} from '../constants/constants';

export default class CardSpecific extends Component {
    state = { 
        results: undefined,
    }

    
    componentDidMount() {
        console.log('match', this.props.match)

        axios.get(HEROKU_BYPASS_CORS + RICKMORTY_API + this.props.match.params.id)
            .then(result=> {
                this.setState ({
                    results: result.data.results
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

render() {
    const { results } = this.state;
    return (
        <div className="row">
            <div className="col-sm-12 card-spec">
            </div>
            <div className="col-sm-12 card-spec">
                {
                    (results !== undefined) ?
                         <>
                            <h1>{results.data.results.name}</h1>
                            <img src={results.image} alt={results.info} />
                            <br /><br />
                            <div>{results.data.species}</div>
                            <div>{results.gender}</div>
                    </> :
                    <div>No data</div>

                }
            </div>
        </div>
    )
}
}