import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './usuarios.html';
import './userRole.js';

Template.usuarios.onCreated(function bodyOnCreated() {
  Meteor.subscribe('usuarios');
  Meteor.subscribe('roles');
});

Template.usuarios.helpers({
  podeEditarUsuarios() {
    Meteor.call('podeEditarUsuarios', Meteor.userId(), function(error, result) {
      if (error) {
        console.log(error.reason);
        return;
      }
      Session.set('podeEditarUsuarios', result);
    });
    return Session.get('podeEditarUsuarios');
  },
  todosUsuarios() {
    return Meteor.users.find({});
  },
  roles() {
    return Meteor.roles.find({});
  },
  nome(user) {
    return user.username != null ? user.username : user.profile.name;
  }
});
