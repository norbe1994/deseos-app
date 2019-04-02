import { Injectable } from '@angular/core'
import { Lista } from '../models/lista.model'

@Injectable({
	providedIn: 'root',
})
export class DeseosService {
	lista: Lista[] = []

	constructor() {
		console.log('servicio inicializado')
	}
}
