# batteries-components

This repository contains GUI components used as an extension to [batteries-layout](https://github.com/batteries-css/batteries-layout). The components try to resemble a style similar to the Polymer project, however they don't require any JavaScript at all and look good  even if a user doesn't allow JavaScript. 


## Components

#### Button
Buttons look similar to the Polymer ones. They support various [colors](src/definitions/colors.less) and an `inverted` mode. 

```html
<a href="#" class="red button">red button</a>
<a href="#" class="inverted deep orange button">deep orange button with white background</a>
```


#### Inputs

##### Range

Ranges support colors and a disabled state: 

```html
<input type="range" disabled>
<input type="range" class="teal range">
```


## Quick start

- [Download a release](https://github.com/batteries-css/batteries-components/releases/latest)
- Clone the repository
	- then run `npm install`
	- and `gulp css`


## Bugs and feature requests

Remember that this project is an extension to an experiment, so there's no guarantee it will actually work in production. If you find a bug or you have an idea of how to improve batteries-components, just [file a new issue](https://github.com/batteries-css/batteries-components/issues/new). 


## License

All code in this repository is released under the [MIT license](LICENSE). 