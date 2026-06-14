---
id: 009
title: The VLA model zoo, 2026
date: 2026-03-11
topics:
  - models
  - vla
  - foundation-models
  - architectures
source: Field survey of model papers, lab pages, and release notes, June 2026
---

# The VLA model zoo, 2026

A Vision-Language-Action (VLA) model takes in pixels and a language goal and
emits motor actions. It is the concrete architecture that fuses the two ideas
from earlier notes: the **System 1 / System 2** split of
[[002-thinking-fast-and-slow-for-robots|note 002]] and the **generalist
foundation model** thesis of [[005-generalist-first-specialist-later|note
005]]. This note maps ten of the models that defined the field from 2023 to
2025.

## What makes a model a VLA

Three design choices separate the entries below, and they matter more than
parameter count:

1. **How actions are produced.** Early VLAs (RT-2, OpenVLA) treat an action as
   *just another language token* and predict it autoregressively. The newer
   wave generates whole action chunks at once with a **diffusion** or **flow
   matching** head (Octo, RDT-1B, π0, GR00T), which is smoother and far faster
   at control rates.
2. **Open or closed weights.** Open checkpoints (OpenVLA, Octo, π0, GR00T,
   SmolVLA, RDT-1B) are what most learners and labs actually build on. The
   frontier closed models (Gemini Robotics, Helix) ship inside products.
3. **One model or two.** Some are a single network; others are an explicit
   dual system: a slow VLM planner driving a fast action decoder (Helix,
   GR00T), exactly the architecture note 002 described.

## The table

Sortable and filterable on the website. Parameter counts are total unless a
split is noted.

| Model | Developer | Year | Params | Weights | Action method | Embodiment focus |
| --- | --- | ---: | ---: | --- | --- | --- |
| [RT-2](https://robotics-transformer2.github.io/) | Google DeepMind | 2023 | up to 55B | Closed | Autoregressive tokens | Single arm |
| [Octo](https://octo-models.github.io/) | UC Berkeley (RAIL) | 2024 | 27M / 93M | Open | Diffusion head | Cross-embodiment |
| [OpenVLA](https://openvla.github.io/) | Stanford et al. | 2024 | 7B | Open | Autoregressive tokens | Single arm |
| [RDT-1B](https://rdt-robotics.github.io/rdt-robotics/) | Tsinghua (THU-ML) | 2024 | 1.2B | Open | Diffusion | Bimanual (ALOHA) |
| [π0](https://www.physicalintelligence.company/blog/pi0) | Physical Intelligence | 2024 | 3.3B | Open | Flow matching | Cross-embodiment, dexterous |
| [π0.5](https://www.physicalintelligence.company/blog/pi05) | Physical Intelligence | 2025 | ~3.3B class | Open | Flow matching | Open-world homes |
| [GR00T N1.5](https://research.nvidia.com/labs/gear/gr00t-n1_5/) | NVIDIA | 2025 | 3B | Open | Diffusion transformer | Humanoid / cross-embodiment |
| [Helix](https://www.figure.ai/news/helix) | Figure | 2025 | 7B + 80M | Closed | Latent → fast decoder | Humanoid upper body |
| [Gemini Robotics](https://deepmind.google/models/gemini-robotics/) | Google DeepMind | 2025 | Undisclosed | Closed | VLA on Gemini 2.0 | Cross-embodiment |
| [SmolVLA](https://huggingface.co/blog/smolvla) | Hugging Face | 2025 | 450M | Open | Flow matching | Low-cost arms (SO-10x) |

## Reading the zoo

(My synthesis.) Three movements show up when you sort the table.

- **Tokens → flow.** 2023's RT-2 cast actions as text tokens; by 2025 the
  open frontier (π0, π0.5, SmolVLA) had moved to flow matching and diffusion,
  which generate an action chunk in one shot and hit real-time control rates.
- **Big → right-sized.** RT-2 was 55B. Two years later SmolVLA does useful
  work at 450M on consumer hardware, and Octo runs at 93M. Capability stopped
  requiring giant models once the data and action representation improved,
  echoing the memory-not-TOPS point in
  [[006-embedded-ai-hardware-2026|note 006]].
- **One brain → two.** GR00T and Helix ship the System 1 / System 2 split as
  product architecture: a ~7B VLM planning at single-digit hertz, a small
  expert acting at 200 Hz. Note 002's open research question became a
  shipping design.

## Strategic implication

(My synthesis.) A VLA is the generalist of
[[005-generalist-first-specialist-later|note 005]] made concrete. The
open ones (π0, GR00T, OpenVLA, SmolVLA) mean a robotics company rarely starts
from zero. The differentiator moves up the stack: the **proprietary
demonstrations** used to post-train the generalist, the **embodiment-specific
System 1** that the open VLM can't supply, and the **data engine** that turns
deployment into the next training set. The base model is increasingly
shared; the advantage comes from what you fine-tune it with.

## Keep this

A VLA turns **pixels + a goal** into **motor actions**. The frontier moved
from **tokens to flow**, from **huge to right-sized**, and from **one model to
two**.
