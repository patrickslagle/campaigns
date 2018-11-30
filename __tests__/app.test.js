import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from '../client/components/app.jsx';
import CampaignPhoto from '../client/components/campaign-photo.jsx';

configure({ adapter: new Adapter() });

test('App component renders properly', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});

test('CampaignPhoto component renders properly without user data', () => {
  const wrapper = shallow(
    <CampaignPhoto
      userCity=""
      userCompanySize=""
      userIndustry=""
      priority={[]}
    />,
  );
  expect(wrapper).toMatchSnapshot();
});

test('CampaignPhoto component renders properly with user data', () => {
  const wrapper = shallow(
    <CampaignPhoto
      userCity="Austin"
      userCompanySize="0-50"
      userIndustry="Software"
      priority={['Austin', 'SanFrancisco', 'Software', 'Sports', '0-50', '100-200']}
    />,
  );
  expect(wrapper).toMatchSnapshot();
});

test('Test that Austin image is rendered correctly', () => {
  const wrapper = shallow(
    <CampaignPhoto
      userCity="Austin"
      userCompanySize="0-50"
      userIndustry="100-200"
      priority={['Austin', 'SanFrancisco', 'Software', 'Sports', '0-50', '100-200']}
    />);
  expect(wrapper.find("img").prop('src')).toBe('./assets/Austin.jpg')
});

test('Test that San Fransisco image is rendered correctly', () => {
  const wrapper = shallow(
    <CampaignPhoto
      userCity="San Francisco"
      userCompanySize="0-50"
      userIndustry="100-200"
      priority={['Austin', 'San Francisco', 'Software', 'Sports', '0-50', '100-200']}
    />);
  expect(wrapper.find("img").prop('src')).toBe('./assets/SanFrancisco.jpg')
});

