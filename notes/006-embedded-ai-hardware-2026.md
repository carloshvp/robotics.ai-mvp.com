---
id: 006
title: Embedded AI hardware, 2026
date: 2026-06-12
topics:
  - hardware
  - edge-compute
  - embodied-ai
source: Field survey — vendor specs and street prices, June 2026
---

# Embedded AI hardware, 2026

Twelve current platforms that can be a robot's onboard brain, scored on the
four axes that matter: AI compute, memory, power, and price. Star ratings are
normalized within this set — five stars is best in class on that axis
(fastest, biggest, most frugal, cheapest).

## The table

| Platform | Release | AI compute | Memory | Power | Price |
| --- | ---: | --- | --- | --- | --- |
| Jetson AGX Thor | 2025 | ★★★★★ 2070 FP4 TFLOPS | ★★★★★ 128 GB | ★☆☆☆☆ 40 to 130 W | ★☆☆☆☆ $3,499, or ≈€4,190 EU |
| Jetson AGX Orin | 2022 | ★★★★☆ 275 TOPS | ★★★★★ 64 GB dev kit | ★★☆☆☆ 15 to 60 W | ★★☆☆☆ $1,999 launch price |
| Jetson Orin NX 16 GB Super | 2023, Super 2025 | ★★★★☆ 157 TOPS | ★★★☆☆ 16 GB | ★★★☆☆ 10 to 40 W | ★★★☆☆ ≈€900 to €1,050 kit or bundle |
| Jetson Orin Nano Super | 2024 refresh, 2023 HW | ★★★☆☆ 67 TOPS | ★★☆☆☆ 8 GB | ★★★★☆ 7 to 25 W | ★★★★☆ $249 official |
| Raspberry Pi 5 barebone 16 GB | 2023, 16 GB in 2025 | ★☆☆☆☆ No AI accelerator | ★★★☆☆ 16 GB | ★★★★★ 2 to 10 W board, 27 W PSU budget | ★★★★☆ $305 current official 16 GB price |
| Raspberry Pi 5 plus AI HAT+ 2 | 2026 | ★★☆☆☆ 40 INT4 TOPS | ★★★☆☆ 16 GB Pi plus 8 GB AI HAT | ★★★★☆ roughly 5 to 15 W system class | ★★★★☆ $130 HAT, Pi extra |
| Google Coral USB Edge TPU | 2019 | ★☆☆☆☆ 4 INT8 TOPS | ★☆☆☆☆ No usable model RAM class | ★★★★★ ≈2 W | ★★★★★ ≈€90 to €130 |
| Hailo 8 M.2 | 2019 | ★★☆☆☆ 26 TOPS | ★☆☆☆☆ On chip memory, no external DRAM | ★★★★★ 2.5 W typical | ★★★★★ ≈€165 to €200 |
| Hailo 10H / AI HAT+ 2 class | 2024 chip, 2026 Pi product | ★★☆☆☆ 40 TOPS | ★★☆☆☆ 8 GB on Pi HAT+ 2 | ★★★★★ under 5 W chip class | ★★★★★ $130 via Pi AI HAT+ 2 |
| Qualcomm RB3 Gen 2 Core Kit | 2024 | ★★☆☆☆ 12 TOPS | ★★☆☆☆ 6 GB kit class | ★★★★☆ roughly 7 to 12 W class | ★★★★☆ $399 core kit |
| Arduino VENTUNO Q | 2026 | ★★☆☆☆ 40 TOPS | ★★★☆☆ 16 GB | ★★★☆☆ unknown, assume 10 to 25 W class | ★★★★☆ just under $300 expected |
| RK3588 SBC class | 2022 to 2025 board dependent | ★☆☆☆☆ 6 TOPS | ★★★★☆ up to 32 GB | ★★★★☆ roughly 5 to 15 W board class | ★★★★☆ ≈€220 to €500 |

On the website this table is interactive: sortable by any column and
filterable by platform family and free text.

## Reading the table

(My synthesis.) Four tiers emerge:

1. **Flagship Jetson (Thor, AGX Orin).** The only tier with the memory to
   host VLA / foundation-model-class workloads onboard — Thor's 128 GB is
   sized for exactly that. You pay in watts and euros.
2. **Mid Jetson (Orin NX, Orin Nano Super).** The System 1 sweet spot for
   many robots: enough TOPS for perception plus compact policies at a power
   budget a mobile platform can carry.
3. **Accelerator + host (Hailo, Coral, AI HAT).** Fixed-function perception
   at single-digit watts. Memory is the ceiling: no room for large models.
4. **Kits & generalist SBCs (Pi, RK3588, RB3, Arduino).** Prototyping and
   cost-down. CPU-bound or small-NPU; fine for development, rarely for the
   final reflexes.

The pattern: **memory, not TOPS, is the gating axis** for running
foundation-model-class intelligence onboard, and **power** separates
battery-powered robots from tethered cells.

## The NEURA lens

(My synthesis.) The silicon choice follows the System 1 / System 2 split from
[[002-thinking-fast-and-slow-for-robots|note 002]]: System 1 must run onboard
in real time — pick the silicon for the reflexes — while System 2 can burst
to off-board or cloud compute. Fleet economics push the same way: onboard
compute multiplies with every unit shipped, while shared System 2 amortizes
across the fleet.

## Keep this

TOPS are **cheap**. **Memory** and **watts** decide what runs onboard.
