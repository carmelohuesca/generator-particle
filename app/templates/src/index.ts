export interface Init {
	init(): void;
}

export class <%=name%> implements Init {

	/**
	* Private property _id
	* @member {string} <%=name%>#id
	*/
	private _id: string;
	/**
	* Private property _name
	* @member {string} <%=name%>#name
	*/
	private _name ?: string;
	/**
	* Private property _label
	* @member {string} <%=name%>#label
	*/
	private _label ?: string;
	/**
	* Private property _visible
	* @member {string} <%=name%>#visible
	*/
	private _visible ?: boolean;

/**
 * @class <%=name%>
 * @version <%=version%>
 * @constructor
 * @classdesc <%=description%>
 */
	constructor() {
		this.init();
	}

	/**
	 * @method <%=name%>#init
	 */
	init() {
		this.fireEvent(<%=name %>.COMPLETE);
	}

	/**
	 * @method <%=name%>#identifier
	 * @return {string} identifier identifier
	 */
	get id(): string {
		return this._id;
	}

	/**
	 * @method <%=name%>#id
	 * @param {string} identifier identifier
	 */
	set id(identifier: string) {
		this._id = identifier;
	}

	/**
	 * @method <%=name%>#name
	 * @return {string} name
	 */
	get name(): string {
		return this._name;
	}

	/**
	 * @method <%=name%>#name
	 * @param {string} name name
	 */
	set name(name: string) {
		this._name = name;
	}

	/**
	 * @method <%=name%>#label
	 * @return {string} label
	 */
	get label(): string {
		return this._label;
	}

	/**
	 * @method <%=name%>#label
	 * @param {string} componentLabel Label
	 */
	set label(componentLabel: string) {
		this._label = componentLabel;
	}

	/**
	 * @method <%=name%>#visible
	 * @return {boolean} visibility visibility
	 */
	get visible(): boolean {
		return this._visible;
	}

	/**
	 * @method <%=name%>#visible
	 * @param {boolean} visibility visibility
	 */
	set visible(visibility: boolean) {
		this._visible = visibility;
	}

	/**
	 * @method <%=name%>#show
	 */
	show(): void {
		this.visible = true;
	}

	/**
	 * @method <%=name%>#hide
	 */
	hide(): void {
		this.isHidden = true;
	}

	/**
	 * @method <%=name%>#toggle
	 */
	toggle(): void {
		this.visible = !this.visible;
	}

	/* EVENTS */

	/**
	* Event Complete
	* @event <%=name%>.events:COMPLETE
	*/
	public static COMPLETE: string = 'COMPLETE';

	/**
	* Event Focus
	* @event <%=name%>.events:FOCUS
	*/
	public static FOCUS: string = 'FOCUS';

	/**
	* Event Click
	* @event <%=name%>.events:CLICK
	*/
	public static CLICK: string = 'CLICK';

	/**
	* Event Hover
	* @event <%=name%>.events:HOVER
	*/
	public static HOVER: string = 'HOVER';


	/**
	* Event Events
	* @event <%=name%>.events:EVENTS
	*/
	public static EVENTS: any = {
		COMPLETE: <%=name%>.COMPLETE,
		FOCUS: <%=name%>.FOCUS,
		CLICK: <%=name%>.CLICK,
		HOVER: <%=name%>.HOVER
	};

	/**
	* @method <%=name%>#fireEvent
	* @fires <%=name%>#EVENTS
	*/
	public fireEvent(event: string): void {
		// doSomething
	}

}
