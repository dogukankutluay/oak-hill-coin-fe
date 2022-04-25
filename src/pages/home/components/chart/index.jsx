import React from 'react';
import './chart.scss';
export default function TokenomicChart() {
  return (
    <div id="wrap" class="animated">
      <svg class="chart" viewbox="0 0 450 400">
        <circle class="outline" r="100" cx="210" cy="200" />

        <circle class="pie-1" r="100" cx="210" cy="200" />
        <line class="line-1" x1="165" y1="100" x2="144" y2="65" />
        <text class="text-1 text-head" x="110" y="40">
          30%
        </text>
        <text class="text-1 text-lbl" x="115" y="60">
          Public Sale
        </text>

        <circle class="pie-2" r="100" cx="210" cy="200" />
        <line class="line-2" x1="105" y1="230" x2="65" y2="240" />
        <text class="text-2 text-head" x="10" y="255">
          20%
        </text>
        <text class="text-2 text-lbl" x="10" y="275">
          Pre Sale
        </text>

        <circle class="pie-3" r="100" cx="210" cy="200" />
        <line class="line-3" x1="165" y1="300" x2="150" y2="338" />
        <text class="text-3 text-head" x="115" y="365">
          15%
        </text>
        <text class="text-3 text-lbl" x="105" y="385">
          Team & Founders
        </text>

        <circle class="pie-4" r="100" cx="210" cy="200" />
        <line class="line-4" x1="250" y1="300" x2="270" y2="340" />
        <text class="text-4 text-head" x="255" y="365">
          12%
        </text>
        <text class="text-4 text-lbl" x="245" y="385">
          Partnerships
        </text>

        <circle class="pie-5" r="100" cx="210" cy="200" />
        <line class="line-5" x1="310" y1="240" x2="350" y2="255" />
        <text class="text-5 text-head" x="350" y="265">
          10%
        </text>
        <text class="text-5 text-lbl" x="335" y="285">
          Private Sale
        </text>

        <circle class="pie-6" r="100" cx="210" cy="200" />
        <line class="line-6" x1="320" y1="180" x2="355" y2="170" />
        <text class="text-6 text-head" x="360" y="175">
          5%
        </text>
        <text class="text-6 text-lbl" x="350" y="195">
          Advisors
        </text>

        <circle class="pie-7" r="100" cx="210" cy="200" />
        <line class="line-7" x1="300" y1="140" x2="335" y2="115" />
        <text class="text-7 text-head" x="340" y="115">
          5%
        </text>
        <text class="text-7 text-lbl" x="335" y="135">
          Platform Dev.
        </text>

        <circle class="pie-8" r="100" cx="210" cy="200" />
        <line class="line-8" x1="289" y1="122" x2="315" y2="95" />
        <text class="text-8 text-head" x="320" y="45">
          3%
        </text>
        <text class="text-8 text-lbl" x="290" y="65">
          IT Development
        </text>

        <circle
          id="helper"
          style={{ display: 'none' }}
          r="110"
          cy="200"
          cx="205"
          stroke-width="1"
          stroke="blue"
          fill="none"
        />
        <circle
          id="helper"
          style={{ display: 'none' }}
          r="150"
          cy="200"
          cx="205"
          stroke-width="1"
          stroke="blue"
          fill="none"
        />
      </svg>
    </div>
  );
}
