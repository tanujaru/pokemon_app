const React = require("react");
const Styleh = {
    
    backgroundColor: "blue",
    color:"black",
    textAlign: "center",
  };


class Index extends React.Component {
  render() {
    const { poke } = this.props;
    return (
      <div>
        <h1 style={Styleh}>Index All Pokemons</h1>
        <ul>
          {poke.map((item, i) => {
            return (
              <li  key={item.name}>
                <h2>
                  <a href={`/pokemon/${i}`}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</a>
                </h2>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;