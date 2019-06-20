/*
 * Welcome to your doc's main JavaScript file!
 */

import '../../css/docs/style.css';

import $ from 'jquery';
import './../../../node_modules/docsify/lib/docsify';

$(function () {
    window.$docsify = {
        name: 'systempro-web',
        repo: 'https://github.com/ZokiPokiDev/systempro-web',
        loadSidebar: true,
        subMaxLevel: 2,
    };
    console.log('load docs');
});