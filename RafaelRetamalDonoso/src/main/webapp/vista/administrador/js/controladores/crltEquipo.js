/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
app.controller("equipoCtrl", function ($scope) {
    $scope.marcas = [];
    $scope.categorias = [];
    $scope.equipos = [];
    $scope.prestatarios = [];
    $scope.newEquipo =
            {idEquipo: 0,
                demoninacion: '',
                descripcion: '',
                numeroSerie: '',
                marca: {idMarca: 0, nombre: ''},
                categoria: {idCategoria: 0, nombre: ''},
                prestatario: {idPrestatarios: 0}
            };
    $scope.modEquipo = {idEquipo: 0,
        demoninacion: '',
        descripcion: '',
        numeroSerie: '',
        marca: {idMarca: 0, nombre: ''},
        categoria: {idCategoria: 0, nombre: ''},
        prestatario: {idPrestatarios: 0}
    };

    $scope.addEquipo = function () {

        if (typeof $scope.newEquipo.marca === 'string') {
            $scope.newEquipo.marca = JSON.parse($scope.newEquipo.marca);
        }
        if (typeof $scope.newEquipo.categoria === 'string') {
            $scope.newEquipo.categoria = JSON.parse($scope.newEquipo.categoria);
        }
        if (typeof $scope.newEquipo.prestatario === 'string') {
            $scope.newEquipo.prestatario = JSON.parse($scope.newEquipo.prestatario);
        }
        if ($scope.newEquipo.marca.idMarca === 0) {
            $scope.newEquipo.marca = null;
        }
        if ($scope.newEquipo.categoria.idCategoria === 0) {
            $scope.newEquipo.categoria = null;
        }
        if ($scope.newEquipo.prestatario.idPrestatarios === 0) {
            $scope.newEquipo.prestatario = null;
        }
        //alert(myobj); // 'world'

        var parametros = {
            "equipo": angular.toJson($scope.newEquipo)
        };
        $.ajax({
            data: parametros,
            url: '../../ControlEquipo',
            type: 'post',
            beforeSend: function () {

            },
            success: function (response) {
                Command: toastr["success"]("Se han añadido correctamente!");

                toastr.options = {
                    "closeButton": false,
                    "debug": false,
                    "newestOnTop": false,
                    "progressBar": true,
                    "positionClass": "toast-top-center",
                    "preventDuplicates": false,
                    "onclick": null,
                    "showDuration": "300",
                    "hideDuration": "1000",
                    "timeOut": "5000",
                    "extendedTimeOut": "1000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                };
            }, error: function (jqXHR, textStatus, errorThrown) {
                Command: toastr["error"]("No se ha podido añadir!");

                toastr.options = {
                    "closeButton": false,
                    "debug": false,
                    "newestOnTop": false,
                    "progressBar": true,
                    "positionClass": "toast-top-center",
                    "preventDuplicates": false,
                    "onclick": null,
                    "showDuration": "300",
                    "hideDuration": "1000",
                    "timeOut": "5000",
                    "extendedTimeOut": "1000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                };
            }
        });
        $scope.newEquipo =
                {idEquipo: 0,
                    demoninacion: '',
                    descripcion: '',
                    numeroSerie: '',
                    marca: {idMarca: 0, nombre: ''},
                    categoria: {idCategoria: 0, nombre: ''},
                    prestatario: {idPrestatarios: 0}
                };

    };
    $scope.getCategoria = function () {
        $.ajax({
            data: {"getCategoria": "toda"},
            async: false,
            url: '../../ControlCategoria',
            type: 'post',
            dataType: "json",
            beforeSend: function () {

            },
            success: function (response) {
                // alert("Inicialidad:"+$scope.marcas);
                $scope.categorias = response;
                // alert(response);
//                alert("bien");
                Command: toastr["success"]("Se han cargado las categoria correctamente!");

                toastr.options = {
                    "closeButton": false,
                    "debug": false,
                    "newestOnTop": false,
                    "progressBar": true,
                    "positionClass": "toast-top-center",
                    "preventDuplicates": false,
                    "onclick": null,
                    "showDuration": "300",
                    "hideDuration": "1000",
                    "timeOut": "5000",
                    "extendedTimeOut": "1000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                };
            }, error: function (jqXHR, textStatus, errorThrown) {
//                alert("mal");
            }
        });

    };
    $scope.getPrestatarios = function () {
        $.ajax({
            data: {"getPrestatarios": "toda"},
            async: false,
            url: '../../ControlPrestatarios',
            type: 'post',
            dataType: "json",
            beforeSend: function () {

            },
            success: function (response) {
                // alert("Inicialidad:"+$scope.marcas);
                $scope.prestatarios = response;
                // alert(response);
//                alert("bien");
                Command: toastr["success"]("Se han cargado los prestatarios correctamente!");

                toastr.options = {
                    "closeButton": false,
                    "debug": false,
                    "newestOnTop": false,
                    "progressBar": true,
                    "positionClass": "toast-top-center",
                    "preventDuplicates": false,
                    "onclick": null,
                    "showDuration": "300",
                    "hideDuration": "1000",
                    "timeOut": "5000",
                    "extendedTimeOut": "1000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                };
            }, error: function (jqXHR, textStatus, errorThrown) {
//                alert("mal");
            }
        });

    };
    $scope.getMarcas = function () {
        $.ajax({
            data: {"getMarcas": "toda"},
            async: false,
            url: '../../ControlMarca',
            type: 'post',
            dataType: "json",
            beforeSend: function () {

            },
            success: function (response) {
                // alert("Inicialidad:"+$scope.marcas);

                $scope.marcas = response;
                Command: toastr["success"]("Se han cargado las marcas correctamente!");

                toastr.options = {
                    "closeButton": false,
                    "debug": false,
                    "newestOnTop": false,
                    "progressBar": true,
                    "positionClass": "toast-top-center",
                    "preventDuplicates": false,
                    "onclick": null,
                    "showDuration": "300",
                    "hideDuration": "1000",
                    "timeOut": "5000",
                    "extendedTimeOut": "1000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                };
                // alert(response);
//                alert("bien");
            }, error: function (jqXHR, textStatus, errorThrown) {
                Command: toastr["error"]("Problema ha cargar marca!");

                toastr.options = {
                    "closeButton": false,
                    "debug": false,
                    "newestOnTop": false,
                    "progressBar": true,
                    "positionClass": "toast-top-center",
                    "preventDuplicates": false,
                    "onclick": null,
                    "showDuration": "300",
                    "hideDuration": "1000",
                    "timeOut": "5000",
                    "extendedTimeOut": "1000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                };
            }
        });

    };
    $scope.getEquipos = function () {
        $.ajax({
            data: {"getEquipos": "toda"},
            async: false,
            url: '../../ControlEquipo',
            type: 'post',
            dataType: "json",
            beforeSend: function () {

            },
            success: function (response) {
                // alert("Inicialidad:"+$scope.marcas);

                $scope.equipos = response;
                Command: toastr["success"]("Se han cargado las equipo correctamente!");

                toastr.options = {
                    "closeButton": false,
                    "debug": false,
                    "newestOnTop": false,
                    "progressBar": true,
                    "positionClass": "toast-top-center",
                    "preventDuplicates": false,
                    "onclick": null,
                    "showDuration": "300",
                    "hideDuration": "1000",
                    "timeOut": "5000",
                    "extendedTimeOut": "1000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                };
            }, error: function (jqXHR, textStatus, errorThrown) {
                Command: toastr["error"]("No se ha podido cargar los equipos!");

                toastr.options = {
                    "closeButton": false,
                    "debug": false,
                    "newestOnTop": false,
                    "progressBar": true,
                    "positionClass": "toast-top-center",
                    "preventDuplicates": false,
                    "onclick": null,
                    "showDuration": "300",
                    "hideDuration": "1000",
                    "timeOut": "5000",
                    "extendedTimeOut": "1000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                };
            }
        });

    };
    $scope.elecionEquipo = function (id) {

        for (i = 0; i < $scope.equipos.length; i++) {
            if ($scope.equipos[i].idEquipo == id) {
                $scope.modEquipo = $scope.equipos[i];

            }

        }

    };
    $scope.updateEquipo = function () {
        if (typeof $scope.modEquipo.marca === 'string') {
            $scope.modEquipo.marca = JSON.parse($scope.modEquipo.marca);
        }
        if (typeof $scope.modEquipo.categoria === 'string') {
            $scope.modEquipo.categoria = JSON.parse($scope.modEquipo.categoria);
        }
        if (typeof $scope.modEquipo.prestatario === 'string') {
            $scope.modEquipo.prestatario = JSON.parse($scope.modEquipo.prestatario);
        }
        if ($scope.modEquipo.marca.idMarca === 0) {
            $scope.modEquipo.marca = null;
        }
        if ($scope.modEquipo.categoria.idCategoria === 0) {
            $scope.modEquipo.categoria = null;
        }
        if ($scope.modEquipo.prestatario.idPrestatarios === 0) {
            $scope.modEquipo.prestatario = null;
        }
        var parametros = {
            "equipo": angular.toJson($scope.modEquipo)
        };
        $.ajax({
            data: parametros,
            url: '../../ControlEquipo',
            type: 'post',
            beforeSend: function () {

            },
            success: function (response) {
                Command: toastr["success"]("Se ha actualizado correctamente!");

                toastr.options = {
                    "closeButton": false,
                    "debug": false,
                    "newestOnTop": false,
                    "progressBar": true,
                    "positionClass": "toast-top-center",
                    "preventDuplicates": false,
                    "onclick": null,
                    "showDuration": "300",
                    "hideDuration": "1000",
                    "timeOut": "5000",
                    "extendedTimeOut": "1000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                };
                $scope.modEquipo = {idEquipo: 0,
                    demoninacion: '',
                    descripcion: '',
                    numeroSerie: '',
                    marca: {idMarca: 0, nombre: ''},
                    categoria: {idCategoria: 0, nombre: ''},
                    prestatario: {idPrestatarios: 0}
                };
            },
            error: function (jqXHR, textStatus, errorThrown) {
                Command: toastr["error"]("No se ha podido actualizar!");

                toastr.options = {
                    "closeButton": false,
                    "debug": false,
                    "newestOnTop": false,
                    "progressBar": true,
                    "positionClass": "toast-top-right",
                    "preventDuplicates": false,
                    "onclick": null,
                    "showDuration": "300",
                    "hideDuration": "1000",
                    "timeOut": "5000",
                    "extendedTimeOut": "1000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                };
            }
        });


    };
    $scope.deleteEquipo = function () {

        var parametros = {
            "borrarEquipo": angular.toJson($scope.modEquipo)
        };
        $.ajax({
            data: parametros,
            url: '../../ControlEquipo',
            type: 'post',
            beforeSend: function () {

            },
            success: function (response) {
                window.location.href = '';
                Command: toastr["success"]("Se ha borrado correctamente!");

                toastr.options = {
                    "closeButton": false,
                    "debug": false,
                    "newestOnTop": false,
                    "progressBar": true,
                    "positionClass": "toast-top-center",
                    "preventDuplicates": false,
                    "onclick": null,
                    "showDuration": "300",
                    "hideDuration": "1000",
                    "timeOut": "5000",
                    "extendedTimeOut": "1000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                };

            }, error: function (jqXHR, textStatus, errorThrown) {
                Command: toastr["error"]("No se ha podido borrar!");

                toastr.options = {
                    "closeButton": false,
                    "debug": false,
                    "newestOnTop": false,
                    "progressBar": true,
                    "positionClass": "toast-top-center",
                    "preventDuplicates": false,
                    "onclick": null,
                    "showDuration": "300",
                    "hideDuration": "1000",
                    "timeOut": "5000",
                    "extendedTimeOut": "1000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                };
            }
        });


    };
    $scope.generarPdf = function () {
        var columns = ["ID", "Equipo", "Marca", "Categoria", "Nombre", "Apellido"];
        var data2 = [];
        for (i = 0; i < $scope.equipos.length; i++) {
            data2.push([$scope.equipos[i].idEquipo,
                $scope.equipos[i].demoninacion,
                (!$scope.equipos[i].marca) ? "No hay valor" : $scope.equipos[i].marca.nombre,
                (!$scope.equipos[i].categoria) ? "No hay valor" : $scope.equipos[i].categoria.nombre,
                (!$scope.equipos[i].prestatario) ? "No hay valor" : $scope.equipos[i].prestatario.nombre,
                (!$scope.equipos[i].prestatario) ? "No hay valor" : $scope.equipos[i].prestatario.apellido]);
        }


        var doc = new jsPDF();
        var doc = new jsPDF()
        var imgData = null;
        convertFileToDataURLviaFileReader("logonegro.png", function (resulta) {
            doc.setFontSize(40)
            doc.text(90, 20, "Equipos");
            //alert(imgData);
            imgData = resulta;
            //alert(resulta);

            doc.addImage(imgData, 'PNG', 10, 4, 28, 20)



            doc.autoTable(columns, data2, {
                margin: {top: 30}
            }

            );

            doc.output("dataurlnewwindow");

        });

    };
    $scope.demoFromHTML = function () {
        var doc = new jsPDF('p', 'pt');
        var elem = $('#example')[0];
        var res = doc.autoTableHtmlToJson(elem);
        doc.autoTable(res.columns, res.data);
        doc.save("table.pdf");
        var pdf = new jsPDF('p', 'pt', 'letter');
        // source can be HTML-formatted string, or a reference
        // to an actual DOM element from which the text will be scraped.
        source = $('#pruebasPdf')[0];

        // we support special element handlers. Register them with jQuery-style
        // ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
        // There is no support for any other type of selectors
        // (class, of compound) at this time.
        specialElementHandlers = {
            // element with id of "bypass" - jQuery style selector
            '#bypassme': function (element, renderer) {
                // true = "handled elsewhere, bypass text extraction"
                return true
            }
        };
        margins = {
            top: 20,
            bottom: 60,
            left: 20,
            width: 522
        };
        // all coords and widths are in jsPDF instance's declared units
        // 'inches' in this case
        pdf.fromHTML(
                source, // HTML string or DOM elem ref.
                margins.left, // x coord
                margins.top, {// y coord
                    'width': margins.width, // max width of content on PDF
                    'elementHandlers': specialElementHandlers
                },
                function (dispose) {
                    // dispose: object with X, Y of the last line add to the PDF
                    //          this allow the insertion of new lines after html
                    pdf.save('Test.pdf');
                }, margins
                );
    };
    $scope.inicializar = function () {
        $scope.getMarcas();
        $scope.getCategoria();
        $scope.getEquipos();
        $scope.getPrestatarios();
    };
    $scope.inicializar();
    $(document).ready(function () {
        // $scope.getMarcas();

        $('#example').DataTable({
            "language": {
                "sProcessing": "Procesando...",
                "sLengthMenu": "Mostrar _MENU_ registros",
                "sZeroRecords": "No se encontraron resultados",
                "sEmptyTable": "NingÃºn dato disponible en esta tabla",
                "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
                "sInfoPostFix": "",
                "sSearch": "Buscar:",
                "sUrl": "",
                "sInfoThousands": ",",
                "sLoadingRecords": "Cargando...",
                "oPaginate": {
                    "sFirst": "Primero",
                    "sLast": "Ãšltimo",
                    "sNext": "Siguiente",
                    "sPrevious": "Anterior"
                },
                "oAria": {
                    "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                    "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                }

            }});
    });
});


