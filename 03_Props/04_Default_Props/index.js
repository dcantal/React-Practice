class App extends React.Component {
    render() {
        return (
            <div>
                <Hello to="Testing" />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));