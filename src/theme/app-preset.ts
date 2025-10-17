import { definePreset } from "@primeuix/themes";
import Material from "@primeuix/themes/material";

export const AppPreset = definePreset(Material, {
  semantic: {
    // Colores primarios: Rojo profesional para autoridad y seriedad
    primary: {
      50: "#fef2f2", // Rojo muy claro
      100: "#fee2e2", // Rojo claro
      200: "#fecaca", // Rojo medio claro
      300: "#fca5a5", // Rojo medio
      400: "#f87171", // Rojo
      500: "#ef4444", // Rojo principal
      600: "#dc2626", // Rojo oscuro
      700: "#b91c1c", // Rojo muy oscuro
      800: "#991b1b", // Rojo profundo
      900: "#7f1d1d", // Rojo muy profundo
      950: "#450a0a", // Rojo marrón profundo
    },
    // Colores secundarios: Grises elegantes para neutralidad
    secondary: {
      50: "#f8fafc", // Gris muy claro
      100: "#f1f5f9", // Gris claro
      200: "#e2e8f0", // Gris medio claro
      300: "#cbd5e1", // Gris medio
      400: "#94a3b8", // Gris
      500: "#64748b", // Gris principal
      600: "#475569", // Gris oscuro
      700: "#334155", // Gris muy oscuro
      800: "#1e293b", // Gris profundo
      900: "#0f172a", // Gris muy profundo
      950: "#020617", // Negro azulado
    },
    // Colores de acento: Dorado elegante para elementos importantes
    accent: {
      50: "#fffbeb", // Dorado muy claro
      100: "#fef3c7", // Dorado claro
      200: "#fde68a", // Dorado medio claro
      300: "#fcd34d", // Dorado medio
      400: "#fbbf24", // Dorado
      500: "#f59e0b", // Dorado principal
      600: "#d97706", // Dorado oscuro
      700: "#b45309", // Dorado muy oscuro
      800: "#92400e", // Dorado profundo
      900: "#78350f", // Dorado muy profundo
      950: "#451a03", // Marrón dorado
    },
    colorScheme: {
      light: {
        primary: {
          color: "#7f1d1d", // Rojo muy profundo
          inverseColor: "#ffffff", // Blanco puro
          hoverColor: "#991b1b", // Rojo profundo
          activeColor: "#b91c1c", // Rojo muy oscuro
        },
        highlight: {
          background: "#7f1d1d", // Rojo muy profundo
          focusBackground: "#b91c1c", // Rojo muy oscuro
          color: "#ffffff", // Blanco puro
          focusColor: "#ffffff", // Blanco puro
        },
        surface: {
          0: "#ffffff", // Blanco puro
          50: "#f8fafc", // Gris muy claro
          100: "#f1f5f9", // Gris claro
          200: "#e2e8f0", // Gris medio claro
          300: "#cbd5e1", // Gris medio
          400: "#94a3b8", // Gris
          500: "#64748b", // Gris principal
          600: "#475569", // Gris oscuro
          700: "#334155", // Gris muy oscuro
          800: "#1e293b", // Gris profundo
          900: "#0f172a", // Gris muy profundo
          950: "#020617", // Negro azulado
        },
        content: {
          color: "#0f172a", // Gris muy profundo para texto principal
          secondaryColor: "#475569", // Gris oscuro para texto secundario
          mutedColor: "#64748b", // Gris para texto atenuado
          accentColor: "#f59e0b", // Dorado para acentos
        },
      },
      dark: {
        primary: {
          color: "#fef2f2", // Rojo muy claro
          inverseColor: "#7f1d1d", // Rojo muy profundo
          hoverColor: "#fee2e2", // Rojo claro
          activeColor: "#fecaca", // Rojo medio claro
        },
        highlight: {
          background: "rgba(127, 29, 29, 0.16)", // Rojo muy profundo con transparencia
          focusBackground: "rgba(127, 29, 29, 0.24)", // Rojo muy profundo con más transparencia
          color: "rgba(255,255,255,.87)", // Blanco con transparencia
          focusColor: "rgba(255,255,255,.87)", // Blanco con transparencia
        },
        surface: {
          0: "#0f172a", // Gris muy profundo
          50: "#1e293b", // Gris profundo
          100: "#334155", // Gris muy oscuro
          200: "#475569", // Gris oscuro
          300: "#64748b", // Gris principal
          400: "#94a3b8", // Gris
          500: "#cbd5e1", // Gris medio
          600: "#e2e8f0", // Gris medio claro
          700: "#f1f5f9", // Gris claro
          800: "#f8fafc", // Gris muy claro
          900: "#ffffff", // Blanco puro
          950: "#ffffff", // Blanco puro
        },
        content: {
          color: "#f8fafc", // Gris muy claro para texto principal
          secondaryColor: "#cbd5e1", // Gris medio para texto secundario
          mutedColor: "#94a3b8", // Gris para texto atenuado
          accentColor: "#fbbf24", // Dorado para acentos
        },
      },
    },
  },
  // Configuración de componentes específicos para estudio jurídico
  components: {
    button: {
      root: {
        borderRadius: "0.375rem", // 6px - esquinas ligeramente redondeadas
      },
    },
    inputtext: {
      colorScheme: {
        light: {
          root: {
            borderRadius: "0.375rem", // 6px - consistente con botones
          },
        },
      },
    },
    card: {
      colorScheme: {
        light: {
          root: {
            borderRadius: "0.5rem", // 8px - esquinas más redondeadas
            shadow:
              "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)", // Sombra sutil
          },
        },
      },
    },
    accordion: {
      colorScheme: {
        light: {
          panel: {
            borderWidth: "1px", // Borde sutil
          },
        },
      },
    },
  },
});
