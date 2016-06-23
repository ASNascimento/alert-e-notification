$(function(){
	$('.j_del').click( function(){
	var id = $(this).attr('name');
		swal({   
		title: "Oppsss!",   
		text: "Tem certeza do que esta fazendo",
		confirmButtonText: "Sim Quero!",
		closeOnConfirm: true,
		showCancelButton: true,
		confirmButtonColor: "#DD6B55",
		closeOnConfirm: false
		}, function(isConfirm){
			if(isConfirm){
			swal.close();
				$.ajax({
					url: '../ajax/ajax.php',
					datatype: 'json',
					data: {action: 'del', id: id},
					type: 'POST',
					success: function (resposta) {
					resposta = jQuery.parseJSON(resposta);
						//window.location.reload();
					if(resposta.success){
						new PNotify({
						title: 'Sucesso',
						text: resposta.success,
						type: 'success',
						});
					}else{
						new PNotify({
						title: 'Opsss! Algo de Errado',
						text: resposta.error,
						type: 'error',
						});
					}
					}
				});
			}
		});
	});
});