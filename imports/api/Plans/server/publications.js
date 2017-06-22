import { Meteor } from 'meteor/meteor';
import Plans from '../Plans';

Meteor.publish('plans', () => Plans.find());

