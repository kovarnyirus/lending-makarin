'use strict';

var $uiAccordion = $('.js-ui-accordion');

$uiAccordion.accordion({
  collapsible: true,
  heightStyle: 'content',

  activate: function activate(event, ui) {
    var newHeaderId = ui.newHeader.attr('id');

    if (newHeaderId) {
      history.pushState(null, null, '#' + newHeaderId);
    }
  },

  create: function create(event, ui) {
    var $this = $(event.target);
    var $activeAccordion = $(window.location.hash);

    if ($this.find($activeAccordion).length) {
      $this.accordion('option', 'active', $this.find($this.accordion('option', 'header')).index($activeAccordion));
    }
  }
});

$(window).on('hashchange', function (event) {
  var $activeAccordion = $(window.location.hash);
  var $parentAccordion = $activeAccordion.parents('.js-ui-accordion');

  if ($activeAccordion.length) {
    $parentAccordion.accordion('option', 'active', $parentAccordion.find($uiAccordion.accordion('option', 'header')).index($activeAccordion));
  }
});