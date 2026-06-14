---
id: 005
title: Generalist first, specialist later
date: 2026-02-21
topics:
  - foundation-models
  - generalist-robots
  - strategy
source: https://www.youtube.com/watch?v=yMGGpMyW_vw
speaker: Jim Fan
---

# Generalist first, specialist later

NLP already ran this experiment: a zoo of task-specific models lost to one
generalist. Jim Fan expects robotics to repeat the curve. That is the
premise of Project GR00T.

## Before: the specialist zoo

Pre-ChatGPT NLP shipped "different models and pipelines for different
applications, like translation and coding and doing math and doing creative
writing... completely different training pipelines." Each silo had its own
architecture, data, and maintenance burden, and progress in one barely moved
the others.

Most robotics today is still in this stage: one policy per cell, per task,
per machine.

## After: the generalist

"ChatGPT came and unified everything into a single model." The generalist's
emergent properties, including capabilities nobody explicitly trained, transfer from
one task to the next, and a single model is much easier to maintain than a
fleet of pipelines: "you have a single API."

## Next: the specialized generalist

Once the generalist exists, you can "prompt them, distill them, and fine tune
them back to the specialized tasks. And we call those the specialized
generalists." Fan's key empirical claim: "It's almost always the case that
the specialized generalists are just far stronger than the original
specialists."

Applied to robots: "Project GR00T aims to build this general purpose
foundation model... And then once we have that generalist, we'll be able to
prompt it, fine tune it, distill it down to specific robotics tasks." This
follows the same pattern used to adapt LLMs today: prompting, fine-tuning, and
distillation.

## The timeline, mapped

| Stage | Language AI | Robotics |
| --- | --- | --- |
| Specialists | One model per task (translation, NER, sentiment…) | One policy per cell (pick, weld, polish), today |
| Generalist | GPT-3 → ChatGPT unified the field | Robot foundation models, in progress (GR00T) |
| Specialized generalists | Prompted, fine-tuned, distilled per task | Still to come, per task and per embodiment |

## Strategic implication

(My synthesis.) If the generalist wins, per-customer engineering becomes
per-customer fine-tuning: the marginal cost of serving a new task collapses,
and the differentiator shifts to proprietary demonstrations plus the pipeline
that turns them into specialized models quickly. A repeatable robot-training
pipeline is the machinery for producing specialized generalists on demand.

## Keep this

Train **one generalist**. Distill **every specialist** from it.
