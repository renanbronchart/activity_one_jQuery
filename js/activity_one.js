var createForm = {
  init: function () {
    var self = this;

      self.build();
  },

  build: function() {
    var self = this,
        $formGroup = $('aside .form-group');

    $('.init-form').on('click', function () {
      var attribute = $(this).attr('data-name');

      $formGroup.find('label').attr('for', attribute).empty().append(attribute);
      $formGroup.find('input').val('');
      $formGroup.addClass('active');
    })

    self.creation($formGroup);

  },

  creation: function ($formGroup) {
    $formGroup.find('button.validate').on('click', function () {
      var valInput = $formGroup.find('input').val(),
          attribute = $formGroup.find('label').attr('for'),
          $sectionLeft = $('section.left');

      if (attribute == 'label') {
        var label = $sectionLeft.find('.form-group').append('<label></label>');

        label.text(valInput);
      }else if(attribute == 'input'){
        var $input = '<input id=""/>';


        if ($sectionLeft.find('.form-group label').length >= 1) {
          $sectionLeft.find('.form-group label').last().after($input)

        } else {
          $sectionLeft.find('.form-group').append($input);
        }

        $sectionLeft.find('.form-group input').attr('id', valInput);
      }

    })
  }

}

createForm.init();
