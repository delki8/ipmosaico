import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './usuarios.html';
import './userRole.js';

Template.usuarios.onCreated(function bodyOnCreated() {
  Meteor.subscribe('usuarios');
  Meteor.subscribe('roles');
});

Template.usuarios.helpers({
  todosUsuarios() {
    return Meteor.users.find({});
  },
  roles() {
    return Meteor.roles.find({});
  }
});
