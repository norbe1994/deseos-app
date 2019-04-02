import { Component, OnInit, Input } from '@angular/core'
import { DeseosService } from 'src/app/services/deseos.service'
import { Router } from '@angular/router'

@Component({
	selector: 'app-listas',
	templateUrl: './listas.component.html',
	styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
	@Input() terminada = true

	constructor(public deseosService: DeseosService, private router: Router) {}

	ngOnInit() {}

	irAListaSeleccionada(id: number) {
		if (this.terminada) {
			this.router.navigateByUrl(`/tabs/tab2/agregar/${id}`)
		} else {
			this.router.navigateByUrl(`/tabs/tab1/agregar/${id}`)
		}
	}

	borrarLista(id: number) {
		this.deseosService.borrarLista(id)
	}
}
