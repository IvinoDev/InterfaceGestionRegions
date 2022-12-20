import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regiondash',
  templateUrl: './regiondash.component.html',
  styleUrls: ['./regiondash.component.scss']
})
export class RegiondashComponent {
    constructor(private router: Router) { 
    setTimeout(function(){
      $(function(){
        $('#example').DataTable();
    });
    },2000);
  }

  ngOnInit(): void {
    setTimeout(function(){
      $(function(){
        $('#example').DataTable();
    });
    },2000);
  }

  ajouterRegion() {
    this.router.navigate(['/addregion'])
  }

  modifierRegion(id: Number) {
    console.log("Modif cliquer")
  }

}
