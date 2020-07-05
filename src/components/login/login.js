import React, { Component } from "react";
import { connect } from "react-redux";
import { login, autoLogin } from "./../../actions/login.action";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  componentDidMount() {
    this.props.autoLogin(this.props.history);
  }

  showError = () => {
    return (
      <div className="alert alert-danger alert-dismissible">
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-hidden="true"
        >
          ×
        </button>
        <h4>
          <i className="icon fa fa-ban" /> Error!
        </h4>
        Incorrect username or password.
      </div>
    );
  };

  render() {
    return (
      <div className="login-box">
        <div className="login-logo">
          <a href="../../index2.html">
            <b>SVStock</b>ReactJS
          </a>
        </div>
        {/* /.login-logo */}
        <div
          style={{ background: "whitesmoke", borderRadius: 10 }}
          className="login-box-body"
        >
          <p className="login-box-msg">Sign in to start your session</p>
          <form>
            <div className="form-group has-feedback">
              <input
                onChange={(event) =>
                  this.setState({ username: event.target.value })
                }
                type="email"
                className="form-control"
                placeholder="Email"
              />
              <span className="glyphicon glyphicon-envelope form-control-feedback" />
            </div>
            <div className="form-group has-feedback">
              <input
                onChange={(event) =>
                  this.setState({ password: event.target.value })
                }
                type="password"
                className="form-control"
                placeholder="Password"
              />
              <span className="glyphicon glyphicon-lock form-control-feedback" />
            </div>

            {this.props.loginReducer.isError && this.showError()}

            {/* Login */}
            <div className="row">
              <div className="col-xs-12">
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    this.props.login(this.props.history, this.state);
                  }}
                  type="submit"
                  className="btn btn-primary btn-block btn-flat"
                >
                  Sign In
                </button>
              </div>
              {/* /.col */}
            </div>
            {/* Register */}
            <div className="row">
              <div className="col-xs-12">
                <button
                  onClick={() => this.props.history.push("/register")}
                  type="button"
                  style={{ marginTop: 8 }}
                  className="btn btn-block btn-default"
                >
                  Register
                </button>
              </div>
              {/* /.col */}
            </div>
          </form>
          <br />
        </div>
        {/* /.login-box-body */}
      </div>
    );
  }
}

const mapStateToProps = ({ loginReducer }) => ({ loginReducer });
const mapDispatchToProps = {
  login,
  autoLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
