var React = require('react');

class quiz extends React.Component {
  render() {
    console.log(this.props);
    let {result} = this.props;
    let {username, stage, question} = result[0];
    let Ranking = result.slice(1);
    const ranking = Ranking.map((player, index) => {
      return (
        <p>
          {index + 1}. {player.username} Current Level: {player.stage}
        </p>
      );
    });
    return (
      <html>
        <head />
        <input type="hidden" name="stage 8 answer" value="youfoundme" />
        <body>
          <div>
            {username} {stage}
            <input type="hidden" name="stage8" value="youfoundme" />
          </div>
          <div>{ranking}</div>
          <div>
            <p>WELL DONE YOU MORON STAY TUNED FOR MORE UPDATES</p>
            <form class="logout" action="/quiz/logout" method="post">
            <button>logout</button>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = quiz;
