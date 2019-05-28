import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import Page from './Page';

export class ModalSwitch extends Component {
  previousLocation = this.props.location;

  componentWillUpdate(nextProps) {
    let { location } = this.props;
    if (
      nextProps.history.action !== "POP" //&&
      // (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }

  render() {
    let { location } = this.props;

    // let isModal = !!(
    //   location.state &&
    //   location.state.modal &&
    //   this.previousLocation !== location
    // );

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/page/:id" component={Page} />
        </Switch>
      </Router>
    );
  }
}

function ModalGallery() {
  return (
    <Router>
      <Route component={ModalSwitch} />
    </Router>
  );
}

export default ModalGallery;