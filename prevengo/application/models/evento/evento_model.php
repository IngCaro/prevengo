<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class Evento_model extends CI_Model {

    public function __construct() {
        parent::__construct();
    }

    public function cargarListaEvento() {

        $query = $this->db->query("Select evento.id as idEv, 
                                    evento.titulo as titulo, 
                                    evento.descripcion as descripcion, 
                                    evento.fechatope as fechaEv,
                                    evento.fechapreaviso as fechaPA,
                                    evento.presupuesto as presupuesto,
                                    evento.estatus as estatus,
                                    alcance.nombre as alcance,
                                    agente.nombre as agente,
                                    tipoevento.nombre as tipoEv,
                                    sector.nombre as sector
                             from evento 
                             inner join agente on agente.id=evento.agente
                             inner join alcance on alcance.id=evento.alcance
                             inner join tipoevento on tipoevento.id=evento.tipoevento
                             inner join sector on sector.id=evento.sector
                             where evento.estatus in (0,1,2)");
        $resultado = array();
            return $query;
            
       }
    

}// fin de la clase
