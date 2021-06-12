import React, { Component, Fragment } from 'react'
import Todo from "./Todo"
import './style.css'
export default class App extends Component {
    state = {
        task: [],
        text: ""
    }
    changeText = (h) =>{
        this.setState({text:h.target.value})
    }
    clickText = (h) =>{
        if (this.state.text!=="") {
            const doTask = [...this.state.task, this.state.text];
            this.setState({task:doTask, text:""})

        }
    }
    render() {
        return (
            <Fragment>
                <h1>My TODOs List</h1>
                <div className="container">
                <input type="text" value={this.state.text} onChange={this.changeText}/>
                <button className="btn" onClick={this.clickText}>Add Task</button>
                </div>
                {
                    this.state.task.map((value, i)=>{
                        return <Todo key={i} value={value}/>
                    })
                }
                
            </Fragment>
        )
    }
}
