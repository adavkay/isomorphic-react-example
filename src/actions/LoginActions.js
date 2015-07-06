import alt from '../alt';
import RouterContainer from '../RouterContainer';
import RouterStore from '../stores/RouterStore';

class LoginActions {

  // update login credentials
  updateLogin(login) {
    this.dispatch(login);
  }

  // Login user with jwt token
  loginUser(token) {
    localStorage.setItem('token', token);
    this.dispatch(token);

    // call transition for friendly forwarding after dispatch so that store has a logged in user
    let router = RouterContainer.get();
    let nextPath = RouterStore.getNextPath() || '/';
    router.transitionTo(nextPath);
  }

  loginFailed(errorMessage) {
    this.dispatch(errorMessage);
  }

  logoutUser() {
    localStorage.removeItem('token');
    RouterContainer.get().transitionTo('/login');

    this.dispatch();
  }
}

module.exports = alt.createActions(LoginActions);
