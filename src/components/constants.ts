export const positions = ['top', 'bottom', 'left', 'right'] as const;
export const shapes = ['circle', 'square'] as const;
export const sizes = ['lg', 'md', 'sm', 'xs'] as const;
export const statuses = ['info', 'success', 'warning', 'error'] as const;
export const brandColors = ['primary', 'secondary', 'accent'] as const;
export const colors = [...brandColors, 'ghost', ...statuses] as const;
export const bgColors = ['base-100', 'base-200', 'base-300', 'neutral'] as const;
