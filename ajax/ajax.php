<?php
$getPost = filter_input_array(INPUT_POST, FILTER_DEFAULT);
$setPost = array_map('strip_tags', $getPost);
$Post = array_map('trim', $setPost);

$Action = $Post['action'];
$jSon = array();
unset($Post['action']);

if($Action):
	
endif;

switch ($Action):
    case 'del':
	
        $jSon = ['success' => "Notificação enviada com Sucesso"];
        break;
    default :
        $jSon['error'] = "Erro ao selecionar Acao!";
endswitch;

echo json_encode($jSon, JSON_FORCE_OBJECT);
