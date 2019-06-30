class Machine extends React.Component {
    render() {
        const {s1, s2, s3} = this.props;
        const winner = (s1 === s2) && (s2 === s3);
        const colors = { fontSize: '50px', backgroundColor: 'purple' };

        return (
            <div className="Machine">
                <label for="textInput"></label>
                <h1 style={colors}> 
                    {s1} &nbsp; {s2} &nbsp; {s3}
                </h1>
                <p className={winner ? 'win' : 'lose'}>{winner ? "Winner" : "Loser"}</p>
            </div>
        );
    }
}

ReactDOM.render(<Machine />, document.getElementById('root'));