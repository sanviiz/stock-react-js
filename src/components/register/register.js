import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../../actions/register.action";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
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
        Danger alert preview.
      </div>
    );
  };

  render() {
    return (
      <div className="login-box">
        <div className="login-logo">
          <a href="../../index2.html">
            <b>SVStock</b>Register
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
                onChange={(text) =>
                  this.setState({ username: text.target.value })
                }
                name="username"
                type="email"
                className="form-control"
                placeholder="Email"
              />
              <span className="glyphicon glyphicon-envelope form-control-feedback" />
            </div>
            <div className="form-group has-feedback">
              <input
                onChange={(text) =>
                  this.setState({ password: text.target.value })
                }
                name="password"
                type="password"
                className="form-control"
                placeholder="Password"
              />
              <span className="glyphicon glyphicon-lock form-control-feedback" />
            </div>

            {this.props.registerReducer.isError && this.showError()}

            {/* Register */}
            <div className="row">
              <div className="col-xs-12">
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    this.props.register(this.props.history, this.state);
                  }}
                  type="submit"
                  className="btn btn-primary btn-block btn-flat"
                >
                  Register
                </button>
              </div>
              {/* /.col */}
            </div>

            {/* Cancel */}
            <div className="row">
              <div className="col-xs-12">
                <button
                  onClick={() => this.props.history.goBack()}
                  type="button"
                  style={{ marginTop: 8 }}
                  className="btn btn-block btn-default"
                >
                  Cancel
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

const mapStateToProps = ({ registerReducer }) => ({ registerReducer });

const mapDispatchToProps = {
  register,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
