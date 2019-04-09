import React from 'react';

import { connect } from 'react-redux';
//import { actionCreator } from './App';

const countWithConnect = (props) => {
    console.log('props', props)
    return <div>
        <h1>Count - {props.count}</h1>
        <div>
            {
                <button onClick={() => {
                    props.dispatch({
                        type: 'ADD',
                        Count: 100
                    })
                }}>click Me to run</button>
            }
        </div>
    </div>
}


export const mapDispatchToProps = (dispatch) => {
    return {
        addMe: () => {
            dispatch({
                type: 'ADD',
                Count: 1
            })

            dispatch({
                type: 'ADD',
                Count: 1
            })
        }
    }
}

export const mapSateToProps = (state) => {
    console.log('state', state);
    return {
        count: state
    }
}

export default connect(mapSateToProps)(countWithConnect);