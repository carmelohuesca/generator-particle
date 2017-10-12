/// <reference path='../typings/index.d.ts' />

import { <%=name%> } from '../src/index';

describe('<%=name%> - <%=description%>', () => {

/*<%=description%>*/

	let instance: <%=name%>;
	const IDENTIFIER: string = 'indice';
	const NAME: string = 'nombre';
	const LABEL: string = 'etiqueta';
	const VISIBLE: boolean = true;

	beforeEach(() => {
		instance = new <%=name%>();
	});

	describe('id', () => {
		it('tiene la propiedad "id"', () => {
			instance.id = IDENTIFIER;
			expect(instance.id).toBeDefined();
			expect(instance.id).toBe(IDENTIFIER);
		});
	});

	describe('name', () => {
		it('tiene la propiedad "name"', () => {
			instance.name = NAME;
			expect(instance.name).toBeDefined();
			expect(instance.name).toBe(NAME);
		});
	});

	describe('label', () => {
		it('tiene la propiedad "label"', () => {
			instance.label = LABEL;
			expect(instance.label).toBeDefined();
			expect(instance.label).toBe(LABEL);
		});
	});

	describe('visible', () => {
		it('tiene la propiedad "visible"', () => {
			instance.visible = VISIBLE;
			expect(instance.visible).toBeDefined();
			expect(instance.visible).toBeTruthy();
			instance.visible = !VISIBLE;
			expect(instance.visible).toBeFalsy();
		});

		it('el método show() hace que el componente sea visible', () => {
			instance.show();
			expect(instance.visible).toBeTruthy();
		});

		it('el método hide() hace que el componente sea invisible', () => {
			instance.hide();
			expect(instance.visible).toBeFalsy();
		});

		it('el método toggle() hace que si el componente es visible, se oculte', () => {
			instance.visible = true;
			instance.toggle();
			expect(instance.visible).toBeFalsy();
		});

		it('el método toggle() hace que si el componente está oculto, sea visible', () => {
			instance.visible = false;
			instance.toggle();
			expect(instance.visible).toBeTruthy();
		});

	});

});


/*
// usar los expect siguientes:
expect(x).toEqual(y); // verifica si ambos valores son iguales.
expect(x).toBe(y); // verifica si ambos objetos son iguales.
expect(x).toMatch(pattern); // verifica si el valor pertenece al patrón establecido.
expect(x).toBeDefined()(); // verifica si el valor está definido.
expect(x).toBeUndefined(); // verifica si el valor es indefinido.
expect(x).toBeNull(); // verifica si el valor es nulo.
expect(x).toBeTruthy(); // verifica si el valor es verdadero.
expect(x).toBeFalsy(); // verifica si el valor es falso.
expect(x).toContain(y); // verifica si el valor actual contiene el esperado.
expect(x).toBeLessThan(y); // verifica si el valor actual es menor que el esperado.
expect(x).toBeGreaterThan(y); // verifica si el valor actual es mayor que el esperado.
 */
