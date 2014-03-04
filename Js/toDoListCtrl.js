var myTodoList = angular.module('TodoListApp',[]).controller('toDoListCtrl', function($scope, $timeout) {
    $scope.categories = [{id:1, name:"Espannol"},
                        {id:2, name: "Ingles"},
                        {id:3, name:"Espannol/Ingles"}];
    $scope.idUser = 1;
    $scope.categorie = null;
    $scope.searchEmpleado = "";
    $scope.listaEmpleados = [];
    $scope.listaEmpleadosRemovidos = [];

    $scope.espannol = [{id: $scope.idUser++,name:"Carlos", priApellido: "Fallas", segApellido: "Calderón", agente: "", selected: false},
                        {id: $scope.idUser++,name: "Daniel", priApellido: "Rojas", segApellido:"Portilla", agente: "",selected: false},
                        {id: $scope.idUser++,name:"Heriberto", priApellido: "Abarca", segApellido: "Gonzales", agente: "",selected: false}];

    $scope.espannolRemoved = [{id: $scope.idUser++,name:"Andrey", priApellido: "Pérez", segApellido: "Pineda",agente: "", selected: false},
                                {id: $scope.idUser++,name:"Karen",priApellido:"González", segApellido:"Rojas",agente: "", selected: false},
                                {id: $scope.idUser++,name:"Katherine", priApellido:"Calderón", segApellido:"Jiménez",agente: "", selected: false},
                                {id: $scope.idUser++, name:"Josué", priApellido:"Martínez",segApellido:"Montenegro", agente: "",selected: false}];

    $scope.ingles = [{id: $scope.idUser++,name:"Ashley",priApellido:"Alderete", segApellido:"Point", agente: "",selected: false},
                    {id: $scope.idUser++,name:"Charlie", priApellido:"Facer", segApellido:"Palmer", agente: "",selected: false},
                    {id: $scope.idUser++,name:"Phil", priApellido: "Palmer", segApellido: "Mortenson", agente: "",selected: false}];

    $scope.inglesRemoved = [{id: $scope.idUser++, name:"Andrey", priApellido: "Rear", segApellido:"Window",agente: "", selected: false},
                            {id: $scope.idUser++,name:"Karen", priApellido:"Bumper", segApellido:"Sticker", agente: "",selected: false},
                            {id: $scope.idUser++, name:"Katherine", priApellido:"Low", segApellido:"Gravity", agente: "",selected: false},
                            {id: $scope.idUser++, name:"Josué", priApellido:"Aviri", segApellido:"Minch", agente: "",selected: false}];


    $scope.espannolIngles = [{id: $scope.idUser++, name:"Marcela", priApellido:"Gutiérrez", segApellido:"Feoli",agente: "", selected: false},
                            {id: $scope.idUser++, name:"Gerardo", priApellido:"Parajeles", segApellido:"Blandón",agente: "", selected: false},
                            {id: $scope.idUser++,name: "Bryan", priApellido:"Cascante", segApellido: "Rojas",agente: "", selected: false}];

    $scope.espannolInglesRemoved = [{id: $scope.idUser++, name:"María", priApellido:"Milagro", segApellido:"Chacón", agente: "",selected: false},
                                    {id: $scope.idUser++, name:"María", priApellido:"Vindas", segApellido:"Blanco", agente: "",selected: false},
                                    {id: $scope.idUser++, name:"Nicole", priApellido:"Chacón", segApellido:"Aguilar", agente: "",selected: false},
                                    {id: $scope.idUser++, name:"Juan", priApellido:"López", segApellido:"Mendoza", agente: "",selected: false}];

    $scope.update = function() {
        switch ($scope.Categorie)
        {
            case 1:
                $scope.listaEmpleados = $scope.espannol;
                $scope.listaEmpleadosRemovidos = $scope.espannolRemoved;
                break;
            case 2:
                $scope.listaEmpleados = $scope.ingles;
                $scope.listaEmpleadosRemovidos = $scope.inglesRemoved;
                break;

            case 3:
                $scope.listaEmpleados = $scope.espannolIngles;
                $scope.listaEmpleadosRemovidos = $scope.espannolInglesRemoved;
                break;
        };
        $scope.agente();
    }

    $scope.init = function () {
        $scope.listaEmpleados = $scope.espannol;

        $scope.listaEmpleadosRemovidos = $scope.espannolRemoved;
    };

    $scope.agente = function()
    {
        debugger;
        for(var i = 0; i < $scope.listaEmpleados.length; i++)
        {
            var code = "";
            code += $scope.listaEmpleados[i].name.substring(0,1);
            code += $scope.listaEmpleados[i].priApellido.substring(0,1);
            code += $scope.listaEmpleados[i].segApellido.substring(0,1);
            code += i;
            $scope.listaEmpleados[i].agente =  "-Agente: " + code;
        }

        for(var i = 0; i < $scope.listaEmpleadosRemovidos.length; i++)
        {
            var code = "";
            code += $scope.listaEmpleadosRemovidos[i].name.substring(0,1);
            code += $scope.listaEmpleadosRemovidos[i].priApellido.substring(0,1);
            code += $scope.listaEmpleadosRemovidos[i].segApellido.substring(0,1);
            code += i;
            $scope.listaEmpleadosRemovidos[i].agente = "-Agente: " + code;
        }
    }

    $scope.init();
    $scope.agente();

    $scope.copiarLista = function()
    {
        for(var i = 0; i < $scope.listaEmpleados.length; i++)
        {
            if($scope.listaEmpleadosRemovidos.indexOf($scope.listaEmpleados[i]) === -1)
            {
               $scope.listaEmpleadosRemovidos.push({
                   id: $scope.listaEmpleados[i].id,
                    name: $scope.listaEmpleados[i].name,
                    priApellido: $scope.listaEmpleados[i].priApellido,
                    segApellido: $scope.listaEmpleados[i].segApellido
                });
            }
        }
        $scope.listaEmpleados = [];
        $scope.agente();
    };

    $scope.copiar = function()
    {
        var toDelete = [];
        for(var i = 0; i < $scope.listaEmpleados.length; i++)
        {
            if($scope.listaEmpleados[i].selected){
                if($scope.listaEmpleadosRemovidos.indexOf($scope.espannol[i]) === -1)
                {
                    $scope.listaEmpleadosRemovidos.push({
                        id: $scope.listaEmpleados[i].id,
                        name: $scope.listaEmpleados[i].name,
                        priApellido: $scope.listaEmpleados[i].priApellido,
                        segApellido: $scope.listaEmpleados[i].segApellido
                    });
                    toDelete.push($scope.listaEmpleados[i]);
                }
            }
        }
        for(var i = 0; i < toDelete.length; i++)
        {
            $scope.listaEmpleados.splice($scope.listaEmpleados.indexOf(toDelete[i]),1);
        }
        $scope.agente();
    };

    $scope.removerLista = function()
    {
        for(var i = 0; i < $scope.listaEmpleadosRemovidos.length; i++)
        {
            if($scope.listaEmpleados.indexOf($scope.listaEmpleadosRemovidos[i]) === -1)
            {
                $scope.listaEmpleados.push({
                    id: $scope.listaEmpleadosRemovidos[i].id,
                    name: $scope.listaEmpleadosRemovidos[i].name,
                    priApellido: $scope.listaEmpleadosRemovidos[i].priApellido,
                    segApellido: $scope.listaEmpleadosRemovidos[i].segApellido
                });
            }
        }
        $scope.listaEmpleadosRemovidos = [];
        $scope.agente();
    }

    $scope.remover = function()
    {
        debugger;
        var toDelete = [];
        for(var i = 0; i < $scope.listaEmpleadosRemovidos.length; i++)
        {
            if($scope.listaEmpleadosRemovidos[i].selected){
                if($scope.listaEmpleados.indexOf($scope.listaEmpleadosRemovidos[i]) === -1)
                {
                    $scope.listaEmpleados.push({
                        id: $scope.listaEmpleadosRemovidos[i].id,
                        name: $scope.listaEmpleadosRemovidos[i].name,
                        priApellido: $scope.listaEmpleadosRemovidos[i].priApellido,
                        segApellido: $scope.listaEmpleadosRemovidos[i].segApellido
                    });
                    toDelete.push($scope.listaEmpleadosRemovidos[i]);
                }
            }
        }
        for(var i = 0; i < toDelete.length; i++)
        {
            $scope.listaEmpleadosRemovidos.splice($scope.listaEmpleadosRemovidos.indexOf(toDelete[i]),1);
        }
        $scope.agente();
    };

    $scope.primero = function()
    {
        var mx = $scope.listaEmpleadosRemovidos.length;
        for(var i = 0; i < mx; i++)
        {
            if($scope.listaEmpleadosRemovidos[i].selected){
                var obj = ({id:$scope.listaEmpleadosRemovidos[i].id,
                    name:$scope.listaEmpleadosRemovidos[i].name,
                    priApellido: $scope.listaEmpleadosRemovidos[i].priApellido,
                    segApellido:$scope.listaEmpleadosRemovidos[i].segApellido,
                    selected: false,
                    agente:$scope.listaEmpleadosRemovidos[i].agente});

                $scope.listaEmpleadosRemovidos.splice(i,1);
                $scope.listaEmpleadosRemovidos.unshift(obj);
            }
        }
        $scope.agente();
    }

    $scope.ultimo = function()
    {
        var mx = $scope.listaEmpleadosRemovidos.length;
        for(var i = 0; i < mx; i++)
        {
            if($scope.listaEmpleadosRemovidos[i].selected){
                var obj = ({id:$scope.listaEmpleadosRemovidos[i].id,
                    name:$scope.listaEmpleadosRemovidos[i].name,
                    priApellido: $scope.listaEmpleadosRemovidos[i].priApellido,
                    segApellido:$scope.listaEmpleadosRemovidos[i].segApellido,
                    selected: false,
                    agente:$scope.listaEmpleadosRemovidos[i].agente});
                $scope.listaEmpleadosRemovidos.splice(i,1);
                $scope.listaEmpleadosRemovidos.push(obj);
            }
        }
        $scope.agente();
    }

    $scope.subir = function()
    {
        debugger;
        var mx = $scope.listaEmpleadosRemovidos.length;
        var lisHelper = $scope.listaEmpleadosRemovidos;
        for(var i = 0; i < mx; i++)
        {
            if($scope.listaEmpleadosRemovidos[i].selected){
                var obj = ({id:$scope.listaEmpleadosRemovidos[i].id,
                            name:$scope.listaEmpleadosRemovidos[i].name,
                            priApellido: $scope.listaEmpleadosRemovidos[i].priApellido,
                            segApellido:$scope.listaEmpleadosRemovidos[i].segApellido,
                            selected:false,
                            agente:$scope.listaEmpleadosRemovidos[i].agente});

                $scope.listaEmpleadosRemovidos.splice(i,1);
                $scope.listaEmpleadosRemovidos.splice(i-1,0,obj);
                /*var objReplace = $scope.listaEmpleadosRemovidos[i-1];
                $scope.listaEmpleadosRemovidos.splice(i-1,0,obj);
                $scope.listaEmpleadosRemovidos.splice($scope.listaEmpleadosRemovidos.indexOf($scope.listaEmpleadosRemovidos[i]),1);*/
            }
        }
        $scope.agente();
    }

    $scope.bajar = function()
    {
        var mx = $scope.listaEmpleadosRemovidos.length;
        var lisHelper = $scope.listaEmpleadosRemovidos;
        for(var i = 0; i < mx; i++)
        {
            if($scope.listaEmpleadosRemovidos[i].selected){
                var obj = ({id:$scope.listaEmpleadosRemovidos[i].id,
                    name:$scope.listaEmpleadosRemovidos[i].name,
                    priApellido: $scope.listaEmpleadosRemovidos[i].priApellido,
                    segApellido:$scope.listaEmpleadosRemovidos[i].segApellido,
                agente:$scope.listaEmpleadosRemovidos[i].agente});

                $scope.listaEmpleadosRemovidos.splice(i,1);
                $scope.listaEmpleadosRemovidos.splice(i+1,0,obj);
                /*var objReplace = $scope.listaEmpleadosRemovidos[i-1];
                 $scope.listaEmpleadosRemovidos.splice(i-1,0,obj);
                 $scope.listaEmpleadosRemovidos.splice($scope.listaEmpleadosRemovidos.indexOf($scope.listaEmpleadosRemovidos[i]),1);*/
            }
        }
        $scope.agente();
    }
});