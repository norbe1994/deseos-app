import { Pipe, PipeTransform } from '@angular/core'
import { Lista } from '../models/lista.model'

@Pipe({
	name: 'filtroLista',
	pure: false,
})
export class FiltroListaPipe implements PipeTransform {
	transform(listas: Lista[], completada: boolean = true): Lista[] {
		return listas.filter(lista => lista.terminada === completada)
	}
}
