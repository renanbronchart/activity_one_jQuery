var createForm = {
  init: function () {
    var self = this;

      self.changeForm();
  },

  changeForm: function() {
    var self = this,
        $formGroup = $('aside .form-group');

    $('.init-form').on('click', function () {
      var attribute = $(this).attr('data-name');

      $formGroup.find('label').attr('for', attribute).empty().append($(this).text());
      $formGroup.find('input').val('');
      $formGroup.addClass('active');
    })

    self.creation($formGroup);

  },

  creation: function ($formGroup) {
    $formGroup.find('button.validate').on('click', function () {
      var valInput = $formGroup.find('input').val(),
          attribute = $formGroup.find('label').attr('for'),
          $sectionLeft = $('section.left'),
          $newForm = $('section.left .form-group');

      if (attribute == 'label') {
        var label = '<label for=""></label>';

        $newForm.append(label);
        $newForm.find('label').last().attr('for', valInput).text(valInput);

        if ($newForm.find('label').length > 1) {
          $newForm.find('label').last().before('<br/>');
        }
      }else if(attribute == 'input'){
        var $input = '<input id=""/>';

        if ($newForm.find('label').length >= 1) {
          $newForm.find('label').last().after($input)

        } else {
          $newForm.append($input);
        }

        $newForm.find('input').attr('id', valInput);
        $newForm.find('input + input').remove();

      } else if (attribute == 'button') {
        var button = '<button></button>';

        if (($newForm.find('label').length >= 1) && ($newForm.find('input').length >= 1)) {

          $newForm.append(button);
          $newForm.find('button + button').remove();

          $newForm.find('button').last().text(valInput);
        }

      }

    })
  }

}

createForm.init();
