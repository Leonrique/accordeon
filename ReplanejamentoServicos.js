angular.module('ReplanejamentoServicosApp',['ngAria', 'ngMaterial'])

.config([function () {
    /* Espaço reservado para a configuração do provider */
}])

.controller('ReplanejamentoServicosController', function ($scope, $http) {
  $scope.collapseAll = function(data) {

     $scope.insumos = _.filter($scope.servicosOriginal, function(item){ return item.codigo == data.codigo;});

	   for(var i in $scope.servicosOnly) {
		   if($scope.servicosOnly[i] != data) {
			   $scope.servicosOnly[i].expanded = false;   
		   }
	   }
	   
     /*_.map($scope.servicosOnly, function(num, key){ num.expanded = false });*/

      data.expanded = !data.expanded;
	};


  $scope.collapseInsumos = function(item) {
	   for(var i in $scope.insumos) {
		   if($scope.insumos[i] != item) {
			   $scope.insumos[i].expandedInsumo = false;   
		   }
	   }
	   
     /*_.map($scope.insumos, function(num, key){ num.expandedInsumo = false });*/

      //$scope.servicos = _.filter($scope.servicos, function(item){ return item.codigo == data.codigo;});
      
      item.expandedInsumo = !item.expandedInsumo;
	};

  $scope.mostrarMensagem = false;

  $scope.showConfirm = function() {
    $scope.mostrarMensagem = !$scope.mostrarMensagem
  };


    $scope.servicosOriginal = [
  {
    "codigo": "UAU0012",
    "descricao": "DESPESAS DE ESCRITORIO",
    "qtdeServico": 100,
    "codigoInsumo": 2,
    "descricaoInsumo": "MAQUINÁRIO",
    "qtdeInsumo": 0,
    "precoInsumo": 125.36
  },
  {
    "codigo": "UAU0012",
    "descricao": "DESPESAS DE ESCRITORIO",
    "qtdeServico": 100,
    "codigoInsumo": "25468521p",
    "descricaoInsumo": "etest",
    "qtdeInsumo": 0,
    "precoInsumo": 12.3
  },
  {
    "codigo": "UAU0012",
    "descricao": "DESPESAS DE ESCRITORIO",
    "qtdeServico": 100,
    "codigoInsumo": "IMP01",
    "descricaoInsumo": "PIS",
    "qtdeInsumo": 1,
    "precoInsumo": 1000
  },
  {
    "codigo": "INSS06",
    "descricao": "CONSTRUÇÃO ESTACIONAMENTO",
    "qtdeServico": 30,
    "codigoInsumo": "ADM29",
    "descricaoInsumo": "SEGUROS",
    "qtdeInsumo": 1,
    "precoInsumo": 138.839963
  },
  {
    "codigo": "INSS06",
    "descricao": "CONSTRUÇÃO ESTACIONAMENTO",
    "qtdeServico": 30,
    "codigoInsumo": "ADM30",
    "descricaoInsumo": "DESPESAS DIVERSAS",
    "qtdeInsumo": 1,
    "precoInsumo": 138.839986
  },
  {
    "codigo": "INSS06",
    "descricao": "CONSTRUÇÃO ESTACIONAMENTO",
    "qtdeServico": 30,
    "codigoInsumo": "TESTE5",
    "descricaoInsumo": "CONSTRUÇÃO ESTACIONAMENTO",
    "qtdeInsumo": 1,
    "precoInsumo": 133330.999837
  },
  {
    "codigo": "INSS06",
    "descricao": "CONSTRUÇÃO ESTACIONAMENTO",
    "qtdeServico": 30,
    "codigoInsumo": "UAUI0001",
    "descricaoInsumo": "FUNCIONARIOS - SALARIOS/BENEFICIOS",
    "qtdeInsumo": 1,
    "precoInsumo": 138.839879
  },
  {
    "codigo": "030216P",
    "descricao": "ESCAV.MECAN. CAMPO ABERTO EM TERRA EXCETO ROCHA ATE 8M",
    "qtdeServico": 0,
    "codigoInsumo": "080111P",
    "descricaoInsumo": "TRATOR DE ESTEIRAS POT. 105KW (140HP) C/LAMINA",
    "qtdeInsumo": 0.03,
    "precoInsumo": 1
  },
  {
    "codigo": "030216P",
    "descricao": "ESCAV.MECAN. CAMPO ABERTO EM TERRA EXCETO ROCHA ATE 8M",
    "qtdeServico": 10,
    "codigoInsumo": "080111P",
    "descricaoInsumo": "TRATOR DE ESTEIRAS POT. 105KW (140HP) C/LAMINA",
    "qtdeInsumo": 0.03,
    "precoInsumo": 1
  },
  {
    "codigo": "030216P",
    "descricao": "ESCAV.MECAN. CAMPO ABERTO EM TERRA EXCETO ROCHA ATE 8M",
    "qtdeServico": 0,
    "codigoInsumo": "080111P",
    "descricaoInsumo": "TRATOR DE ESTEIRAS POT. 105KW (140HP) C/LAMINA",
    "qtdeInsumo": 0.03,
    "precoInsumo": 1
  },
  {
    "codigo": "020201P",
    "descricao": "BOBS P/ CERCA DE ARAME",
    "qtdeServico": 0,
    "codigoInsumo": "010146P",
    "descricaoInsumo": "SERVENTE",
    "qtdeInsumo": 0.08,
    "precoInsumo": 1.58
  },
  {
    "codigo": "020201P",
    "descricao": "BOBS P/ CERCA DE ARAME",
    "qtdeServico": 0,
    "codigoInsumo": "099999P",
    "descricaoInsumo": "ENCARGOS SOCIAIS",
    "qtdeInsumo": 10,
    "precoInsumo": 2.31
  },
  {
    "codigo": "020201P",
    "descricao": "BOBS P/ CERCA DE ARAME",
    "qtdeServico": 10,
    "codigoInsumo": "010146P",
    "descricaoInsumo": "SERVENTE",
    "qtdeInsumo": 0.08,
    "precoInsumo": 1.58
  },
  {
    "codigo": "020201P",
    "descricao": "BOBS P/ CERCA DE ARAME",
    "qtdeServico": 10,
    "codigoInsumo": "099999P",
    "descricaoInsumo": "ENCARGOS SOCIAIS",
    "qtdeInsumo": 0,
    "precoInsumo": 2.31
  },
  {
    "codigo": "020201P",
    "descricao": "BOBS P/ CERCA DE ARAME",
    "qtdeServico": 0,
    "codigoInsumo": "010146P",
    "descricaoInsumo": "SERVENTE",
    "qtdeInsumo": 0.08,
    "precoInsumo": 1.58
  },
  {
    "codigo": "030109P",
    "descricao": "ESCAV.MANUAL DE VALAS EM ROCHA C/EXPLOS.PERF. MECAN. ATE 2M",
    "qtdeServico": 0,
    "codigoInsumo": "010146P",
    "descricaoInsumo": "SERVENTE",
    "qtdeInsumo": 15,
    "precoInsumo": 1.58
  },
  {
    "codigo": "030109P",
    "descricao": "ESCAV.MANUAL DE VALAS EM ROCHA C/EXPLOS.PERF. MECAN. ATE 2M",
    "qtdeServico": 0,
    "codigoInsumo": "028030P",
    "descricaoInsumo": "DINAMITE 40%",
    "qtdeInsumo": 0.2,
    "precoInsumo": 3.55
  },
  {
    "codigo": "030109P",
    "descricao": "ESCAV.MANUAL DE VALAS EM ROCHA C/EXPLOS.PERF. MECAN. ATE 2M",
    "qtdeServico": 0,
    "codigoInsumo": "028031P",
    "descricaoInsumo": "ESPOLETA",
    "qtdeInsumo": 3,
    "precoInsumo": 0.34
  },
  {
    "codigo": "030109P",
    "descricao": "ESCAV.MANUAL DE VALAS EM ROCHA C/EXPLOS.PERF. MECAN. ATE 2M",
    "qtdeServico": 0,
    "codigoInsumo": "028032P",
    "descricaoInsumo": "ESTOPIM DUPLO",
    "qtdeInsumo": 1,
    "precoInsumo": 0
  },
  {
    "codigo": "030109P",
    "descricao": "ESCAV.MANUAL DE VALAS EM ROCHA C/EXPLOS.PERF. MECAN. ATE 2M",
    "qtdeServico": 0,
    "codigoInsumo": "080129P",
    "descricaoInsumo": "COMPRESSOR DE AR 80 A 85HP",
    "qtdeInsumo": 0.06,
    "precoInsumo": 22.82
  },
  {
    "codigo": "030109P",
    "descricao": "ESCAV.MANUAL DE VALAS EM ROCHA C/EXPLOS.PERF. MECAN. ATE 2M",
    "qtdeServico": 0,
    "codigoInsumo": "080138P",
    "descricaoInsumo": "PERFURATRIZ MANUAL",
    "qtdeInsumo": 0.18,
    "precoInsumo": 6.09
  },
  {
    "codigo": "030109P",
    "descricao": "ESCAV.MANUAL DE VALAS EM ROCHA C/EXPLOS.PERF. MECAN. ATE 2M",
    "qtdeServico": 0,
    "codigoInsumo": "099999P",
    "descricaoInsumo": "ENCARGOS SOCIAIS",
    "qtdeInsumo": 0,
    "precoInsumo": 2.31
  },
  {
    "codigo": "030109P",
    "descricao": "ESCAV.MANUAL DE VALAS EM ROCHA C/EXPLOS.PERF. MECAN. ATE 2M",
    "qtdeServico": 10,
    "codigoInsumo": "010146P",
    "descricaoInsumo": "SERVENTE",
    "qtdeInsumo": 15,
    "precoInsumo": 1.58
  },
  {
    "codigo": "030109P",
    "descricao": "ESCAV.MANUAL DE VALAS EM ROCHA C/EXPLOS.PERF. MECAN. ATE 2M",
    "qtdeServico": 10,
    "codigoInsumo": "028030P",
    "descricaoInsumo": "DINAMITE 40%",
    "qtdeInsumo": 0.2,
    "precoInsumo": 3.55
  },
  {
    "codigo": "030109P",
    "descricao": "ESCAV.MANUAL DE VALAS EM ROCHA C/EXPLOS.PERF. MECAN. ATE 2M",
    "qtdeServico": 10,
    "codigoInsumo": "028031P",
    "descricaoInsumo": "ESPOLETA",
    "qtdeInsumo": 3,
    "precoInsumo": 0.34
  },
  {
    "codigo": "030109P",
    "descricao": "ESCAV.MANUAL DE VALAS EM ROCHA C/EXPLOS.PERF. MECAN. ATE 2M",
    "qtdeServico": 10,
    "codigoInsumo": "028032P",
    "descricaoInsumo": "ESTOPIM DUPLO",
    "qtdeInsumo": 3,
    "precoInsumo": 0.63
  },
  {
    "codigo": "030109P",
    "descricao": "ESCAV.MANUAL DE VALAS EM ROCHA C/EXPLOS.PERF. MECAN. ATE 2M",
    "qtdeServico": 10,
    "codigoInsumo": "080129P",
    "descricaoInsumo": "COMPRESSOR DE AR 80 A 85HP",
    "qtdeInsumo": 0.06,
    "precoInsumo": 22.82
  },
  {
    "codigo": "030109P",
    "descricao": "ESCAV.MANUAL DE VALAS EM ROCHA C/EXPLOS.PERF. MECAN. ATE 2M",
    "qtdeServico": 10,
    "codigoInsumo": "080138P",
    "descricaoInsumo": "PERFURATRIZ MANUAL",
    "qtdeInsumo": 0.18,
    "precoInsumo": 6.09
  },
  {
    "codigo": "030109P",
    "descricao": "ESCAV.MANUAL DE VALAS EM ROCHA C/EXPLOS.PERF. MECAN. ATE 2M",
    "qtdeServico": 10,
    "codigoInsumo": "099999P",
    "descricaoInsumo": "ENCARGOS SOCIAIS",
    "qtdeInsumo": 0,
    "precoInsumo": 2.31
  },
  {
    "codigo": "030109P",
    "descricao": "ESCAV.MANUAL DE VALAS EM ROCHA C/EXPLOS.PERF. MECAN. ATE 2M",
    "qtdeServico": 0,
    "codigoInsumo": "010146P",
    "descricaoInsumo": "SERVENTE",
    "qtdeInsumo": 15,
    "precoInsumo": 1.58
  },
  {
    "codigo": "030109P",
    "descricao": "ESCAV.MANUAL DE VALAS EM ROCHA C/EXPLOS.PERF. MECAN. ATE 2M",
    "qtdeServico": 0,
    "codigoInsumo": "028030P",
    "descricaoInsumo": "DINAMITE 40%",
    "qtdeInsumo": 0.2,
    "precoInsumo": 3.55
  },
  {
    "codigo": "030109P",
    "descricao": "ESCAV.MANUAL DE VALAS EM ROCHA C/EXPLOS.PERF. MECAN. ATE 2M",
    "qtdeServico": 0,
    "codigoInsumo": "028031P",
    "descricaoInsumo": "ESPOLETA",
    "qtdeInsumo": 3,
    "precoInsumo": 0.34
  },
  {
    "codigo": "030109P",
    "descricao": "ESCAV.MANUAL DE VALAS EM ROCHA C/EXPLOS.PERF. MECAN. ATE 2M",
    "qtdeServico": 0,
    "codigoInsumo": "028032P",
    "descricaoInsumo": "ESTOPIM DUPLO",
    "qtdeInsumo": 3,
    "precoInsumo": 0.63
  },
  {
    "codigo": "030109P",
    "descricao": "ESCAV.MANUAL DE VALAS EM ROCHA C/EXPLOS.PERF. MECAN. ATE 2M",
    "qtdeServico": 0,
    "codigoInsumo": "080129P",
    "descricaoInsumo": "COMPRESSOR DE AR 80 A 85HP",
    "qtdeInsumo": 0.06,
    "precoInsumo": 22.82
  },
  {
    "codigo": "030109P",
    "descricao": "ESCAV.MANUAL DE VALAS EM ROCHA C/EXPLOS.PERF. MECAN. ATE 2M",
    "qtdeServico": 0,
    "codigoInsumo": "080138P",
    "descricaoInsumo": "PERFURATRIZ MANUAL",
    "qtdeInsumo": 0.18,
    "precoInsumo": 6.09
  },
  {
    "codigo": "020102P",
    "descricao": "DEMOLICAO: COBERTURA C/TELHAS ONDULADAS DE FIBROCIMENTO",
    "qtdeServico": 0,
    "codigoInsumo": "010111P",
    "descricaoInsumo": "CARPINTEIRO",
    "qtdeInsumo": 0.1,
    "precoInsumo": 1.97
  },
  {
    "codigo": "020102P",
    "descricao": "DEMOLICAO: COBERTURA C/TELHAS ONDULADAS DE FIBROCIMENTO",
    "qtdeServico": 0,
    "codigoInsumo": "010112P",
    "descricaoInsumo": "dfgdfgd",
    "qtdeInsumo": 1,
    "precoInsumo": 1.58
  },
  {
    "codigo": "020102P",
    "descricao": "DEMOLICAO: COBERTURA C/TELHAS ONDULADAS DE FIBROCIMENTO",
    "qtdeServico": 0,
    "codigoInsumo": "010146P",
    "descricaoInsumo": "SERVENTE",
    "qtdeInsumo": 0.25,
    "precoInsumo": 1.58
  },
  {
    "codigo": "020102P",
    "descricao": "DEMOLICAO: COBERTURA C/TELHAS ONDULADAS DE FIBROCIMENTO",
    "qtdeServico": 0,
    "codigoInsumo": "010150P",
    "descricaoInsumo": "TELHADISTA",
    "qtdeInsumo": 0.03,
    "precoInsumo": 1.94
  },
  {
    "codigo": "020102P",
    "descricao": "DEMOLICAO: COBERTURA C/TELHAS ONDULADAS DE FIBROCIMENTO",
    "qtdeServico": 0,
    "codigoInsumo": "099999P",
    "descricaoInsumo": "ENCARGOS SOCIAIS",
    "qtdeInsumo": 0,
    "precoInsumo": 2.31
  },
  {
    "codigo": "030118P",
    "descricao": "ESCORAMENTO COMUM DE VALAS TIPO CONTINUO C/PRANCHAS PEROBA",
    "qtdeServico": 10,
    "codigoInsumo": "010111P",
    "descricaoInsumo": "CARPINTEIRO",
    "qtdeInsumo": 1.4,
    "precoInsumo": 1.97
  },
  {
    "codigo": "030118P",
    "descricao": "ESCORAMENTO COMUM DE VALAS TIPO CONTINUO C/PRANCHAS PEROBA",
    "qtdeServico": 10,
    "codigoInsumo": "010146P",
    "descricaoInsumo": "SERVENTE",
    "qtdeInsumo": 2.8,
    "precoInsumo": 1.58
  },
  {
    "codigo": "030118P",
    "descricao": "ESCORAMENTO COMUM DE VALAS TIPO CONTINUO C/PRANCHAS PEROBA",
    "qtdeServico": 10,
    "codigoInsumo": "021003P",
    "descricaoInsumo": "ESCORA DE EUCALIPTO DE 20CM",
    "qtdeInsumo": 0.14,
    "precoInsumo": 5.92
  },
  {
    "codigo": "030118P",
    "descricao": "ESCORAMENTO COMUM DE VALAS TIPO CONTINUO C/PRANCHAS PEROBA",
    "qtdeServico": 10,
    "codigoInsumo": "021025P",
    "descricaoInsumo": "VIGA DE PEROBA DE 3X16CM",
    "qtdeInsumo": 1.25,
    "precoInsumo": 2.8
  },
  {
    "codigo": "030118P",
    "descricao": "ESCORAMENTO COMUM DE VALAS TIPO CONTINUO C/PRANCHAS PEROBA",
    "qtdeServico": 10,
    "codigoInsumo": "021027P",
    "descricaoInsumo": "VIGA DE PEROBA DE 6X16CM",
    "qtdeInsumo": 0.15,
    "precoInsumo": 5.56
  },
  {
    "codigo": "030118P",
    "descricao": "ESCORAMENTO COMUM DE VALAS TIPO CONTINUO C/PRANCHAS PEROBA",
    "qtdeServico": 10,
    "codigoInsumo": "026560P",
    "descricaoInsumo": "PREGO - PRECO MEDIO DAS BITOLAS",
    "qtdeInsumo": 0.2,
    "precoInsumo": 1.65
  },
  {
    "codigo": "030118P",
    "descricao": "ESCORAMENTO COMUM DE VALAS TIPO CONTINUO C/PRANCHAS PEROBA",
    "qtdeServico": 10,
    "codigoInsumo": "099999P",
    "descricaoInsumo": "ENCARGOS SOCIAIS",
    "qtdeInsumo": 0,
    "precoInsumo": 2.31
  },
  {
    "codigo": "030118P",
    "descricao": "ESCORAMENTO COMUM DE VALAS TIPO CONTINUO C/PRANCHAS PEROBA",
    "qtdeServico": 5,
    "codigoInsumo": "010111P",
    "descricaoInsumo": "CARPINTEIRO",
    "qtdeInsumo": 1.4,
    "precoInsumo": 1.97
  },
  {
    "codigo": "030118P",
    "descricao": "ESCORAMENTO COMUM DE VALAS TIPO CONTINUO C/PRANCHAS PEROBA",
    "qtdeServico": 5,
    "codigoInsumo": "010146P",
    "descricaoInsumo": "SERVENTE",
    "qtdeInsumo": 2.8,
    "precoInsumo": 1.58
  },
  {
    "codigo": "030118P",
    "descricao": "ESCORAMENTO COMUM DE VALAS TIPO CONTINUO C/PRANCHAS PEROBA",
    "qtdeServico": 5,
    "codigoInsumo": "021003P",
    "descricaoInsumo": "ESCORA DE EUCALIPTO DE 20CM",
    "qtdeInsumo": 0.14,
    "precoInsumo": 5.92
  }
];

  $scope.dados = _.groupBy($scope.servicos, 'codigo');
  $scope.dados2 = _.map($scope.servicos, 'codigo');

  $scope.servicosOnly = _.uniq($scope.servicosOriginal, function(item, key, a) { 
      return item.codigo + '-' + item.descricao;
  });
});
