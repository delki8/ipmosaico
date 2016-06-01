import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import './usuarios.js';
import './eventos.js';
import './sidebar.js';
import './corpo.html';

Template.corpo.onCreated(function corpoOnCreated() {

});

Template.corpo.helpers({
  podeEditarUsuarios() {
    Meteor.call('podeEditarUsuarios', Meteor.userId(), function(error, result) {
      if (error) {
        console.log(error.reason);
        return;
      }
      Session.set('podeEditarUsuarios', result);
    });
    return Session.get('podeEditarUsuarios');
  }
});
