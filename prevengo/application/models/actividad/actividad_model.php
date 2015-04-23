<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Actividad_model extends CI_Model{

	public function __construct(){
		parent::__construct();
	}
    
	 public function cargarPlandeAccion(){
     
            $query = $this->db->query("select actividad.id, actividad.descripcion from actividad 
                                        inner join avance on actividad.id=avance.actividad
                                        inner join evento on evento.id=actividad.evento
                                        where (evento.estatus in (1,2)) and (actividad.estatus in (1,2)) and (avance.usuario=3)
                                        order by actividad.estatus, actividad.id ");
                $resultado = array();
                $resultdb=array();  
                if ($query->num_rows() > 0){
                foreach ($query->result() as $row){
                    $resultado[] = $row;
                }
                return $resultado;
                $query->free-result();
              } 
    
    }


 public function  buscarUnPlandeAccion($idUsuario,$idActividad){

    $sql=" SELECT ava.id as avance, ava.actividad,ava.fechaasignacion, act.estatus 
              FROM avance AS ava 
              INNER JOIN actividad AS act ON ava.actividad=act.id 
              WHERE ava.usuario=$idUsuario and ava.actividad=$idActividad group by act.id";

    $query = $this->db->query($sql);
       return $query;

    }

     public function  cambiarEstatus($data){         
         $this->db->set($data);
         $this->db->where('id',$data[0]);
         return  $this->db->update('actividad');
    }


}// fin de la clase