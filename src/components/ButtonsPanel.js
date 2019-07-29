import React, { Component } from 'react'
import './Styles.css'

export class ButtonsPanel extends Component {
    constructor() {
        super()
        this.state = {
            value: ' '
        }
        this.onChange = this.onChange.bind(this)
    }

    buttonPressed(e) {
        
        this.setState({
            value: this.state.value + e.target.value
        })

    }
    clear() {

        this.setState({
            value: ""
        })
    }
    onChange(e) {
        const re = /^[0-9, "\+", "\-","\.", "\/", "\%", "\*" \b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            this.setState({ value: e.target.value })
        }
    }
    result() {
        // console.log(this.state.value)
        try {
            this.setState({
                value: eval(this.state.value)
            })
        }
        catch{
            this.setState({
                value: "error"
            })
        }
    }

    render() {
        return (
            <>
                <div id="cal">
                    <img src={require("/home/vedantu/Documents/task/react/calculator/src/logo.png")} className="logo" />
                    <input value={this.state.value} onChange={this.onChange} className="userInput" ></input>
                    <div>
                        <button value="C" className="clear" onClick={() => this.clear()}>C</button>
                        <button value="%" onClick={(e) => this.buttonPressed(e)}>%</button>
                        <button value="/" onClick={(e) => this.buttonPressed(e)}>/</button>
                    </div>
                    <div>
                        <button value="7" onClick={(e) => this.buttonPressed(e)}>7</button>
                        <button value="8" onClick={(e) => this.buttonPressed(e)}>8</button>
                        <button value="9" onClick={(e) => this.buttonPressed(e)}>9</button>
                        <button value="*" onClick={(e) => this.buttonPressed(e)}>x</button>
                    </div>
                    <div>
                        <button value="4" onClick={(e) => this.buttonPressed(e)}>4</button>
                        <button value="5" onClick={(e) => this.buttonPressed(e)}>5</button>
                        <button value="6" onClick={(e) => this.buttonPressed(e)}>6</button>
                        <button value="-" onClick={(e) => this.buttonPressed(e)}>-</button>

                    </div>
                    <div>
                        <button value="1" onClick={(e) => this.buttonPressed(e)}>1</button>
                        <button value="2" onClick={(e) => this.buttonPressed(e)}>2</button>
                        <button value="3" onClick={(e) => this.buttonPressed(e)}>3</button>
                        <button value="+" onClick={(e) => this.buttonPressed(e)}>+</button>
                    </div>
                    <div>
                        <button value="0" className="zero" onClick={(e) => this.buttonPressed(e)}>0</button>
                        <button value="." onClick={(e) => this.buttonPressed(e)}>.</button>
                        <button value="=" className="result" onClick={(e) => this.result(e)}>=</button>
                    </div>
                </div>
            </>
        )
    }
}

export default ButtonsPanel