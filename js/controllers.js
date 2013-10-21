angular.module("app").controller("DemoController", [
  "$scope",
  function($scope) {
    $scope.demos = [
      "buttons.html",
      "dialog_two_buttons.html",
      "dialog_three_buttons.html",
      "input_checkbox.html",
      "input_range.html",
      "input_text.html",
      "label_widths.html",
      "list.html",
      "list_with_chevron.html",
      "textarea.html"
    ];
    $scope.currentDemo = $scope.demos[0]; //"buttons.html";

    $scope.openSource = function(){
      window.open("view-source:"+document.querySelector("iframe").src);
    };

    $scope.$on("selectDemo", function(scope, demoFile){
      page = window.getComputedStyle(document.body,':after').getPropertyValue('content');
      if (page === "simplePage") {
        window.location.href = demoFile;
      } else {
        $scope.currentDemo = demoFile;
      }
    });
  }
]);

angular.module("app").controller("DeviceController", [
  "$scope",
  function($scope) {
  }
]);

angular.module("app").controller("DemoListController", [
  "$scope",
  function($scope) {
    $scope.humanize = function(demoFile) {
      if (demoFile) {
        return demoFile.replace(/\_/g, " ").replace(".html", "");
      };
    };
    $scope.selectDemo = function(demoFile) {
      $scope.$emit("selectDemo", demoFile);
    };
  }
]);