import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Customers = new Mongo.Collection('Customers');

Customers.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Customers.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Customers.schema = new SimpleSchema({
  userId: {
    type: String,
    label: 'The ID of the user this customer profile belongs to.',
  },
  customerId: {
    type: String,
    label: 'The user\'s customer ID on Stripe.',
  },
  card: {
    type: Object,
    label: 'The user\'s card Object.',
  },
  'card.brand': {
    type: String,
    label: 'The brand of credit card the customer has on file.',
  },
  'card.last4': {
    type: String,
    label: 'The last four digits of the credit card the customer has on file.',
  },
  subscription: {
    type: Object,
    label: 'The user\'s subscription Object.',
  },
  'subscription.id': {
    type: String,
    label: 'The ID of the user\'s subscription on Stripe.',
    optional: true,
  },
  'subscription.status': {
    type: String,
    allowedValues: ['active', 'cancelling', 'canceled', 'none', 'trialing'],
    label: 'The ID of the user\'s subscription on Stripe.',
    optional: true,
  },
  'subscription.plan': {
    type: String,
    label: 'The ID of the user\'s plan on Stripe.',
    optional: true,
  },
  'subscription.current_period_end': {
    type: Number,
    label: 'The next change date for the customer\'s subscription on Stripe (epoch timestamp in seconds).',
    optional: true,
  },
});

Customers.attachSchema(Customers.schema);

export default Customers;