import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { EventoSchema } from '../api/EventoSchema';

import './evento.html';

Template.evento.onCreated(function eventoOnCreated() {
  AutoForm.debug();
})

Template.evento.helpers({

});

Template.evento.events({
  
});

AutoForm.addHooks("eventoForm", {
  onError: function () {
    // console.log("onError hook called with arguments", arguments);
    // console.log("onError hook context:", this);
  },
  onSuccess: function () {
    // console.log("onSuccess hook called with arguments", arguments);
    // console.log("onSuccess hook context:", this);
  },
  before: {
    demoSubmission: function (doc) {
      console.log(doc);
      // console.log("before method hook called with arguments", arguments);
      // console.log("before method hook context:", this);
      return doc;
    }
  },
  after: {
    demoSubmission: function () {
      console.log('demoSubmission after');
      // console.log("after method hook called with arguments", arguments);
      // console.log("after method hook context:", this);
    }
  },
  formToDoc: function (doc) {
    // console.log("formToDoc hook context:", this);
    // console.log("formToDoc hook called with arguments", arguments);
    return doc;
  },
  docToForm: function (doc) {
    // console.log("docToForm hook called with arguments", arguments);
    // console.log("docToForm hook context:", this);
    return doc;
  },
  beginSubmit: function () {
    // console.log("beginSubmit hook called with arguments", arguments);
    // console.log("beginSubmit hook context:", this);
  },
  endSubmit: function () {
    // console.log("endSubmit hook called with arguments", arguments);
    // console.log("endSubmit hook context:", this);
  }
});
