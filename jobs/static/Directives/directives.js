// app.directive('photoFile', function($parse) {

//     return {
//         restrict: 'A',
//         link: function(scope, element, attributes) {
//             var set = $parse(attributes.photoFile);
//             element.bind('change', function() {
//                 set.assign(scope, element[0].files)
//                 scope.$apply();
//             })
//         }
//     }
// })