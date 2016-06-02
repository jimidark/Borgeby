﻿# Styles
Developer instructions for how to implement and structure styles in this project.

Author: [Viktor Wissing](mailto:viktor.wissing@cgi.com)

## Gulp
Compilation of frontend files is done with [Gulp](http://www.gulpjs.com), which runs on [Node.js](http://www.nodejs.org). To be able to compile files, Node.js must be installed on the computer. Visual Studio 2015 includes a version of Node.js that is too old, so we need to manually install the latest version from [Nodejs.org](http://www.nodejs.org). We must also [add the new installation path](http://ryanhayes.net/synchronize-node-js-install-version-with-visual-studio-2015) in Visual Studio so the latest version is used.

All necessary gulp plugins should be automatically downloaded when opening the solution. If not, open the file `packages.json` in the root folder and save the file, this will trigger a download.

To verify that everything is set up correctly, open the Task Runner Explorer in Visual Studio and verify that the tasks have been loaded. Upon project open, the `watch` task should open automatically that watches files for changes.

## Preprocessor
The preprocessor used in this project is [SASS](http://sass-lang.com/guide).

## Architecture
This project is based on the ITCSS architecture, introduced by [Harry Roberts](http://csswizardry.com).

For a short walktrough of ITCSS, [read this article](http://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528). This is the **minimum required** preparation before starting to develop in this project.

For a detailed walkthrough of ITCSS, [watch this seminar](https://www.youtube.com/watch?v=1OKZOV-iLj4). This is the **recommended** preparation before starting to develop in this project.

## Bundling
In the file `styles.scss`, we define which files that should be included in the bundle. The bundling is then performed by [Gulp](http://gulpjs.com). The distribution files are placed in the folder `/styles/dist/`. If the build server where the website should be deployed supports Gulp, the destination files should not be included in the project. If the webserver lacks support for Gulp, the destination files needs to be included in the project.

## Source maps
The project has been set up to automatically generate source maps each time a scss file is saved. Source maps make it easy to locate exactly where a peace of code originates from when inspecting elements in the web browser. The source maps are generated by [Gulp](http://gulpjs.com) and included in the development bundle `styles.css`. The source maps are not included in the production bundle `styles.min.css`.

## Documentation
The project has been set up to automatically generate [SassDoc](http://sassdoc.com) documentation each time a scss file is saved. The generation is performed by [Gulp](http://gulpjs.com), and the generated html is placed in the folder `/Documentation/Frontend/Styles/Sassdoc/`.

## Style Template
A style template is included in the project that shows all available tags, objects and components that can be used when developing the frontend. This is a good starting point when setting global styles or planning a new component to see what's already available in the toolkit. The style template can be found at [http://localhost:12345/StyleTemplate](http://localhost:12345/StyleTemplate) (replace "12345" with the correct port number).

## EPiServer TinyMCE
A special css file, `editor.css`, is used for configuring styles that should be available in [EPiServer TinyMCE editor](http://world.episerver.com/documentation/Items/Developers-Guide/EPiServer-CMS/9/Editing/Customizing-the-TinyMCE-editor). This file should not be included in the bundle since it is referenced from the website settings in EPiServer.

## No-js
A special css file, `no-js.css`, is included on the website when Javascript has been disabled in the browser. This file is used to create a graceful degradation of functionality.