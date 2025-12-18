import { dispatch } from "js/registry";


/**
 * Handlers for different components and other use cases.
 * If you add a new component, remember to
 * update the import here.
 */
import "handlers/example"


/**
 * Register the global click event listener
 *
 * All click-based behaviors (e.g. dialogs, menus, toggles)
 * are dispatched through the shared behavior registry
 */
document.addEventListener("click", dispatch);