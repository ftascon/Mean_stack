
app.controller('usersCT', ['$scope', '$resource',
    function ($scope, $resource) {
        /*- - - -  - -  ------- ----- -- -- -- -- - - - - - 
         * pides servicio/recurso que usas en el programa
         *       --> es como instanciar el objeto $resource en base al param de la funcion <--
         * - - - - - - - - - - -  - - - -- - - -  - - - -  */    
        var User = $resource('/api/users');
        /// Consulta que muestra los datos
        User.query(function (results) {
            $scope.users = results;
        });
        $scope.users = []
        
        // crea 'usuarios' datos 
        $scope.createUser = function () {
            var user_data = new User();
            user_data.name = $scope.userName;
            user_data.user = $scope.userUser;
            $scope.userName = '';
            $scope.userUser = '';
            if (!isEmpty(user_data.name) || !isEmpty(user_data.user)) {
                user_data.$save(function (result) {
                    $scope.users.push(result);
                });
            } else {
                alert('Hay campos vacíos');
            }
        }
    }]);