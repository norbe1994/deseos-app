import { Component, OnInit, Input } from '@angular/core'
import { DeseosService } from 'src/app/services/deseos.service'
import { Router } from '@angular/router'
import { AlertController } from '@ionic/angular'

@Component({
	selector: 'app-listas',
	templateUrl: './listas.component.html',
	styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
	@Input() terminada = true

	constructor(
		public deseosService: DeseosService,
		private router: Router,
		private alertController: AlertController,
	) {}

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

	async editarLista(id: number, titulo: string) {
		const alert = await this.alertController.create({
			header: 'Editar título de lista',
			inputs: [
				{
					name: 'titulo',
					type: 'text',
					value: `${titulo}`,
					placeholder: 'Título de la lista',
				},
			],
			buttons: [
				{
					text: 'Cancelar',
					role: 'cancel',
					handler: () => {
						console.log('cancelar')
					},
				},
				{
					text: 'Editar',
					handler: data => {
						if (data.titulo.length === 0) return
						this.deseosService.editarLista(id, data.titulo)
					},
				},
			],
		})
		alert.present()
	}
}
