class Machine extends React.Component {
    render() {
        const {s1, s2, s3} = this.props;
        const winner = (s1 === s2) && (s2 === s3);

        return (
            <div>
                <h1> {s1} &nbsp; {s2} &nbsp; {s3}</h1>
                <p>{winner ? "Winner" : "Loser"}</p>
            </div>
        );
    }
}

ReactDOM.render(<Machine />, document.getElementById('root'));