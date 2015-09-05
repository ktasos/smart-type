# smart-type
A simple jQuery plugin that helps you bind events to a textbox when **hitting Enter** (e.g. saving) or **hitting ESC** (e.g. canceling).

The functionality it provides is very simple and its purpose is to avoid writing over and over again the same trivial code.

This plugin is implemented for [Aptter](http://aptter.com/), an internal collaboration platform for businesses.

## How it works

- When saving the **onSave** callback is called and the new value becomes the original.
- When canceling  the **onCancel** callback is called and the value returns to the original value of the textbox.

In both cases, the events trigger when the textbox has had its original value changed.

## Usage
```js
jQuery('.some-textbox').smartType({
  onSave: function (prev, current, textbox) { console.log('saving'); },
  onCancel: function (prev, current, textbox) { console.log('canceling'); }
});
```

## Options

#### clearOnCancel
Clear textbox's value when canceling. Default value is **false**.

#### requireOnSave
Trigger the onSave event if the textbox is empty. Default value is **false**.

#### preventDefaultOnSave
Prevent or not the keyup event to be propagated when saving. Default value is **true**.

#### dataAttr
Specify the name of the **data-** attribute it will be used. Default value is **val**.

#### onSave
The callback function that is called when the user hits Enter. It has three attributes, the previous value, the current value and the textbox.

#### onCancel
The callback function that is called when the user hits ESC. It has three attributes, the previous value, the current value and the textbox.

## Changelog

#### Version 0.3
Renamed to **smartType** from typeSave.

#### Version 0.2
Changed attributes for the callback functions.
Cancel event occurs only when the textbox's value has changed.

#### Version 0.1
Initial commit.
Save and Cancel events supported.