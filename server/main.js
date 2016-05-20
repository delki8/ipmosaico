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
  }
});
