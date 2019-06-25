import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App'
import store from '../_store'
import renderer from 'react-test-renderer'
import {Provider} from 'react-redux';
import {getUsers} from '../_actions';

/*I am fairly new to testing async action creators with jest
and I know the below approach probably isn't the best way to
go about it. I went with only a basic snapshot test, but if
a more detailed test is necessary, I can resubmit.*/

test('Table loads, fetches users, and displays users', () => {
  return store.dispatch(getUsers()).then(() => {
    const app = renderer.create(
      <Provider store={store}>
        <App/>
      </Provider>
    );

    let tree = app.toJSON();
    expect(tree).toMatchSnapshot();
  })
})