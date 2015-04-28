<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Actividad extends CI_Controller
{
     public function __construct(){
        parent::__construct();
        session_start();
        $this->load->helper('url');
        $this->load->database();
        $this->load->library('session');
        $this->load->model('actividad/actividad_model');
    } 


    public function obtenerPlandeAccion()
    {
      $resultdbd=array();
        if ($resultdbd=$this->actividad_model->cargarPlandeAccion()){
                $output = array(
                   'success'   => true,
                   'total'     => count($resultdbd),
                   'data'      => array_splice($resultdbd,$this->input->get("start"),$this->input->get("limit"))
                );
           echo json_encode($output);
        }
    }
    


     public function buscarUnPlandeAccion($idUsuario)
    {
      $resultdbd=array();
        if ($resultdbd=$this->actividad_model->buscarUnPlandeAccion($idUsuario)){
                $output = array(
                   'success'   => true,
                   'total'     => count($resultdbd),
                   'data'      => array_splice($resultdbd,$this->input->get("start"),$this->input->get("limit"))
                );
           echo json_encode($output);
        }
    }


     public function actualizarEstatusPlandeAccion($idActividad, $estatus)
    {
      $resultdbd=array();
        if ($resultdbd=$this->actividad_model->cambiarEstatus($idActividad, $estatus)){
                $output = array(
                   'success'   => true,
                   'total'     => count($resultdbd),
                   'data'      => array_splice($resultdbd,$this->input->get("start"),$this->input->get("limit"))
                );
           echo json_encode($output);
        }
    }



 public function aprobarActividad()
    {
         $id = $this->input->post('record');
         $estatus=0;
         
            $data = array(  
                            'id'   => $id,                  
                            'estatus' => $estatus,
                );
         $resultdbd=$this->actividad_model->cambiarEstatus($data);

                    if($resultdbd){
                                echo json_encode(array(
                                    "success"   => true,
                                    "msg"       => "La actividad ha sido Completada exitosamente" //modificado en la base de datos
                                ));
                                    }
                            else{
                                echo json_encode(array(
                                    "success"   => false,
                                    "msg"       => "No se pudo completar la actividad." //no se modifico en la base de datos
                                        ));
                                }
    }

public function obtenerEventosConPlandeAccion()
    {
         
         $resultdbd=array();
        if ($resultdbd=$this->actividad_model->cargarEventosConPlandeAccion()){
                $output = array(
                   'success'   => true,
                   'total'     => count($resultdbd),
                   'data'      => array_splice($resultdbd,$this->input->get("start"),$this->input->get("limit"))
                );
           echo json_encode($output);
        }
    }//fin de la funcion





public function obtenerPlandeAccionDeEvento()
    {
        // $id = $this->input->post('id');
        $id=1;
         $resultdbd=array();
        if ($resultdbd=$this->actividad_model->cargarPlandeAccionDeEvento($id)){
                $output = array(
                   'success'   => true,
                   'total'     => count($resultdbd),
                   'data'      => array_splice($resultdbd,$this->input->get("start"),$this->input->get("limit"))
                );
           echo json_encode($output);
        }
    }//fin de la funcion
   

    
     public function registrarActividad()
    {
            $descripcion=$this->input->post('txtDescripcion');
            $usuario=1;
            $evento=1;
            $fecharegistro = date('Y-m-d');
            $fechaT= $this->input->post('dtfFechaT');
            $fechaPA= $this->input->post('dtfFechaPA');
            $estatus=1;
            
            
             $datactividad = array(
                                    'usuario'        =>  $evento,
                                    'evento'         =>  $usuario,
                                    'descripcion'    =>  $descripcion,
                                    'fecharegistro'  =>  $fecharegistro,              
                                    'fechaaviso'     => $fechaPA,
                                    'fechatope'      => $fechaT,
                                    'estatus'        =>  $estatus,

                                                        );
                                                                        
                                       $result=$this->actividad_model->guardarActividad($datactividad);
                                      
 
                                       
                      if($result){
                           echo json_encode(array(
                           "success"   => true,
                            "msg"       => "Se Guardo con Éxito." //modificado en la base de datos
                           ));
                          }
                      else{
                            
                         echo json_encode(array(
                          "success"   => false,
                          "msg"       => "No se pudo Guardar" //no se modifico en la base de datos
                                ));
                       }

                                       
                                       

    }//registrarAvance

}//fin del controller