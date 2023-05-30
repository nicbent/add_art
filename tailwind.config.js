//--------------------------------------------------------------------------
// Tailwind configuration
//--------------------------------------------------------------------------
//
// Use the Tailwind configuration to completely define the current sites
// design system by adding and extending to Tailwinds default utility
// classes. Various aspects of the config are split inmultiple files.
//

/** @type {import('tailwindcss').Config} */
module.exports = {
  // The various configurable Tailwind configuration files.
  presets: [
    require('tailwindcss/defaultConfig'),
    //require('./tailwind.config.typography.js'),
    require('./tailwind.config.peak.js'),
    require('./tailwind.config.site.js'),
  ],
  // Configure files to scan for utility classes (JIT).
  content: [
    './resources/views/**/*.blade.php',
    './resources/views/**/*.html',
    './resources/js/**/*.js',
    './vendor/studio1902/**/*.blade.php',
    './vendor/studio1902/**/*.html',
    './vendor/studio1902/**/*.js',
  ],
  safelist: ['pl-[1px]','pl-[2px]','pl-[3px]','pl-[4px]','pl-[5px]',
    'left-[15%]','left-[30%]','left-[45%]','left-[60%]','left-[75%]','left-[90%]',
    'md:top-[15%]','md:top-[30%]','md:top-[45%]','md:top-[60%]','md:top-[75%]','md:top-[90%]','md:top-[70%]','md:top-[80%]','md:top-[90%]','md:top-[100%]',
    '-z-[1]','-z-[2]','-z-[3]','-z-[4]','-z-[5]','z-[6]','z-[7]','z-[8]','z-[9]','z-[10]',
    'opacity-[0.1]','opacity-[0.2]','opacity-[0.3]','opacity-[0.4]','opacity-[0.5]','opacity-[0.6]','opacity-[0.7]','opacity-[0.8]','opacity-[0.9]',
    'pb-[1px]', 'pb-[2px]','pb-[3px]','pb-[4px]','pb-[5px]','md:pl-[1px]', 'md:pl-[2px]','md:pl-[3px]','md:pl-[4px]','md:pl-[5px]',
    {
      pattern: /cols-/,
      variants: ["sm", "md", "lg", "xl", "2xl"],
    },


  ]
}
