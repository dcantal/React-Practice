class App extends React.Component {
    render() {
        return (
            <div>
                <Machine s1="x" s2="x" s3="y" />
                <Machine s1="y" s2="z" s3="x" />
                <Machine s1="y" s2="y" s3="y" />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));