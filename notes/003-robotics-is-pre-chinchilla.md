---
id: 003
title: Robotics is pre-Chinchilla
date: 2026-02-13
topics:
  - embodied-ai
  - scaling-laws
  - training-data
source: https://www.youtube.com/watch?v=yMGGpMyW_vw
speaker: Jim Fan
---

# Robotics is pre-Chinchilla

Language models come with a recipe: for a given compute budget, how much data
to pair with how many parameters. Embodied AI has no such curve yet, and
finding it is itself a research frontier.

## What LLMs know

Scaling laws (Kaplan et al. 2020; Hoffmann et al. 2022, the "Chinchilla"
paper, [arXiv:2203.15556](https://arxiv.org/abs/2203.15556)) made language
model training predictable: loss falls smoothly as a function of parameters,
data, and compute. Chinchilla's headline finding was that many models were
badly undertrained, and for fixed compute you should scale data and parameters
together at roughly 20 tokens per parameter. This reset how every lab sized its
training runs. Capability planning became closer to engineering than
gambling.

## What robotics doesn't know yet

Per Jim Fan: "the scaling law for embodied AI and robotics are yet to be
studied, so we're working on that."

The robotics version is harder than the language version for structural
reasons:

- **More axes.** You can scale model size, simulation hours, real-robot fleet
  hours, the number of embodiments, and the mixture across all three data
  fuels (see note 001). The trade-offs multiply.
- **No agreed unit.** There is no canonical "token of action" the way there
  is a token of text, though Fan's expectation is that once actions are
  tokenized well, transformers can compress them like any other modality.
- **Different metric.** Language scaling laws predict validation loss;
  robotics ultimately cares about task success rate, which is expensive to
  evaluate and not guaranteed to track loss.
- **Supply constraints.** Web text is effectively free at the margin;
  real-robot data is bound by wall-clock time, hardware, and operators.

## What Fan expects

The wager is that the LLM pattern repeats: "emergent property as we scale up
the data and scale up the model size." Mapping the curve, the embodied
equivalent of Chinchilla, is an explicit research goal of the field, not a
solved input to planning.

## Strategic implication

(My synthesis.) Until an embodied scaling law exists, every data-collection
budget is a hypothesis, and "how much data is enough?" has direct capex
consequences for a company whose advantage includes demonstrations.

The practical move is to make operations produce the curve: instrument data
collection so that marginal task success per additional demonstration-hour is
measured per task family and embodiment. Small pilot runs across a grid of
model sizes and data volumes de-risk large collection spends. A controlled
robot-training program is the place where those curves can be measured
systematically.

## Keep this

LLMs have a **recipe**. Robotics still has a **hypothesis**.
