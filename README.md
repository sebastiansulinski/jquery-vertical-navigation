Vertical navigation with jQuery
==========================

JavaScript object for vertical navigation with sub-navigation.

### Demo

- [Vertical Navigation with jQuery](http://jquery-vertical-navigation.ssdtutorials.com/)

### Additional resources used in the project

- [jQuery](http://jquery.com/)
- [Font Awesome](http://fortawesome.github.io/Font-Awesome/)
- [Google Fonts : Open Sans](https://www.google.com/fonts/specimen/Open+Sans)

### Project Page

- [Vertical Navigation with jQuery](http://sebastiansulinski.github.io/jquery-vertical-navigation)

### Usage instructions

To instantiate the object use:

```javascript
var verticalNavigation = new SSDSystem.VerticalNavigation();
    verticalNavigation.init();
```

By default the object will look for the `ul` with the id `leftNavigation` - you can change it by passing the argument to the init() method with the id of your choice:

```javascript
var verticalNavigation = new SSDSystem.VerticalNavigation();
    verticalNavigation.init('verticalNavigation');
```
