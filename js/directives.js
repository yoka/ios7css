angular.module("app").directive("device", function() {
  return {
    restrict: "E",
    replace: true,
    scope: {
      demo: "="
    },
    template: "<div id='deviceFrame'><iframe id='deviceContent' frameborder='0' src={{demo}}></iframe></div>",
    controller: "DeviceController"
  }
});

angular.module("app").directive("demoList", function() {
  return {
    restrict: "E",
    replace: true,
    scope: {
      demos: "="
    },
    template: "<div id='demoList'><ul class='list'><li class='demoItem' ng-repeat='demo in demos' ng-click='selectDemo(demo)'><span class='text' ng-bind='humanize(demo)'></span><div class='chevron'></div></li></ul></div>",
    controller: "DemoListController"
  }
});

