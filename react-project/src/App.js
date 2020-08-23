import React, {Component} from 'react';
import './App.css';
import TransformNumbers from "./service/TransformNumbers";
import {INTERVAL, N_COLUMNS, N_ROWS} from "./config/config";
import Matrix from "./components/Matrix";
import {getRandomMatrix} from "./utils/random";

// let ar = new Array([0,1,0,0],[0,1,0,0],[0,1,0,0],[0,0,0,0]);

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: getRandomMatrix(N_COLUMNS, N_ROWS, 0, 1) //Array[[0,1,1,0][1,1,1,0][0,0,1,1]]
            // numbers: getRandomMatrix() // testPurpose
        }
            // console.log('inside constructor state BEFORE', this.state.numbers);
        this.transform = new TransformNumbers(); //making object with link to numbers but not using
            // console.log('inside constructor state AFTER', this.state.numbers);
            // console.log('inside constructor transform', this.transform);
    }

    tick() {
        this.setState({
            numbers: this.transform.getNumbers(this.state.numbers) //calling fN transform of object and refill the Array
        })
    }

    componentDidMount() {
        this.intervalId = setInterval(this.tick.bind(this), INTERVAL)
    }

    render() {
        return <Matrix numbers={this.state.numbers}/>
    }
}
