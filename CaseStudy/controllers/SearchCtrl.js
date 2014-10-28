videoApp.controller('SearchCtrl', ['$scope', '$log', '$rootScope', '$http', '$window', function($scope, $log, $rootScope, $http, $window) {

    $scope.movieName = "";
    $scope.keys = [];
     $rootScope.showDetails = true;
     $rootScope.showVideo = false;
    $scope.movieArray = [{
        "movie": "the departed",
        "file": "departed.json"
    }, {
        "movie": "forest gump",
        "file": "forrestgump.json"
    }, {
        "movie": "jaws",
        "file": "jaws.json"
    }, {
        "movie": "jurassic park",
        "file": "jurassicpark.json"
    }, {
        "movie": "ocean's eleven",
        "file": "oceanseleven.json"
    }, {
        "movie": "titanic",
        "file": "titanic.json"
    }];
    $scope.resultArray = [];
    $scope.results = 0;
    $window.onpopstate = backOrForwardButtonClicked;

    function backOrForwardButtonClicked(e) {
        console.log(e.state);
        $scope.$apply(function() {
            $scope.resultArray = e.state;
        });
    }


    $scope.search = function() {
        console.log($window);

        var moviename = $scope.movieName.toLowerCase();
        console.log(moviename);
        console.log($scope.movieArray.length);
        for (var i = 0; i < $scope.movieArray.length; i++) {
            var movie = $scope.movieArray[i].movie
            var file = $scope.movieArray[i].file;
            if (movie.search(moviename) != -1) {
                $http({
                    method: "GET",
                    url: "movies/" + file
                }).success(function(data) {
                    var movies = data.movies;
                    console.log(movies)
                    $scope.results = data.movies.length;
                    $scope.resultArray = movies;
                     console.log($scope.resultArray)
                    $window.history.pushState(movies, "");
                    for (var i = 0; i < movies.length; i++) {
                        var name = {
                            name: movies[i].title,
                            thumb: movies[i].posters.thumbnail
                        };
                        name = angular.toJson(name);
                        localStorage.setItem(moviename + i, name);
                    }
                });
            }
        }


    }

    $rootScope.showDetails = function(movie){
        $rootScope.selectedMovie = movie;
        $rootScope.showResults = false;
        $rootScope.showVideo = true;
        $rootScope.populateResult(movie);
    }

}]);
