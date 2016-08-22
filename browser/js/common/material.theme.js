app.config(function ($mdThemingProvider) {
  $mdThemingProvider.definePalette('amazingPaletteName', {
        '50': '#42b7fd',
        '100': '#28adfd',
        '200': '#0fa4fc',
        '300': '#0397ef',
        '400': '#0287d6',
        '500': '#0277bd',
        '600': '#0267a4',
        '700': '#01578b',
        '800': '#014771',
        '900': '#013758',
        'A100': '#5bc0fd',
        'A200': '#74cafe',
        'A400': '#8dd4fe',
        'A700': '#01283f',


    'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                        // on this palette should be dark or light
    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
     '200','300', 'A100'],
    'contrastLightColors': undefined    // could also specify this if default was 'dark'
  });

  $mdThemingProvider.theme('default')
    .primaryPalette('amazingPaletteName',{
    	'default':'400',
    	'hue-1': '600',
    	'hue-2': '800',
    	'hue-3' :'500'
    })
    $mdThemingProvider.definePalette('warning', {
		'50': '#ff7e5d',
        '100': '#ff6944',
        '200': '#ff552a',
        '300': '#ff4011',
        '400': '#f63100',
        '500': '#dd2c00',
        '600': '#c32700',
        '700': '#aa2200',
        '800': '#901d00',
        '900': '#771800',
        'A100': '#ff9277',
        'A200': '#ffa690',
        'A400': '#ffbbaa',
        'A700': '#5d1300',

    'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                        // on this palette should be dark or light
    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
     '200','300', 'A100'],
    'contrastLightColors': undefined    // could also specify this if default was 'dark'
  });
    $mdThemingProvider.theme('default')
    .warnPalette('warning',{
    	'default':'400',
    	'hue-1': '600',
    	'hue-2': '800',
    	'hue-3' :'300'
    })




});
