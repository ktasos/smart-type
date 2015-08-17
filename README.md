# type-save
A simple jQuery plugin that helps you bind events to a textbox when saving (e.g. hitting Enter) or canceling (e.g. hitting ESC). 
When saving the new value becomes the original value. 
When canceling the value returns to the original value of the textbox. 
In both cases, the events trigger when the textbox has had its original value changed. 

## Usage
```js
jQuery('.some-textbox').typeSave({
  onSave: function (prev, current, textbox) { console.log('saving'); },
  onCancel: function (prev, current, textbox) { console.log('canceling'); }
});
```

## Options

#### preventDefault
Allow or prevent the keyup event to be propagated. Default value is **true**. 

#### dataAttr
Specify the name of the **data-** attribute it will be used. Default value is **val**.

#### onSave
The callback function that is called when the user hits Enter. It has three attributes, the previous value, the current value and the textbox.

#### onCancel
The callback function that is called when the user hits ESC. It has three attributes, the previous value, the current value and the textbox.

## Changelog

#### Version 0.2
Changed attributes for the callback functions. 
Cancel event occurs only when the textbox's value has changed.

#### Version 0.1
Initial commit.
Save and Cancel events supported.