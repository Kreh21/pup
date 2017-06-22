import { Meteor } from 'meteor/meteor';
import Customers from '../Customers';
import Plans from '../../Plans/Plans';

Meteor.publish('customer.subscription', function customerSubscription() {
  return [
    Customers.find({ userId: this.userId }),
    Plans.find({}, { fields: { label: 1, planId: 1 } }),
  ];
});