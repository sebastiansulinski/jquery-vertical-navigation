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

To instantiate the plugin use any selector:

```javascript
$('#leftNavigation').ssdVerticalNavigation();
```

There are also a few options you can use:

```javascript
$('#leftNavigation').ssdVerticalNavigation({
    classMaster : 'master',
    classActive : 'active',
    classClickable : 'clickable'
});
```

Class `master` is going to be automatically applied to the top level `ul` tag.
Class `active` will be applied to the most recently clicked `li` tag.
Class `clickable` should be applied to the first level `li` tag, that needs to link to some page rather than just being a trigger for the sub-navigation.