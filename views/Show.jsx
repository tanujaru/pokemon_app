const React = require("react");

const Styleh = {
  color: "#ffffff",
  backgroundColor: "blue",
  textAlign: "center",
};
class Show extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
        <div>
        <h1 style={Styleh}>Gotta Catch 'Em All</h1>
        <h2>{pokemon.name}</h2>
        <a href="/pokemon">Back</a>
        <img src={pokemon.img+".jpg"} />
    </div>
    );
  }
}
module.exports = Show;