import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from '../client/components/App.jsx';

configure({ adapter: new Adapter() });

test('App component renders properly', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});