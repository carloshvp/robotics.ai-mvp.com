---
id: 002
title: Robots that think fast and slow
date: 2026-02-10
topics:
  - embodied-ai
  - architectures
  - vla-models
source: https://www.youtube.com/watch?v=yMGGpMyW_vw
speaker: Jim Fan
---

# Robots that think fast and slow

Borrowing Daniel Kahneman's framing from *Thinking, Fast and Slow*, Jim Fan
splits a robot's intelligence into two systems with very different tempos.
How the two communicate is still open research.

## System 2: slow, deliberate

Reasoning, planning, and writing code. This is where large models already
shine: "we have already seen very strong models that can do reasoning and
planning and also coding." In a robot, System 2 is typically a big
vision-language model or LLM running in a loop, deciding what to do next at
roughly 1 Hz.

The limitation is tempo. A model that thinks in seconds cannot close a
control loop that physics demands in milliseconds.

## System 1: fast, intuitive

Low-level motor control that never reaches conscious thought. Fan's example:
"when I'm grasping this cup of water, I don't really think about how I move
the fingertip at every millisecond." A robot's System 1 must make decisions
at something like 1,000 Hz — reflex speed — which points to compact,
fast sensorimotor policies rather than giant models.

The limitation is horizon. A reflex cannot plan a multi-step task or reason
about a novel situation.

## The open problem: how the systems talk

Fan describes two candidate architectures:

1. **Monolithic** — a single end-to-end model spanning both systems. Cleaner,
   but harder to control and to make fast enough.
2. **Cascaded** — separate models for each system, wired together.

And an unresolved interface question: do the systems communicate "through
text or through some latent variables?" Text is interpretable but lossy and
slow; latent vectors are rich but opaque. Bridging the 1 Hz / 1,000 Hz
frequency mismatch is part of the same problem.

Postscript: NVIDIA's later [GR00T N1](https://arxiv.org/abs/2503.14734)
model made this concrete — a vision-language module (System 2) paired with a
diffusion-transformer action module (System 1) — evidence that the dual-system
framing became an actual architecture.

## Strategic implication

General-purpose System 2 reasoning is rapidly becoming a commodity available
from foundation-model providers. The defensible layers for a robot maker are
System 1 — embodiment-specific, safety-critical, kHz-rate control — and the
interface contract between the two systems.

That contract is also a safety boundary: while System 2 deliberates for
seconds, System 1 must stay competent and safe on its own. Designing that
handshake (skill APIs, latent commands, interruption semantics) is product
work, not just research.

## Keep this

System 2 **sets the goal**. System 1 **does the touching**. The handshake
between them is **still research**.
