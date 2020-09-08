var React = require('react');

import { Container, Row, Col, Button, Form, FormGroup, Label, Input, Table } from 'reactstrap';

class quiz extends React.Component {
  render() {
    console.log(this.props);
    let {result} = this.props;
    let {username, stage, question} = result[0];
    let Ranking = result.slice(1);
    const ranking = Ranking.map((player, index) => {
      return (
        <tr>
          <th scope="row">{index + 1}</th>
          <td>{player.username}</td>
          <td>{player.stage}</td>
        </tr>
      );
    });
    const fuck = { width:'100%', maxWidth:'330px', padding:'15px', margin:'auto', height:'100%'}
    const fucker = { width:'100%', maxWidth:'700px', padding:'15px', margin:'auto', height:'100%'}
    const fuckoff = { display: 'flex', alignItems:'center',width:'100%', maxWidth:'330px', padding:'15px', margin:'auto', height:'100%'}
    return (
      <html>
        <head> 
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/> 
        </head>
        <Input type="hidden" name="stage 8 answer" value="youfoundme" />
        <body>
          <Row style={fuckoff}>
            <Col md="6">
              <Label className="font-weight-bold">{username}</Label>
            </Col>
            <Col md="6">
            <Form className="logout" action="/quiz/logout" method="post">
            <Button className="btn-lg">Logout</Button>
            </Form>
            <input type="hidden" name="stage8" value="youfoundme" />
            </Col>
          </Row>
          <Row style={fucker}>
            <Col md="6">
          <Form>
            <Label className="font-weight-bold">Leaderboard</Label>
          <Table style={fuck}>
          <thead>
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">User</th>
              <th scope="col">Stage</th>
            </tr>
          </thead>
          <tbody>
            {ranking}
          </tbody>
          </Table>
          </Form>
          </Col>
          <Col md="6">
          <Form style={fuck} class="answer" action="/quiz/home/ansattempt" method="post">
              <Label className="font-weight-bold">Stage Max</Label>
              <Input type="hidden" name="stage" value={stage} />
              <FormGroup>
              <Label>Well done! You've completed the game! Stay tuned for future udpates!</Label>
              </FormGroup>
          </Form>
          </Col>
          </Row>
        </body>
      </html>
    );
  }
}

module.exports = quiz;
