---
id: 001
title: Three fuels for embodied intelligence
date: 2026-06-12
topics:
  - embodied-ai
  - training-data
  - simulation
source: https://www.youtube.com/watch?v=yMGGpMyW_vw
speaker: Jim Fan
---

# Three fuels for embodied intelligence

Robots do not get an internet of actions. They must borrow common sense from
human data, rehearse inside synthetic worlds, and pay for experience in
physical reality.

Jim Fan describes three complementary sources of training data for robotics:

## 1. Web data: breadth

Videos, images, text, and instructional content expose a model to enormous
variety. They can teach object concepts, human activities, affordances,
language grounding, and common-sense expectations about how the world behaves.

The limitation is action grounding. A video shows what motion looks like, but
does not include the robot joint positions, torques, forces, or motor commands
that caused it. Web data is therefore strongest as a source of priors, not as a
complete control curriculum.

## 2. Simulation: scalable practice

Simulation provides both actions and their consequences. A policy can try,
fail, reset, and repeat across thousands of parallel environments, often faster
than real time. This makes simulation especially useful for reinforcement
learning, rare-event generation, and systematic variation.

The limitation is the sim-to-real gap. Contact physics, friction, latency,
sensor noise, visual appearance, and environmental diversity can all differ
from the physical world. Domain randomization helps by exposing the policy to
many simulated variations, but simulation remains an approximation.

## 3. Real-robot data: physical truth

Teleoperation and human demonstrations capture synchronized observations,
robot state, actions, contact, timing, and outcomes on the actual hardware.
They are highly valuable for imitation learning, calibration, and correcting
the assumptions made by simulation.

The limitation is cost. Every trajectory consumes operator time and robot time.
Collection also requires resets, maintenance, safety procedures, quality
control, and management of physical wear.

## Synthesis: the moat is the mixing strategy

No source wins on every axis:

| Source | Breadth | Action signal | Physical fidelity | Marginal cost |
| --- | --- | --- | --- | --- |
| Web | High | Low or inferred | Indirect | Low |
| Simulation | Designed | Exact | Approximate | Low |
| Real robot | Limited | Exact | Highest | High |

A productive data flywheel could:

1. Pretrain broad visual, language, and common-sense priors on web data.
2. Generate action-rich practice and failures in simulation.
3. Ground and calibrate the policy with real demonstrations.
4. Deploy, identify failures, and turn them into the next simulation scenarios
   or targeted teleoperation tasks.

## The NEURA lens

A hands-on training approach such as teleoperation can produce high-fidelity,
task-relevant demonstrations without a sim-to-real gap. Its constraint is
economics: every demonstration consumes human and hardware time.

That makes data operations strategic. The goal is not only to collect more
demonstrations, but to make each demonstration compound through reuse,
targeting of informative edge cases, automatic quality checks, and combination
with simulation and pretrained visual-language representations.

## Keep this

Web data supplies **common sense**. Simulation supplies **practice**. Real
robots supply **ground truth**.
