// import { Meteor } from 'meteor/meteor';
//
// Meteor.startup(() => {
//   // code to run on server at startup
// });
import { Mongo } from 'meteor/mongo';

export const Eventos = new Mongo.Collection('eventos');

Meteor.publish('eventos', function() {
  return Eventos.find();
});

Meteor.publish('usuarios', function() {
  return Meteor.users.find({});
});

Meteor.publish('roles', function() {
  return Meteor.roles.find({});
});

// Meteor.users.deny({
//   update() { return true; }
// });

Meteor.methods({

  'insert-evento': function(obj) {
    Eventos.insert(obj);
  },

  'inscreverDesinscrever-evento': function(eventoId, userId) {
    ev = Eventos.findOne(eventoId);
    let inscreverDesinscrever = { $push: { userIds: userId } };
    if (ev.userIds != null && ev.userIds.indexOf(userId) > -1) {
      inscreverDesinscrever = {
        $pull: { userIds: userId }
      };
    }
    Eventos.update(eventoId, inscreverDesinscrever);
  },

  'podeInserirEventos': function(userId) {
    return Roles.userIsInRole(userId, ['moderador']);
  },

  'adicionar-role': function(userId, role) {
    Roles.addUsersToRoles(userId, role);
  },

  'remover-role': function(userId, role) {
    Roles.removeUsersFromRoles(userId, role);
  }
});
