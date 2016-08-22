var createForm = {
  init: function () {
    var self = this;

      self.creation();
  },

  creation: function() {
    $('.init-form').on('click', function () {
      var attribute = $(this).attr('data-name'),
          formGroup = $('aside .form-group');

      formGroup.find('label').attr('for', attribute).empty().append(attribute)
      formGroup.addClass('active');

    })

  }
}

createForm.init();
