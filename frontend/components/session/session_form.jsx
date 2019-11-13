import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(key) {
    return e => this.setState({ [key]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitAction({ user: this.state }).then(
      sessionAction => {
        this.props.clearSessionErrors();
        this.props.fetchCurrentUserFavoritesRatings(sessionAction.user.id);
      }
    );
  }

  render() {
    const { sessionErrors } = this.props;

    let errorMessage;
    if (sessionErrors.length > 0) {
      errorMessage = (
        <div className="error-message">
          <p>Please fix the following issue(s):</p>
          <ul>
            { sessionErrors.map( (error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )
    }

    return(
      <form className="session-form">

        <h2>{this.props.formTitle}</h2>

        { errorMessage }

        <div className="form-input">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            onChange={this.handleInput('username')}
            value={this.state.username}
          />
        </div>

        <div className="form-input">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={this.handleInput('password')}
            value={this.state.password}
          />
        </div>

        <button
          className="button-submit-form"
          onClick={this.handleSubmit}>{this.props.formTitle}</button>

      </form>
    )
  }
};

export default SessionForm;
