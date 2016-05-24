import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import './usuarios.js';
import './eventos.js';
import './evento.js';
import './body.html';

Template.body.onCreated(function bodyOnCreated() {
  Meteor.subscribe('eventos');
});

Template.body.helpers({
  podeInserirEventos() {
    Meteor.call('podeInserirEventos', Meteor.userId(), function(error, result) {
      if (error) {
        console.log(error.reason);
        return;
      }
      Session.set('podeInserirEventos', result);
    });
    return Session.get('podeInserirEventos');
  }
});

Template.body.events({
  'click .souAdmin'() {
    Meteor.call('souAdmin', Meteor.userId(), 'admin');
  },
  'click .inscrever'() {
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    Meteor.call('inscreverDesinscrever-evento', this.id, Meteor.userId());
  }
});
