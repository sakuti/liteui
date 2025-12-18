import { register } from "registry";

/**
 * Here is an example of what you can do with handlers
 *
 * @param trigger - Element that the event was inherited from
 * @param event - The originating click event
 */
function exampleHandlerFunction(trigger: Element, event: Event): void {
    const seconds: number = Math.round(event.timeStamp / 1000)
    alert(`You clicked handler_example button ${seconds} second(s) after page loaded`)
}


/**
 * Register dialog behaviors.
 *
 * These handlers are evaluated via global event delegation
 * through the shared behavior registry.
 */
register("button[handler_example]", exampleHandlerFunction);