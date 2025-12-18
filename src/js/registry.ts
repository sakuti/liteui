/**
 * A handler function for a registered behavior
 *
 * @param el - The element that matched the selector
 * @param event - The originating DOM event
 */
export type BehaviorHandler = (
  el: Element,
  event: Event
) => void;


/**
 * Internal representation of a registered behavior
 */
type Behavior = {
  selector: string;
  handler: BehaviorHandler;
};


/**
 * Internal registry of all registered behaviors
 */
const behaviors: Behavior[] = [];


/**
 * Register a new behavior in the global behavior registry
 *
 * @param selector - A CSS selector used to match event targets
 * @param handler - A function to execute when a match is found
 */
export function register(
  selector: string,
  handler: BehaviorHandler
): void {
  behaviors.push({ selector, handler });
}


/**
 * Dispatch an event through the behavior registry
 *
 * Iterates through all registered behaviors and invokes the handler
 * for the first selector that matches the event target

 * @param event - The DOM event to dispatch
 */
export function dispatch(event: Event): void {
  const target = event.target as Element | null;
  if (!target) return;

  for (const { selector, handler } of behaviors) {
    const matched = target.closest(selector);
    if (matched) {
      handler(matched, event);
      break;
    }
  }
}
