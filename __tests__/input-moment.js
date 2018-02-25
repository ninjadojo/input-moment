import moment from 'moment';
import React from 'react';
import renderer from 'react-test-renderer';
import InputMoment from '../';

test('render', () => {
  const m = moment().year(2018).month(7).date(8).hours(8).minutes(8).seconds(8);
  const component = <InputMoment moment={m} />;
  expect(renderer.create(component).toJSON()).toMatchSnapshot();
});

test('render without tabs', () => {
  const m = moment().year(2018).month(7).date(8).hours(8).minutes(8).seconds(8);
  const component = <InputMoment moment={m} hideTabs />;
  expect(renderer.create(component).toJSON()).toMatchSnapshot();
});
