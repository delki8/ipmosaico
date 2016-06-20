import '../imports/ui/corpo.js';
import '../imports/startup/accounts-config.js';
import '../imports/startup/routes.js';
import '../imports/startup/google-maps.js';

import { Eventos } from '../imports/api/EventoSchema.js'

Template.registerHelper("formatDate", function (date) {
  let time = moment( date );
  return time.tz('GMT').format('DD/MM/YYYY');
});
