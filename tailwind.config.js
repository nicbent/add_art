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
  safelist: [
    '-top-[10%]','-top-[20%]','-top-[30%]','-top-[40%]','-top-[50%]',
    '-left-[25%]','-left-[50%]','-left-[75%]','-left-[100%]'

  ]
}
