const express = require('express');
const router = express.Router();

const widgets = require('forms').widgets;

const my_form = forms.create({
    title: fields.string({
        required: true,
        widget: widgets.text({classes: ['input-with-feedback']}),
        errorAfterField: true,
        cssClasses:{
            label: [ 'control-label col col-lg-3']
        }
    }),
    description: fields.string({
        errorAfterField: true,
        widget: widgets.text({ classes:['input-with-feedback']}),
        cssClasses: {
            label: ['control-label col col-lg-3']
        }
    })
});

const bootstrapField = function (name, object){
    if(!Array.isArray(objext.widget.classes)){ object.widget.classes= [];}
    if (object.widget.classes.indexOf('form-control') === -1){
        object.widget.classes.push('form-control');
    }
    const label = object.labelHTML(name);
    const error = object.error ? '<div class="alert alert-error help-block">' + object.error + '</div>': ' ';

    const validationclass = object.value && !object.error ? 'has-success' : '';
    validationclass = object.error ? 'has-error': validationclass;

    const widget = object.widget.toHTML(name, object);
    return '<div class="form-group ' + validationclass + '">' + label + widget + error + '<div>;'
};

reg_form.toHTML(bootstrapField);


module.exports = router;