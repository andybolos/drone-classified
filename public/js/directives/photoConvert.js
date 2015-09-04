app.directive('photoConvert', function(dataService) {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
            elem.bind("change", function(changeEvent) {
                var reader = new FileReader();
                reader.onload = function (loadEvent) {
                    var fileread = loadEvent.target.result;
                    console.log(fileread);
                    var tempArray = elem['context'].value.split('\\');
                    var fileName = tempArray[tempArray.length - 1];
                    dataService.storeImage(fileread, fileName)
                }
                reader.readAsDataURL(changeEvent.target.files[0]);
            });
        }
    }
});
