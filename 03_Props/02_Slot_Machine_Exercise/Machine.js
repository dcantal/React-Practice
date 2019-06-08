class Machine extends React.Component {
    render() {
        return (
            <div>
                <h1> {this.props.s1} &nbsp; {this.props.s2} &nbsp; {this.props.s3}</h1>
                {(this.props.s1 === this.props.s2 && this.props.s2 === this.props.s3) ? <h1>Congrats</h1> : <h1>Sorry</h1>}
            </div>
        );
    }
}

ReactDOM.render(<Machine />, document.getElementById('root'));