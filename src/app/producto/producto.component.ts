import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  public nombre_componentes = "componenete producto";
  public pro!: Producto;
  public inventario!:Array<Producto>
  public color:string;
  public color_seleccionado:string;
  constructor(){
    this.color = "pink";
    this.color_seleccionado = "#ccc ";
    this.pro = new Producto ('Tenis', 30 ,'Caja', true);
    this.inventario = [
      new Producto('zapatos',5,'Caja',true),
      new Producto('maquillaje', 3, 'estuche',true),
      new Producto('boxer', 3 , 'bolsa',true),
      new Producto('Jean', 2, 'tula', true)
    ];
  }
  

  ngOnInit(){

  }
  cambiarvalor1(valor:any){
    this.inventario[2].estado = valor; 
  }
  cambiarvalor2(valor:any){
    this.inventario[2].estado = valor; 
  }


}
