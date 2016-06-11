/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'expand_less': '&#xe5ce;',
            'expand_more': '&#xe5cf;',
            'favorite': '&#xe87d;',
            'favorite_border': '&#xe87e;',
            'mail_outline': '&#xe0e1;',
            'people_outline': '&#xe7fc;',
            'star_border': '&#xe83a;',
            'home': '&#xe900;',
            'house': '&#xe900;',
            'pencil': '&#xe901;',
            'write': '&#xe901;',
            'music': '&#xe907;',
            'song': '&#xe907;',
            'mic': '&#xe908;',
            'microphone': '&#xe908;',
            'book': '&#xe902;',
            'read': '&#xe902;',
            'file-text': '&#xe909;',
            'file': '&#xe909;',
            'profile': '&#xe90a;',
            'file2': '&#xe90a;',
            'stack': '&#xe90b;',
            'layers': '&#xe90b;',
            'cart': '&#xe90c;',
            'purchase': '&#xe90c;',
            'credit-card': '&#xe90d;',
            'money5': '&#xe90d;',
            'phone': '&#xe90e;',
            'telephone': '&#xe90e;',
            'location': '&#xe90f;',
            'map-marker': '&#xe90f;',
            'bubble': '&#xe910;',
            'comment': '&#xe910;',
            'user': '&#xe911;',
            'profile2': '&#xe911;',
            'user-plus': '&#xe912;',
            'user2': '&#xe912;',
            'user-check': '&#xe913;',
            'user4': '&#xe913;',
            'search': '&#xe914;',
            'magnifier': '&#xe914;',
            'enlarge': '&#xe915;',
            'expand': '&#xe915;',
            'cog': '&#xe916;',
            'gear': '&#xe916;',
            'rocket': '&#xe903;',
            'jet': '&#xe903;',
            'fire': '&#xe917;',
            'flame': '&#xe917;',
            'lab': '&#xe904;',
            'beta': '&#xe904;',
            'magnet': '&#xe905;',
            'attract': '&#xe905;',
            'bin': '&#xe918;',
            'trashcan': '&#xe918;',
            'switch': '&#xe919;',
            'cloud-upload': '&#xe91a;',
            'cloud3': '&#xe91a;',
            'attachment': '&#xe91b;',
            'paperclip': '&#xe91b;',
            'smile': '&#xe91c;',
            'emoticon3': '&#xe91c;',
            'tongue': '&#xe91d;',
            'emoticon5': '&#xe91d;',
            'sad': '&#xe91e;',
            'emoticon7': '&#xe91e;',
            'wink': '&#xe91f;',
            'emoticon9': '&#xe91f;',
            'grin': '&#xe920;',
            'emoticon11': '&#xe920;',
            'cool': '&#xe921;',
            'emoticon13': '&#xe921;',
            'angry': '&#xe922;',
            'emoticon15': '&#xe922;',
            'evil': '&#xe923;',
            'emoticon17': '&#xe923;',
            'shocked': '&#xe924;',
            'emoticon19': '&#xe924;',
            'baffled': '&#xe925;',
            'emoticon21': '&#xe925;',
            'confused': '&#xe926;',
            'emoticon23': '&#xe926;',
            'neutral': '&#xe927;',
            'emoticon25': '&#xe927;',
            'hipster': '&#xe928;',
            'emoticon27': '&#xe928;',
            'wondering': '&#xe929;',
            'emoticon29': '&#xe929;',
            'sleepy': '&#xe92a;',
            'emoticon31': '&#xe92a;',
            'frustrated': '&#xe92b;',
            'emoticon33': '&#xe92b;',
            'crying': '&#xe92c;',
            'emoticon35': '&#xe92c;',
            'checkmark': '&#xe92d;',
            'tick': '&#xe92d;',
            'checkmark2': '&#xe92e;',
            'tick2': '&#xe92e;',
            'enter': '&#xe92f;',
            'signin': '&#xe92f;',
            'google3': '&#xe930;',
            'brand4': '&#xe930;',
            'spotify': '&#xe931;',
            'brand14': '&#xe931;',
            'twitter': '&#xe932;',
            'brand16': '&#xe932;',
            'github': '&#xe933;',
            'brand40': '&#xe933;',
            'reddit': '&#xe934;',
            'brand61': '&#xe934;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
