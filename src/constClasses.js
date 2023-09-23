/**
 * GUIA DE USO DE CONSTANTES DE ESTILO
 * 
 * Este archivo contiene constantes que representan clases de TailwindCSS. 
 * Estas constantes están diseñadas para ser utilizadas directamente en el atributo 'class' de los elementos.
 * 
 * Para usar una constante, simplemente impórtala y úsala dentro de tu componente o archivo de estilo.
 * Ejemplo:
 * import { TEXT_PRIMARY, BG_PRIMARY } from './rutaDelArchivo';
 * <div class={TEXT_PRIMARY + ' ' + BG_PRIMARY}>Mi contenido</div>
 * 
 * LISTA DE CONSTANTES DISPONIBLES:
 * 
 * COLORES:
 * - TEXT_PRIMARY: Color principal del texto.
 * - TEXT_SECONDARY: Color secundario del texto.
 * - BG_PRIMARY: Color principal de fondo.
 * - BG_SECONDARY: Color secundario de fondo.
 * 
 * DEGRADADOS:
 * - PRIMARY_GRADIENT: Degradado principal.
 * - SECONDARY_GRADIENT: Degradado secundario.
 * (Nota: Los degradados tienen variantes START, MID, END y HOVER)
 * 
 * FUENTES:
 * - TITLE_FONT: Fuente para títulos.
 * - SUBTITLE_FONT: Fuente para subtítulos.
 * - BODY_FONT: Fuente para cuerpo de texto.
 * - BUTTON_FONT: Fuente para botones.
 * 
 * SOMBRAS:
 * - BLOCK_SHADOW: Sombra para bloques.
 * - ELEMENT_SHADOW: Sombra para elementos individuales.
 * 
 * MÁRGENES Y PADDINGS:
 * - INPUT_PADDING: Padding para campos de entrada.
 * (Añade más según tus necesidades)
 * 
 * RADIUS:
 * - BLOCK_RADIUS: Radio para bloques.
 * - IMAGE_RADIUS: Radio para imágenes.
 * - BUTTON_RADIUS: Radio para botones.
 * 
 * HOVERS Y FOCOS:
 * - FORM_BG_HOVER: Color de fondo al pasar el ratón sobre campos de formulario.
 * - FORM_SHADOW_FOCUS: Sombra al enfocar campos de formulario.
 * (Añade más según tus necesidades)
 * 
 * Otros estilos como transiciones, estilos de menú, modales y overlays también están definidos.
 * Consulta el archivo para obtener una lista completa.
 * 
 * ¡Gracias por usar este sistema de constantes de estilo!
 */


// Base Colors
export const TEXT_PRIMARY = "text-5e4536";
export const TEXT_SECONDARY = "text-ffffff";
export const BG_PRIMARY = "bg-e38a20";
export const BG_SECONDARY = "bg-6a4d34";

// Background Colors
export const BG_MAIN = "bg-fffffe";
export const BG_PRIMARY_BLOCK = "bg-ffecd9";
export const BG_SECONDARY_BLOCK = "bg-6a4d34";

// Gradients
export const PRIMARY_GRADIENT = "bg-gradient-to-r";
export const PRIMARY_GRADIENT_START = "from-e38a20";
export const PRIMARY_GRADIENT_MID = "via-eb870f";
export const PRIMARY_GRADIENT_END = "to-eb870f";
export const PRIMARY_GRADIENT_HOVER_START = "hover:from-eb870f";
export const PRIMARY_GRADIENT_HOVER_END = "hover:to-e38a20";

export const SECONDARY_GRADIENT = "bg-gradient-to-r";
export const SECONDARY_GRADIENT_START = "from-6a4d34";
export const SECONDARY_GRADIENT_MID = "via-5e4536";
export const SECONDARY_GRADIENT_END = "to-5e4536";
export const SECONDARY_GRADIENT_HOVER_START = "hover:from-5e4536";
export const SECONDARY_GRADIENT_HOVER_END = "hover:to-6a4d34";

// Fonts & Typography
export const TITLE_FONT = "font-serif"; // Tailwind doesn't have a direct class for Roboto Serif, so using the generic serif class
export const SUBTITLE_FONT = "font-sans"; // Lato is a sans-serif font
export const BODY_FONT = "font-sans";
export const BUTTON_FONT = "font-sans";

// Borders & Corners
export const BORDER = "border border-gray-100"; // Approximated to the nearest Tailwind color
export const BLOCK_RADIUS = "rounded-md";
export const IMAGE_RADIUS = "rounded-sm";
export const BUTTON_RADIUS = "rounded-full";

// Shadows
export const BLOCK_SHADOW = "shadow-md";
export const ELEMENT_SHADOW = "shadow-sm";

// Form Styles
export const FORM_BORDER = "border-6a4d34"; // Using the secondary color for the border
export const FORM_BG = "bg-white";
export const FORM_BG_HOVER = "hover:bg-f9f9f9";
export const FORM_BG_FOCUS = "focus:bg-white";
export const FORM_SHADOW = "focus:shadow-sm";
export const FORM_SHADOW_FOCUS = "focus:ring-3 focus:ring-e38a20"; // Using the primary color for the focus ring

// Menu Styles
export const MENU_BG = "bg-e38a20";
export const MENU_TEXT = "text-white";
export const MENU_TEXT_HOVER = "hover:text-6a4d34";
export const MENU_PADDING = "p-2";
export const MENU_ITEM_SPACING = "space-y-2";

// Transitions & Animations
export const TRANSITION_SPEED = "transition duration-300";

// Modals & Overlays
export const MODAL_BG = "bg-black bg-opacity-50";
export const MODAL_CONTENT_BG = "bg-white";
export const MODAL_CONTENT_RADIUS = "rounded-md";
export const MODAL_CONTENT_SHADOW = "shadow-md";

// Spacing & Layout
export const INPUT_PADDING = "px-4 py-2";