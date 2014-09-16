/* global Vue, moment */
'use strict';

var target = moment('2014-09-22T18:25:00-04:00'),
  counter = {
    zobotime: moment().isAfter(target),
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

new Vue({
  el: '#main',
  data: counter
});

function pad(num) {
  return (num < 10) ? '0' + num : String(num);
}

function update() {
  var now = moment(),
    countdown = moment.duration(target.diff(now));

  counter.zobotime = now.isAfter(target);
  counter.days = pad(countdown.days());
  counter.hours = pad(countdown.hours());
  counter.minutes = pad(countdown.minutes());
  counter.seconds = pad(countdown.seconds());

  if (!counter.zobotime) {
    window.setTimeout(update, 1000);
  }
}

window.setTimeout(update, 1000);
