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
      userIndustry="Software"
      priority={['Austin', 'SanFrancisco', 'Software', 'Sports', '0-50', '100-200']}
    />,
  );
  expect(wrapper.find('img').prop('src')).toBe('./assets/Austin.jpg');
});

test('Test that San Fransisco image is rendered correctly', () => {
  const wrapper = shallow(
    <CampaignPhoto
      userCity="SanFrancisco"
      userCompanySize="0-50"
      userIndustry="Software"
      priority={['Austin', 'SanFrancisco', 'Software', 'Sports', '0-50', '100-200']}
    />,
  );
  expect(wrapper.find('img').prop('src')).toBe('./assets/SanFrancisco.jpg');
});

test('Test that Software image is rendered correctly', () => {
  const wrapper = shallow(
    <CampaignPhoto
      userCity="NewYork"
      userCompanySize="0-50"
      userIndustry="Software"
      priority={['Austin', 'SanFrancisco', 'Software', 'Sports', '0-50', '100-200']}
    />,
  );
  expect(wrapper.find('img').prop('src')).toBe('./assets/Software.jpg');
});

test('Test that Sports image is rendered correctly', () => {
  const wrapper = shallow(
    <CampaignPhoto
      userCity="NewYork"
      userCompanySize="0-50"
      userIndustry="Sports"
      priority={['Austin', 'SanFrancisco', 'Software', 'Sports', '0-50', '100-200']}
    />,
  );
  expect(wrapper.find('img').prop('src')).toBe('./assets/Sports.jpg');
});

test('Test that Proof image is rendered correctly', () => {
  const wrapper = shallow(
    <CampaignPhoto
      userCity="NewYork"
      userCompanySize="0-50"
      userIndustry="Tourism"
      priority={['Austin', 'SanFrancisco', 'Software', 'Sports', '0-50', '100-200']}
    />,
  );
  expect(wrapper.find('img').prop('src')).toBe('./assets/proof.jpg');
});

test('Test that smb image is rendered correctly', () => {
  const wrapper = shallow(
    <CampaignPhoto
      userCity="NewYork"
      userCompanySize="100-200"
      userIndustry="Tourism"
      priority={['Austin', 'SanFrancisco', 'Software', 'Sports', '0-50', '100-200']}
    />,
  );
  expect(wrapper.find('img').prop('src')).toBe('./assets/smb.jpg');
});

test('Test that shrug image is rendered correctly', () => {
  const wrapper = shallow(
    <CampaignPhoto
      userCity="NewYork"
      userCompanySize="1000+"
      userIndustry="Tourism"
      priority={['Austin', 'SanFrancisco', 'Software', 'Sports', '0-50', '100-200']}
    />,
  );
  expect(wrapper.find('img').prop('src')).toBe('./assets/shrug.jpg');
});