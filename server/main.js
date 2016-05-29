// import { Meteor } from 'meteor/meteor';
//
// Meteor.startup(() => {
//   // code to run on server at startup
// });
import { Mongo } from 'meteor/mongo';

export const Eventos = new Mongo.Collection('eventos');

Meteor.publish('eventosAtivos', function() {
  return Eventos.find({ativo: true});
});

Meteor.publish('eventos', function() {
  return Eventos.find();
});

Meteor.publish('usuarios', function() {
  return Meteor.users.find({});
});

Meteor.publish('roles', function() {
  return Meteor.roles.find({});
});

Meteor.users.deny({
  update() { return true; }
});

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

  'ativarDesativar-evento': function(eventoId) {
    const ev = Eventos.findOne(eventoId);
    Eventos.update(eventoId, {
      $set: { ativo: !ev.ativo },
    });
  },

  'podeInserirEventos': function(userId) {
    return Roles.userIsInRole(userId, ['moderador']);
  },

  'podeEditarUsuarios': function(userId) {
    return Roles.userIsInRole(userId, ['admin']);
  },

  'adicionar-role': function(userId, role) {
    Roles.addUsersToRoles(userId, role);
  },

  'remover-role': function(userId, role) {
    Roles.removeUsersFromRoles(userId, role);
  }
});
