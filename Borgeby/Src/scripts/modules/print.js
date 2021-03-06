﻿/*------------------------------------*\
    #PRINT
\*------------------------------------*/


// References for intellisense
/// <reference path="/Src/scripts/_references.js" />



// Namespace
window.borgeby = window.borgeby || {};
borgeby.modules = borgeby.modules || {};



/**
 * Print module
 */
borgeby.modules.print = (function () {
    var priv = {};


    /**
     * Private initialization method
     */
    priv.init = function () {
        priv.bindEvents();
    };


    /**
     * Bind events
     */
    priv.bindEvents = function () {
        $(".js-print").on("click", function (e) {
            e.preventDefault();
            window.print();
        });
    };


    // Initialize module
    $(function () {
        priv.init();
    });

})();
