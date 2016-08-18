app.config(function ($mdThemingProvider) {
  $mdThemingProvider.definePalette('amazingPaletteName', {
	'50': '#6eded3',
	'100': '#59d9cd',
	'200': '#44d4c7',
	'300': '#30cfc0',
	'400': '#2bbbad',
	'500': '#26a69a',
	'600': '#219187',
	'700': '#1d7c73',
	'800': '#186860',
	'900': '#13534d',
	'A100': '#83e2d9',
	'A200': '#97e7e0',
	'A400': '#acece6',
	'A700': '#0e3e3a',

    'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                        // on this palette should be dark or light
    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
     '200', '300', 'A100'],
    'contrastLightColors': undefined    // could also specify this if default was 'dark'
  });

  $mdThemingProvider.theme('default')
    .primaryPalette('amazingPaletteName',{
    	'default':'400',
    	'hue-1': '600',
    	'hue-2': '800',
    	'hue-3' :'A200'
    })


});
