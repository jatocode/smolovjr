define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.message = 'Smolov Jr';
            this.weight = 100;
            this.easy = 2.5;
            this.hard = 5.0;
            this.weeks = ['1', '2', '3'];
            this.titles = ['Dag', 'Lätt', 'Tung', 'Klar'];
            this.days = [
                { r: '6x6', f: 0.70 },
                { r: '8x4', f: 0.75 },
                { r: '7x5', f: 0.80 },
                { r: '10x3', f: 0.85 },
            ];
        }
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUFBO1lBQ0UsWUFBTyxHQUFHLFdBQVcsQ0FBQztZQUN0QixXQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ2IsU0FBSSxHQUFHLEdBQUcsQ0FBQztZQUNYLFNBQUksR0FBRyxHQUFHLENBQUM7WUFDWCxVQUFLLEdBQUcsQ0FBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3pCLFdBQU0sR0FBRyxDQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3RDLFNBQUksR0FBRztnQkFDTCxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFDLElBQUksRUFBQztnQkFDakIsRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBQyxJQUFJLEVBQUM7Z0JBQ2pCLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUMsSUFBSSxFQUFDO2dCQUNqQixFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUUsQ0FBQyxFQUFDLElBQUksRUFBQzthQUNuQixDQUFBO1FBQ0gsQ0FBQztRQUFELFVBQUM7SUFBRCxDQWJBLEFBYUMsSUFBQTtJQWJZLGtCQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBcHAge1xuICBtZXNzYWdlID0gJ1Ntb2xvdiBKcic7XG4gIHdlaWdodCA9IDEwMDtcbiAgZWFzeSA9IDIuNTtcbiAgaGFyZCA9IDUuMDtcbiAgd2Vla3MgPSBbICcxJywgJzInLCAnMyddO1xuICB0aXRsZXMgPSBbJ0RhZycsJ0zDpHR0JywnVHVuZycsJ0tsYXInXTtcbiAgZGF5cyA9IFtcbiAgICB7cjonNng2JywgZjowLjcwfSxcbiAgICB7cjonOHg0JywgZjowLjc1fSxcbiAgICB7cjonN3g1JywgZjowLjgwfSxcbiAgICB7cjonMTB4MycsIGY6MC44NX0sXG4gIF1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBSUEsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBZEQsOEJBY0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXVyZWxpYX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnXG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5pbXBvcnQgYm9vdHN0cmFwIGZyb20gJ2Jvb3RzdHJhcCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYTogQXVyZWxpYSkge1xuICBhdXJlbGlhLnVzZVxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgIC5mZWF0dXJlKCdyZXNvdXJjZXMnKTtcblxuICBpZiAoZW52aXJvbm1lbnQuZGVidWcpIHtcbiAgICBhdXJlbGlhLnVzZS5kZXZlbG9wbWVudExvZ2dpbmcoKTtcbiAgfVxuXG4gIGlmIChlbnZpcm9ubWVudC50ZXN0aW5nKSB7XG4gICAgYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLXRlc3RpbmcnKTtcbiAgfVxuXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgpKTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('weightformat',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var WeightFormatValueConverter = (function () {
        function WeightFormatValueConverter() {
        }
        WeightFormatValueConverter.prototype.toView = function (value) {
            return Math.round(value);
        };
        WeightFormatValueConverter.prototype.fromView = function (value) {
        };
        return WeightFormatValueConverter;
    }());
    exports.WeightFormatValueConverter = WeightFormatValueConverter;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlaWdodGZvcm1hdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUFBO1FBUUEsQ0FBQztRQVBDLDJDQUFNLEdBQU4sVUFBTyxLQUFLO1lBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsQ0FBQztRQUVELDZDQUFRLEdBQVIsVUFBUyxLQUFLO1FBRWQsQ0FBQztRQUNILGlDQUFDO0lBQUQsQ0FSQSxBQVFDLElBQUE7SUFSWSxnRUFBMEIiLCJmaWxlIjoid2VpZ2h0Zm9ybWF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFdlaWdodEZvcm1hdFZhbHVlQ29udmVydGVyIHtcbiAgdG9WaWV3KHZhbHVlKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUpO1xuICB9XG5cbiAgZnJvbVZpZXcodmFsdWUpIHtcblxuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"./smolovjr.css\"></require><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"./weightformat\"></require><div class=\"container\"><div class=\"jumbotron\"><h1>${message}</h1><label>Nuvarande 1RM:</label><input value.bind=\"weight\" placeholder=\"0\"></div><div class=\"row\"></div><div class=\"row col-md-6\"><div repeat.for=\"w of weeks\"><h2>Vecka ${w}</h2><table class=\"table\"><th repeat.for=\"t of titles\">${t}</th><tr repeat.for=\"d of days\"><td>${d.r}</td><td>${weight * d.f + (w-1)*easy | weightFormat}</td><td>${weight * d.f + (w-1)*hard | weightFormat}</td><td><input type=\"checkbox\"></td></tr></table></div></div></div></template>"; });
define('text!smolovjr.css', ['module'], function(module) { module.exports = "h1 {\n  color: #369;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 250%;\n}\n"; });
//# sourceMappingURL=app-bundle.js.map