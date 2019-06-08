function getNum() {
    return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
    render() {
        const num = getNum();
        let msg;
        if (num === 7) {
            msg =
                <div>
                    <h2>Congrats!</h2>
                </div>
        } else {
            msg =
                <div>
                    <h2>Sorry!</h2>
                </div>
        }
        return (
            <div>
                <h1>Your number is... {num}</h1>
                {/* Ternary */}
                {/* <p>{num === 7 ? 'Congrats!' : 'Unlucky!'}</p> */}

                {/* Boolean And */}
                {/* <p>{num ===7 && 'Congrats'}</p> */}
                {msg}
            </div>
        )
    }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));