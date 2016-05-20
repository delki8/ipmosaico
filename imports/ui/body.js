import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import './evento.js'
import './body.html';

Template.body.onCreated(function bodyOnCreated() {
  Meteor.subscribe('eventos');
});

Template.body.helpers({
  todosEventos() {
    return Eventos.find({});
  },
  inscreverDesinscrever(eventoId) {
    const ev = Eventos.findOne(eventoId);
    if (ev.userIds != null && ev.userIds.indexOf(Meteor.userId()) > -1) {
      return 'Desinscrever';
    } else {
      return 'Inscrever';
    }
  }
});

Template.body.events({
  'click .inscrever'() {
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    Meteor.call('inscreverDesinscrever-evento', this.id, Meteor.userId());
  }
});
