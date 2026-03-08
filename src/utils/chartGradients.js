/**
 * Chart.js gradient utilities for consistent gradient styling across charts.
 */

/**
 * Creates a linear gradient for Chart.js charts.
 * @param {CanvasRenderingContext2D} ctx - Canvas context
 * @param {Object} chartArea - Chart area object with top, bottom, left, right
 * @param {Array} colorStops - Array of {offset, color} objects
 * @returns {CanvasGradient|null} - Linear gradient or null if chartArea not ready
 */
export const createGradient = (ctx, chartArea, colorStops) => {
  if (!chartArea) return null;
  
  const gradient = ctx.createLinearGradient(
    0,
    chartArea.top,
    0,
    chartArea.bottom
  );
  
  colorStops.forEach(({ offset, color }) => {
    gradient.addColorStop(offset, color);
  });
  
  return gradient;
};

/**
 * Predefined gradient presets for common chart styles.
 */
export const gradientPresets = {
  blue: [
    { offset: 0, color: '#489BDC' },
    { offset: 1, color: '#DFEFFB' }
  ],
  pink: [
    { offset: 0, color: '#F97BAB' },
    { offset: 1, color: '#FFEDF3' }
  ],
  lightBlue: [
    { offset: 0, color: 'rgba(59, 130, 246, 0.2)' },
    { offset: 1, color: 'rgba(59, 130, 246, 0.05)' }
  ],
  green: [
    { offset: 0, color: '#10B981' },
    { offset: 1, color: '#D1FAE5' }
  ],
  orange: [
    { offset: 0, color: '#F59E0B' },
    { offset: 1, color: '#FEF3C7' }
  ]
};

/**
 * Helper function to create a gradient callback for Chart.js datasets.
 * @param {Array} colorStops - Array of {offset, color} objects or preset name
 * @returns {Function} - Callback function for Chart.js backgroundColor/borderColor
 * 
 * @example
 * backgroundColor: createGradientCallback(gradientPresets.blue)
 * backgroundColor: createGradientCallback('blue')
 */
export const createGradientCallback = (colorStops) => {
  return (context) => {
    const chart = context.chart;
    const { ctx, chartArea } = chart;
    
    if (!chartArea) return null;
    
    // If colorStops is a string, use preset
    const stops = typeof colorStops === 'string' 
      ? gradientPresets[colorStops] 
      : colorStops;
    
    return createGradient(ctx, chartArea, stops);
  };
};
