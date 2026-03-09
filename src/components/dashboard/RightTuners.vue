<template>
  <div>
    <div class="bg-[#4499E3] rounded-3xl p-4 space-y-2">
      <!-- ---------- Forecast & Budget Tuner ---------- -->
      <div class="bg-white rounded-3xl p-4 shadow-md">
        <h3 class="text-sm font-semibold text-gray-800">
          Forecast & Budget Tuner
        </h3>

        <p class="text-xs text-gray-600 mt-0.5">
          Adjust revenue, COS, and OPEX assumptions to see profit scenarios
          live.
        </p>

        <div class="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
          <div>
            <label class="text-xs text-gray-600 block mb-1"
              >Revenue Growth:</label
            >
            <input type="range" min="0" max="100" class="tuner-slider w-full" />
          </div>

          <div>
            <label class="text-xs text-gray-600 block mb-1"
              >COS % of Revenue</label
            >
            <input type="range" min="0" max="100" class="tuner-slider w-full" />
          </div>

          <div>
            <label class="text-xs text-gray-600 block mb-1">Seasonality:</label>
            <input type="range" min="0" max="100" class="tuner-slider w-full" />
          </div>

          <div>
            <label class="text-xs text-gray-600 block mb-1"
              >Pipeline Confidence</label
            >
            <input type="range" min="0" max="100" class="tuner-slider w-full" />
          </div>
        </div>

        <!-- Output Snapshot -->
        <div class="mt-3 bg-[#4499E3] rounded-2xl text-white p-2">
          <table class="w-full text-xs tuner-table">
            <thead>
              <tr class="text-left text-white/90">
                <th class="pb-2 font-bold">Output snapshot</th>
                <th class="pb-2 font-bold">Current</th>
                <th class="pb-2 font-bold">Adjusted</th>
                <th class="pb-2 font-bold">Changes</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Gross Profit</td>
                <td>1,250,000</td>
                <td>1,250,000</td>
                <td>-</td>
              </tr>

              <tr>
                <td>Net Profit</td>
                <td>650,000</td>
                <td>650,000</td>
                <td>-</td>
              </tr>

              <tr>
                <td>OpEx</td>
                <td>600,000</td>
                <td>600,000</td>
                <td>-</td>
              </tr>

              <tr>
                <td>Gross Margin</td>
                <td>52%</td>
                <td>52%</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p class="text-xs font-semibold text-blue-600 mt-3 text-center">
          Ledgers AI
        </p>

        <p class="text-xs text-gray-600 mt-2 leading-relaxed">
          These adjustments show how changes in revenue, costs, and spending can
          influence your profit. Raising revenue or lowering expenses generally
          improves your margins and supports healthier monthly results.
        </p>
      </div>

      <!-- ---------- Generate Button ---------- -->
      <div class="relative">
        <div class="absolute left-1/2 -translate-x-1/2 -top-5 z-20">
          <button
            type="button"
            class="px-12 py-3 rounded-2xl bg-white text-gray-700 text-sm font-semibold flex items-center justify-center gap-2 shadow-xl hover:bg-gray-50 transition-colors"
            style="box-shadow: 0 6px 20px rgba(56, 189, 248, 0.35)"
          >
            Generate
            <span class="text-blue-500 text-base">✨</span>
          </button>
        </div>
      </div>

      <!-- ---------- Cash Flow Scenario Tuner ---------- -->
      <div class="bg-white rounded-3xl p-4 shadow-md">
        <h3 class="text-sm font-semibold text-gray-800">
          Cash Flow Scenario Tuner
        </h3>

        <p class="text-xs text-gray-600 mt-1">
          Adjust inflow, outflow, and operational levers to see instant impact
          on runway and cash position.
        </p>

        <div class="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-2">
          <div>
            <label class="text-xs text-gray-600 block mb-1"
              >Inflow Sensitivity</label
            >
            <input type="range" min="0" max="100" class="tuner-slider w-full" />
          </div>

          <div>
            <label class="text-xs text-gray-600 block mb-1"
              >OpEx Tightening</label
            >
            <input type="range" min="0" max="100" class="tuner-slider w-full" />
          </div>

          <div>
            <label class="text-xs text-gray-600 block mb-1"
              >Payment Terms</label
            >
            <input type="range" min="0" max="100" class="tuner-slider w-full" />
          </div>
        </div>

        <!-- Output Snapshot -->
        <div class="mt-3 bg-[#4499E3] rounded-2xl text-white p-3">
          <table class="w-full text-xs tuner-table">
            <thead>
              <tr class="text-left text-white/90">
                <th class="pb-2 font-bold">Output snapshot</th>
                <th class="pb-2 font-bold">Current</th>
                <th class="pb-2 font-bold">Adjusted</th>
                <th class="pb-2 font-bold">Changes</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Inflow</td>
                <td>1,420,000</td>
                <td>1,420,000</td>
                <td>-</td>
              </tr>

              <tr>
                <td>Outflow</td>
                <td>540,000</td>
                <td>540,000</td>
                <td>-</td>
              </tr>

              <tr>
                <td>Net Cash Flow</td>
                <td>880,000</td>
                <td>880,000</td>
                <td>-</td>
              </tr>

              <tr>
                <td>Cash Balance</td>
                <td>58%</td>
                <td>58%</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p class="text-xs font-semibold text-blue-600 mt-3">Ledgers AI</p>

        <p class="text-xs text-gray-600 mt-2 leading-relaxed">
          Adjusting inflow, outflow, and payment timing helps you see how your
          cash balance may shift month to month. Higher inflows or lighter
          spending usually support a stronger cash position.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.tuner-slider {
  -webkit-appearance: none;
  appearance: none;
  height: 6px;
  border-radius: 9999px;
  background: linear-gradient(to right, #3b82f6 50%, #e5e7eb 50%);
  cursor: pointer;
  outline: none;
}

.tuner-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 40px;
  height: 16px;
  border-radius: 8px;
  background: white;
  cursor: grab;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.2s;
}

.tuner-slider::-webkit-slider-thumb:hover {
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
}

.tuner-slider::-webkit-slider-thumb:active {
  cursor: grabbing;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.tuner-slider::-moz-range-thumb {
  width: 40px;
  height: 16px;
  background: white;
  border-radius: 8px;
  cursor: grab;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.2s;
}

.tuner-slider::-moz-range-thumb:active {
  cursor: grabbing;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

@media (hover: none) and (pointer: coarse) {
  .tuner-slider::-webkit-slider-thumb {
    width: 48px;
    height: 20px;
  }

  .tuner-slider::-moz-range-thumb {
    width: 48px;
    height: 20px;
  }
}

.tuner-table td {
  @apply py-2 text-black font-medium;
}

.tuner-table td:first-child {
  @apply pr-3;
}
</style>