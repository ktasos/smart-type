# type-save
A simple jQuery plugin that helps you bind events to a textbox when saving (e.g. hitting Enter) or canceling (e.g. hitting ESC). 
When canceling the value returns to the original value of the textbox. 

## Usage
```js
jQuery('.some-textbox').typeSave({
  onSave: function (prev, current) { console.log('saving'); },
  onCancel: function () { console.log('canceling'); }
});
```

## Options

### preventDefault
Allow or prevent the keyup event to be propagated. Default value is **true**. 

### dataAttr
Specify the name of the **data-** attribute it will be used. Default value is **val**.

### onSave
The callback function that is called when the user hits Enter. It has two attributes, the previous and the current value.

### onCancel
The callback function that is called when the user hits ESC.
