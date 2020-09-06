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
        <body>
          <div>
            {username} {stage}
            <input type="hidden" name="stage8" value="youfoundme" />
          </div>
          <div>{ranking}</div>
          <div>
            <form class="answer" action="/quiz/home/ansattempt" method="post">
              <input type="hidden" name="stage" value={stage} />
              {question}
              <input type="text" name="answer" />
              <button>Submit</button>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = quiz;
