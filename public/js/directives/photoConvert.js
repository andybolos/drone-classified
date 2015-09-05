app.directive('photoConvert', function(dataService) {

    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
            elem.bind("change", function(changeEvent) {
                var reader = new FileReader();
                reader.onloadend = function (loadEvent) {
                    var fileread = loadEvent.target.result;
                    var tempArray = elem[0].value.split('\\');
                    var fileName = tempArray[tempArray.length - 1];
                    console.log(fileName);

                    dataService.storeImage(fileread, fileName);
                }
                reader.readAsDataURL(changeEvent.target.files[0]);
            });
        }
    }
});
