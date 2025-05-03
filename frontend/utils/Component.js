/**
 * Base Component class for all UI components
 */
export default class Component {
  /**
   * Create a new component
   * @param {HTMLElement} container - Container element
   * @param {Object} props - Component properties
   */
  constructor(container, props = {}) {
    this.container = container;
    this.props = props;
    this.element = null;
  }

  /**
   * Create the component's DOM element
   * @returns {HTMLElement} The created element
   */
  createElement() {
    throw new Error('Components must implement createElement method');
  }

  /**
   * Render the component to its container
   */
  render() {
    this.element = this.createElement();
    if (this.container) {
      this.container.appendChild(this.element);
    }
    this.bindEvents();
    return this.element;
  }

  /**
   * Bind event listeners
   */
  bindEvents() {
    // To be implemented by subclasses
  }

  /**
   * Update the component with new props
   * @param {Object} newProps - New properties
   */
  update(newProps = {}) {
    this.props = { ...this.props, ...newProps };
    this.destroy();
    this.render();
  }

  /**
   * Remove the component from the DOM
   */
  destroy() {
    if (this.element && this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }
  }
} 